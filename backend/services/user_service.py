def get_all_users():
    users = [
        {"id": 1, "name": "Max"},
        {"id": 2, "name": "Anna"}
    ]

    return users


def get_user_by_id(user_id):
    users = get_all_users()

    for user in users:
        if user["id"] == user_id:
            return user

    return None