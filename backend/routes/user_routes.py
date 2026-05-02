from flask import Blueprint
from controllers.user_controller import get_users_controller, get_user_by_id_controller

user_routes = Blueprint("user_routes", __name__)

@user_routes.route("/users")
def get_users():
    return get_users_controller()

@user_routes.route("/users/<int:user_id>")
def get_user_by_id(user_id):
    return get_user_by_id_controller(user_id)