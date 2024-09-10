class User:
    def __init__(self, ID: str, name: str, secondname: str, username: str, birthdate: str, password: str, role: str):
        self._ID = ID
        self._name = name
        self._secondname = secondname
        self._username = username
        self._birthdate = birthdate
        self._password = password
        self._role = role

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        self._name = name

    @property
    def secondname(self):
        return self._secondname

    @secondname.setter
    def secondname(self, secondname):
        self._secondname = secondname

    @property
    def birthdate(self):
        return self._birthdate

    @birthdate.setter
    def birthdate(self, birthdate):
        self._birthdate = birthdate

    @property
    def username(self):
        return self._username

    @username.setter
    def username(self, username):
        self._username = username

    @property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = password

    @property
    def role(self):
        return self._role

    @role.setter
    def role(self, role):
        self._role = role

    @property
    def ID(self):
        return self._ID

    @ID.setter
    def ID(self, ID):
        self._ID = ID