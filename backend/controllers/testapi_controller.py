from flask import Blueprint, request, jsonify
import os
import traceback
import time, random

mod_testapi = Blueprint('testapi', __name__)

@mod_testapi.route('/testapi', methods=["GET","POST"])
def test():

    req = request.get_json()
    print(req)

    return jsonify({"message":f"Hello, {req['arg']} received."}), 200