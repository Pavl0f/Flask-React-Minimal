# Flask関係のモジュール群
from flask import Flask, render_template
import sys, os, random

# サーバ作成
server = server = Flask(__name__, template_folder="../frontend/dist", static_folder="../frontend/dist")

@server.errorhandler(404)   
def not_found(e):
  return render_template('index.html')

from backend.controllers.index_controller import mod_index
server.register_blueprint(mod_index)

from backend.controllers.testapi_controller import mod_testapi
server.register_blueprint(mod_testapi)