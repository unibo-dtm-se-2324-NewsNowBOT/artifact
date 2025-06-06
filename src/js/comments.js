import { db, auth } from "./firebase-config.js";
import { collection, addDoc, query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

async function loadComments() {
    const commentsContainer = document.getElementById("comments-container");
    commentsContainer.innerHTML = "<p>Loading comments...</p>";

    setTimeout(() => {  // Wait 2 seconds to give time to #news-container to load
        let newsList = document.querySelectorAll("#news-container li a");
        let newsData = [];

        newsList.forEach(news => {
            newsData.push({ title: news.textContent, link: news.href });
        });

        let commentsHTML = `<h3>Comment a news</h3>`;
        commentsHTML += `<select id="news-select">
                        <option value="">Select a news</option>`;
        newsData.forEach(news => {
            commentsHTML += `<option value="${news.link}">${news.title}</option>`;
        });
        commentsHTML += `</select>`;

        commentsHTML += `
            <textarea id="comment-text" placeholder="Write a comment..." rows="3"></textarea>
            <select id="rating">
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Interesting</option>
                <option value="3">3 - OK</option>
                <option value="2">2 - I don't care</option>
                <option value="1">1 - Terrible</option>
            </select>
            <button id="submit-comment">Comment</button>
            <div id="user-comments"></div>
        `;

        commentsContainer.innerHTML = commentsHTML;
        document.getElementById("submit-comment").addEventListener("click", submitComment);
        loadUserComments();
    }, 2000);  // Wait 2 seconds to make sure the news is loaded
}

async function submitComment() {
    const newsSelect = document.getElementById("news-select");
    const commentText = document.getElementById("comment-text").value.trim();
    const rating = document.getElementById("rating").value;
    
    if (!newsSelect.value || !commentText) {
        alert("Select a news and write a comment!");
        return;
    }

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                await addDoc(collection(db, "comments"), {
                    newsTitle: newsSelect.options[newsSelect.selectedIndex].text,
                    newsLink: newsSelect.value,
                    comment: commentText,
                    rating: parseInt(rating),
                    userEmail: user.email,
                    timestamp: new Date()
                });
                alert("Saved comment!");
                loadUserComments();
            } catch (error) {
                console.error("error saving:", error);
            }
        } else {
            alert("You must be logged in to comment!");
        }
    });
}

async function loadUserComments() {
    const userComments = document.getElementById("user-comments");
    userComments.innerHTML = "<p>Loading comments...</p>";

    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    
    let commentsHTML = "<h3>Recent comments</h3>";
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        commentsHTML += `
            <div class="comment-box">
                <p><strong>${data.newsTitle}</strong> - <a href="${data.newsLink}" target="_blank">Leggi</a></p>
                <p><em>${data.comment}</em></p>
                <p>Voto: ${data.rating}/5 ⭐ | Utente: ${data.userEmail}</p>
            </div>
        `;
    });

    userComments.innerHTML = commentsHTML;
}

document.addEventListener("DOMContentLoaded", loadComments);
