from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def get_ip():
    user_ip = request.remote_addr
    return f"Your IP address is: {user_ip}"


if __name__ == '__main__':
    app.run()
