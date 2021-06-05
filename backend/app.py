from urllib import response

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from backend.culc_color import get_n_closest, get_RGB

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/upload-image', methods=['POST'])
def upload():
    print(request.files.getlist('board')[0])
    res = jsonify(message="Simple server is running")

    # Enable Access-Control-Allow-Origin
    res.headers.add("Access-Control-Allow-Origin", "*")
    # response.headers.add("Access-Control-Allow-Origin", "*")
    # print(request.files)
    board = request.files.getlist('board')[0]
    color = request.files.getlist('color')[0]

    board.save('.\\board.png')
    color.save('.\\color.png')

    r, g, b = get_RGB('.\\board.png', '.\\color.png')
    # rgb = (200, 200, 200)
    close_rgb = get_n_closest(rgb=(r, g, b), n=3)
    print(close_rgb)
    return jsonify(close_rgb)
    # return res


if __name__ == '__main__':
    app.run()
