from abc import ABC, abstractmethod
from typing import List, Optional
from datetime import datetime

class LibraryItem(ABC):
    def __init__(self, item_id: str, title: str, author: str, year: int):
        self._item_id = item_id
        self._title = title
        self._author = author
        self._year = year
        self._is_available = True

    @property
    def item_id(self) -> str:
        return self._item_id

    @property
    def title(self) -> str:
        return self._title

    @property
    def author(self) -> str:
        return self._author

    @property
    def year(self) -> int:
        return self._year

    @property
    def is_available(self) -> bool:
        return self._is_available

    @is_available.setter
    def is_available(self, value: bool):
        self._is_available = value

    @abstractmethod
    def get_details(self) -> str:
        pass

    def __str__(self) -> str:
        return f"{self.get_details()} (Available: {self._is_available})"


class Book(LibraryItem):
    def __init__(self, item_id: str, title: str, author: str, year: int, isbn: str, pages: int):
        super().__init__(item_id, title, author, year)
        self._isbn = isbn
        self._pages = pages

    @property
    def isbn(self) -> str:
        return self._isbn

    @property
    def pages(self) -> int:
        return self._pages

    def get_details(self) -> str:
        return f"Book: {self._title} by {self._author} ({self._year}) - ISBN: {self._isbn}, {self._pages} pages"


class Magazine(LibraryItem):
    def __init__(self, item_id: str, title: str, author: str, year: int, issue_number: int, publisher: str):
        super().__init__(item_id, title, author, year)
        self._issue_number = issue_number
        self._publisher = publisher

    @property
    def issue_number(self) -> int:
        return self._issue_number

    @property
    def publisher(self) -> str:
        return self._publisher

    def get_details(self) -> str:
        return f"Magazine: {self._title} - Issue #{self._issue_number} by {self._publisher} ({self._year})"


class Library:
    def __init__(self):
        self.__items: List[LibraryItem] = []

    def add_item(self, item: LibraryItem) -> None:
        self.__items.append(item)
        print(f"Added {item.title} to the library.")

    def display_all_items(self) -> None:
        if not self.__items:
            print("No items in the library.")
            return

        print("\nLibrary Catalog:")
        print("-" * 50)
        for item in self.__items:
            print(item)
        print("-" * 50)

    def search_by_title(self, title: str) -> List[LibraryItem]:
        return [item for item in self.__items if title.lower() in item.title.lower()]

    def search_by_id(self, item_id: str) -> Optional[LibraryItem]:
        for item in self.__items:
            if item.item_id == item_id:
                return item
        return None


def main():
    # Create library instance
    library = Library()

    # Add some sample items
    book1 = Book("B001", "Python Programming", "John Smith", 2023, "978-3-16-148410-0", 350)
    book2 = Book("B002", "Data Structures", "Jane Doe", 2022, "978-3-16-148410-1", 450)
    magazine1 = Magazine("M001", "Tech Monthly", "Tech Publications", 2024, 1, "Tech Media")
    magazine2 = Magazine("M002", "Science Today", "Science Press", 2024, 2, "Science Media")

    library.add_item(book1)
    library.add_item(book2)
    library.add_item(magazine1)
    library.add_item(magazine2)

    while True:
        print("\nLibrary Management System")
        print("1. Display all items")
        print("2. Search by title")
        print("3. Search by ID")
        print("4. Exit")
        
        choice = input("\nEnter your choice (1-4): ")

        if choice == "1":
            library.display_all_items()
        
        elif choice == "2":
            title = input("Enter title to search: ")
            results = library.search_by_title(title)
            if results:
                print("\nSearch Results:")
                for item in results:
                    print(item)
            else:
                print("No items found with that title.")
        
        elif choice == "3":
            item_id = input("Enter item ID to search: ")
            item = library.search_by_id(item_id)
            if item:
                print("\nFound item:")
                print(item)
            else:
                print("No item found with that ID.")
        
        elif choice == "4":
            print("Thank you for using the Library Management System!")
            break
        
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main() 