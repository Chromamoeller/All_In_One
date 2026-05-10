from flask import Blueprint
from controllers.dance_controller import get_dances_controller

dance_routes = Blueprint("dance_routes", __name__)

@dance_routes.route("/dances")
def get_dances():
    return get_dances_controller()