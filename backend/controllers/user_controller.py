from flask import jsonify
from services.user_service import get_all_users, get_user_by_id

def get_users_controller():
    users = get_all_users()
    return jsonify(users)


def get_user_by_id_controller(user_id):
    user = get_user_by_id(user_id)

    if user is None:
        return jsonify({"error": "User nicht gefunden"}), 404

    return jsonify(user)