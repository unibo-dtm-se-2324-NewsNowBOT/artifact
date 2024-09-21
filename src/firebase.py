import firebase_admin
from firebase_admin import credentials, firestore

from Model.User import User

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

# Esempio di utilizzo
utente1 = User('user_123', 'Mario','Rossi','MRoss', '18/07/2000', 'mario123', 'admin')
add_user_object_to_firestore(utente1)