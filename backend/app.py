from flask import Flask
from routes.user_routes import dance_routes

app = Flask(__name__)
app.register_blueprint(dance_routes)

@app.route("/")
def home():
    return "Backend läuft"

if __name__ == "__main__":
    app.run(debug=True)