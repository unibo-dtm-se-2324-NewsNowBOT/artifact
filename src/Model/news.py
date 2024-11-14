from datetime import datetime
from typing import List

class News:
    def __init__(self, title: str, timestamp: datetime, description: str, author: str, comment_list: List[Comment], mark_list: List[Mark], link: str = None):
        self._title = title
        self._timestamp = timestamp
        self._description = description
        self._author = author
        self._comment_list = comment_list
        self._mark_list = mark_list
        self._link = link

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, title):
        self._title = title

    @property
    def timestamp(self):
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        self._timestamp = timestamp

    @property
    def description(self):
        return self._description

    @description.setter
    def description(self, description):
        self._description = description

    @property
    def author(self):
        return self._author

    @author.setter
    def author(self, author):
        self._author = author

    @property
    def comment_list(self):
        return self._comment_list

    @comment_list.setter
    def comment_list(self, comment_list):
        self._comment_list = comment_list

    @property
    def mark_list(self):
        return self._mark_list

    @mark_list.setter
    def mark_list(self, mark_list):
        self._mark_list = mark_list

    @property
    def link(self):
        return self._link

    @link.setter
    def link(self, link):
        self._link = link