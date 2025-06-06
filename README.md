# NewsNowBot

**NewsNowBot** is a web application that aggregates news from multiple sources using RSS feeds while allowing users to interact through comments and ratings. The platform provides real-time updates and an intuitive interface for browsing the latest news.

## Current Version
v0.7.0

## Features

### User Authentication
- Users can **register and log in** using Firebase Authentication
- Secure authentication with email and password verification

### News Aggregation
- Retrieves news articles from various RSS feeds
- News items are displayed in real-time with clickable links to full articles

### Commenting and Rating
- Users can comment on news articles and provide ratings
- Admins can **moderate comments** by deleting inappropriate content

### Admin Panel
- Admins can manage **users, comments, and news sources**
- Ability to **add and remove RSS feeds** dynamically

## Requirements
Before running the application, ensure the following are installed:
- **Node.js (v18+)**
- **Firebase CLI**
- **Git**

## Installation

### Clone the Repository
```
git clone <repository-link>
cd newsnowbot
```

### Install Dependencies
```
npm install
```

### Configure Firebase
Ensure Firebase is set up correctly:
```
firebase login
firebase init
```
Select **Firestore, Authentication, and Hosting** during setup.

### Run the Application Locally
```
firebase emulators:start
npm start
```

### Deploy to Firebase Hosting
```
firebase deploy
```
Once deployed, the application will be accessible via the Firebase-provided URL.

## Usage

### Register an Account
- Users can sign up with their email and password
- Basic security measures, such as email validation, are in place

### Log In
- Users log in to access their personalized homepage

### Browse News
- A continuously updated list of news articles is displayed
- Clicking an article redirects users to the original news source

### Post Comments and Ratings
- Users can provide feedback on articles through comments and ratings
- Admins have moderation tools to ensure content quality

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase Authentication & Firestore (Serverless)
- **Hosting**: Firebase Hosting

## Future Enhancements
- **AI-based comment moderation** to filter spam and inappropriate content
- **Personalized news feeds** based on user preferences
- **Mobile application development** for enhanced accessibility
- **Advanced admin analytics** to monitor user engagement and interactions

## Contributing
Contributions are welcome! If you find bugs or have suggestions, feel free to open an issue or submit a pull request.

## License
This project is licensed under the **MIT License**. See the LICENSE file for more details.

## Contact
For questions or feedback, reach out to the contributors:
- **Paramjit Kaur** - [paramjit.kaur@studio.unibo.it]
- **Alice Sturaro** - [alice.sturaro@studio.unibo.it]
- **Alessandro Zecchini** - [alessandro.zecchini4@studio.unibo.it]

