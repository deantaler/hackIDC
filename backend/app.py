from flask import Flask, request

from backend.culc_color import get_n_closest

app = Flask(__name__)


@app.route('/upload-image', methods=['POST'])
def upload():
    # images = request.files.getlist("image")
    # print(request.files)
    images = request.files.getlist('0')[0]
    images.save('.\\image.png')
    # image = request.files["image"]
    print(images)
    # rgb = ofek_func(image=image)

    # return get_n_closest(rgb=rgb, n=3)


if __name__ == '__main__':
    app.run()
