from flask import Flask, jsonify, request, send_file
import json
from hash import getHash

app = Flask(__name__);

@app.route("/", methods=["GET"])
def main():
	return send_file("./client/index.html", mimetype="text/html");

@app.route("/hash", methods=["POST"])
def hash():
	data = json.loads(request.get_data());
	return {
		"hash": getHash(data["value"]),
	};

@app.route("/client/<fileName>", methods=["GET"])
def file(fileName):
	if ".js" in fileName:
		return send_file(f"./client/{fileName}", mimetype="text/javascript");
	if ".css" in fileName:
		return send_file(f"./client/{fileName}", mimetype="text/css");
	if ".ico" in fileName:
		return send_file(f"./client/{fileName}", mimetype="image/x-icon");
	if ".png" in fileName:
		return send_file(f"./client/{fileName}", mimetype="image/png");