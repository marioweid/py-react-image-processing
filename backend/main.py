from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
app.config['Debug'] = True

# api dir to save file uploads
dir_path = os.path.dirname(os.path.realpath(__file__))
FILE_DIRECTORY = os.path.join(dir_path, "requests")


@app.route("/", methods=['GET'])
def post_file():
    return {"message": "Hello from Python!"}


port = int(os.environ.get('PORT', 8080))
if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=port)
