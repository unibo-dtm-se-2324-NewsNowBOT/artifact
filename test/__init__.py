import unittest
from news_now_BOT import MyClass
from firebase import add_user_object_to_firestore

class TestMyClass(unittest.TestCase):
    # test methods' names should begin with `test_`
    def test_my_method(self):
        x = MyClass().my_method()
        self.assertEqual("Hello World", x)

# Esempio di utilizzo
utente1 = User('user_123', 'Mario','Rossi','MRoss', '18/07/2000', 'mario123', 'admin')
add_user_object_to_firestore(utente1)