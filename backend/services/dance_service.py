
from data.dance.chachcha import basic_movement, fan, hockey_stick, spot_turn_to_right

def get_all_dances():
    return [
        basic_movement.close_basic,
        fan.fan,
        hockey_stick.hockey_stick,
        spot_turn_to_right.spot_turn_right,
    ]