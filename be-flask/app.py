from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for your app


@app.route('/')
def get_ip():
    user_ip = request.remote_addr
    response = {
        "message": "Success",
        "ip_address": user_ip
    }
    # Including the status code (200 for success)
    return jsonify(response), 200


if __name__ == '__main__':
    app.run()
