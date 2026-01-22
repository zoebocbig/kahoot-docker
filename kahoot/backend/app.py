from flask import Flask, jsonify
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

API_KEY = os.getenv("API_KEY")

@app.route("/api/test")
def test():
    return jsonify({
        "message": "Backend OK",
        "api_key_loaded": API_KEY is not None
    })

@app.route("/api/kahoot")
def kahoot():
    url = "https://api.exemple.com/data"
    headers = {
        "Authorization": f"Bearer {API_KEY}"
    }

    response = requests.get(url, headers=headers)
    return response.json()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
