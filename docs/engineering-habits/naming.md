---
title: Engineering Superpower - Making your code obvious
sidebar_position: 3
---

## **Problem: Even you don't understand your own code**

When writing code, one of the most significant ways to improve its readability and maintainability is choosing meaningful names for variables, functions, and classes. Descriptive and clear names act as a form of documentation, helping other developers (and your future self) understand the code's intent and functionality without needing extensive comments or explanations.

In this article, we'll explore best practices for naming in code and how consistent, meaningful names can transform your development process.

## Descriptive names

Choosing descriptive names means selecting words that clearly convey the purpose of the variable or function. For instance, instead of using generic names like `x`, `data`, `item`, `csvFile`, `records`, `rows` or `temp`, opt for more specific names like `userCount`, `crawlerConfig`, `webpage`, `task` or `cardTransaction`.

When writing code, one of the most significant ways to improve its readability and maintainability is by choosing meaningful names for variables, functions, and classes. Descriptive and clear names act as a form of documentation, helping other developers (and your future self) understand the code's intent and functionality without needing extensive comments or explanations.

```python
# Poor naming
def get_data():
    return [1, 2, 3]

# Improved naming
def get_user_ids():
    return [1, 2, 3]
```

In the improved example, `get_user_ids` immediately informs the reader that the function returns a list of user IDs.

## Avoid encodings

Avoid using prefixes or suffixes that encode type information or Hungarian notation (e.g., `strName`, `iCount`). Instead, focus on names that describe the variable's role and meaning within the context of your code.

**Example:**

```python
# Poor naming with encoding
strName = "Alice"

# Improved naming
name = "Alice"
```

## Pronounceable and searchable names

Names should be easy to read aloud and searchable within your codebase. Avoid using abbreviations that are not universally understood. This practice makes discussions about the code more straightforward and helps in searching and refactoring.

**Example:**

```python
# Poor naming with abbreviations
usrCnt = 5

# Improved naming
userCount = 5
```

## Consistency

Consistency in naming is crucial for reducing confusion and enhancing code readability. For example, if we regularly load data from a database, we should choose one term and stick with it, such as always using `get_users` rather than mixing it with `load_users`, `fetch_users`, `load_users`, `list_users` or `find_users`. Mixing these terms can lead to confusion and make the code harder to follow.

**Example:**

```python
# Inconsistent naming
def get_users_from_db(client_id):
    # logic to get users

def fetch_all_data(client_id):
    # logic to fetch whatever
    
def find_pages(client_id):
    # logic to load pages
    
def list_keywords(client_id):
    # logic to load pages

def _get_tag_finder_products():
    # logic to find tags on a product
```

**Improved consistency:**

```python
# Consistent naming
def find_users(client_id):
    # logic to get users
    
def find_pages(client_id):
    # logic to load pages
    
def find_keywords(client_id):
    # logic to load keywords

def find_product_tags(client_id, product_id):
    # logic to find tags on a product
```

## Specific naming conventions

Using specific and descriptive names for functions that perform particular tasks helps make the code more intuitive. For example, in the codebase for Instagram, a function like `find_photos` is a bit vague for a whole social network that’s built around photos. By using specific naming conventions, we can make it more obvious what the functionality provides, for example `find_photos_by_hashtag`, `find_photos_by_user`, `find_photos_by_location` have a clear purpose.

**Example:**

```python
# Poor naming
def get_data():
    # logic to get data

# Improved naming
def find_users_by_client(client_id):
    # logic to find users by client ID

def find_pages_by_page_type(page_type):
    # logic to find pages by page type
```

In these improved examples, the function names `find_users_by_client` and `find_pages_by_page_type` clearly describe what each function does, making the codebase easier to understand and navigate.

## Standard field names

Using standard names for common fields helps maintain clarity. For instance, if most records include a date field for when the record was created, it makes sense to consistently name it `created_on` and `updated_on`, to align with industry standards. Changing this field name in different tables can create unnecessary confusion.

**Example:**

```python
# Inconsistent naming of timestamp fields
user_created_date = "2023-06-17"
record_creation_time = "2023-06-17"
time_created = "2023-06-17"
time_added = "2023-06-17"
time_updated = "2023-06-17"
updated_on = "2023-06-17"

# Consistent naming
created_on = "2023-06-17"
updated_on = "2024-01-17"
```

By adhering to these principles of meaningful, consistent naming, we can create a codebase that is much easier to understand, maintain, and extend.