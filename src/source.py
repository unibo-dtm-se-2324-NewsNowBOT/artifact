from typing import List

class News:
    def __init__(self, title, timestamp, description, author, comment_list, mark_list, link=None):
        self._title = title
        self._timestamp = timestamp
        self._description = description
        self._author = author
        self._comment_list = comment_list
        self._mark_list = mark_list
        self._link = link

class Source:
    def __init__(self, name: str, url: str, news_list: List[News], last_upload: str = None):
        self._name = name
        self._url = url
        self._last_upload = last_upload
        self._news_list = news_list

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        self._name = name

    @property
    def url(self):
        return self._url

    @url.setter
    def url(self, url):
        self._url = url

    @property
    def last_upload(self):
        return self._last_upload

    @last_upload.setter
    def last_upload(self, last_upload):
        self._last_upload = last_upload

    @property
    def news_list(self):
        return self._news_list

    @news_list.setter
    def news_list(self, news_list):
        self._news_list = news_list
