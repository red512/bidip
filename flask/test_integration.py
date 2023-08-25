# tests/test_integration.py
import requests


def test_home_route():
    response = requests.get('http://127.0.0.1:5000/')
    assert response.status_code == 200
    assert b'Your IP address is:' in response.content
    print("intergration tests passed")


test_home_route()
