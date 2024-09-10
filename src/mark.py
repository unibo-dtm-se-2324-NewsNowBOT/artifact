class Mark:
    def __init__(self, user, value):
        self._user = user
        self._value = value

    @property
    def user(self):
        return self._user

    @user.setter
    def user(self, user):
        self._user = user

    @property
    def value(self):
        return self._value

    @value.setter
    def value(self, value):
        self._value = value