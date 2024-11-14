import firebase_admin
from firebase_admin import credentials, firestore

from Model.User import User
from Model.Source import Source

#Initialize the Firebase app
def initialize_firestore():
    cred = credentials.Certificate("/Volumes/AliStuSSD/MAGISTRALE/Software_engineering/newsnowbot-firebase-adminsdk-hjz3a-cec6a30cf2.json")
    firebase_admin.initialize_app(cred)

    return firestore.client()

# add user to Firestore
def add_user_object_to_firestore(user_object):
    db = initialize_firestore()

    # user's data from user_object
    user_data = {
        'id': user_object.ID,
        'name': user_object.name,
        'secondname' : user_object.secondname,
        'username' : user_object.username, 
        'birthdate' : user_object.birthdate,
        'password': user_object.password,
        'role' : user_object.role
    }
    # add user to Firestore
    db.collection('users').document(user_object.ID).set(user_data)
    print(f"User {user_object.ID} added correctly.")

"""
Test
utente1 = User('user_123', 'Mario','Rossi','MRoss', '18/07/2000', 'mario123', 'admin')
add_user_object_to_firestore(utente1)
"""

# add source to Firestone
def add_source_to_firestore(source_object):
    db = initialize_firestore()

    # source's data from source_object
    source_data = {
        'name': source_object.name,
        'url': source_object.url,
        'newsList' : source_object.news_list,
        'lastUpload' : source_object.last_upload, 
    }

    # add source to Firestore
    db.collection('sources').document(source_object.name).set(source_data)
    print(f"User {source_object.name} added correctly.")