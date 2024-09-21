class Comment:
    def __init__(self, user, timestamp, text):
        self._user = user
        self._timestamp = timestamp
        self._text = text

    @property
    def user(self):
        return self._user

    @user.setter
    def user(self, user):
        self._user = user

    @property
    def timestamp (self) :
        return self._timestamp
    
    @timestamp.setter
    def timestamp(self, timestamp):
        self._timestamp = timestamp
        
    @property
    def text (self) :
        return self._text
        
    @text. setter
    def text (self, text) :
        self._text = text