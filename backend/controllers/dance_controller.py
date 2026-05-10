from flask import jsonify
from services.dance_service import get_all_dances

def get_dances_controller():
    dances = get_all_dances()
    return jsonify(dances)