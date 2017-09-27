#! /usr/bin/env python
# -*- coding:utf-8 -*-

from bottle import default_app, route, request, run, HTTPResponse
from io import BytesIO
from PIL import Image

application = default_app()

'''
画像変換機能
'''


@route('/revise_image', method='POST')
def revise_image():
    """
    [host]/revise_image に POST Request が来たら、
    body の画像を変換・保存し、レスポンスで変換した画像を返す。

    :return: 変換された画像をレスポンスで返す
    """

    # -- URL から画像を開く --
    data = request.body.read()

    # -- Pillow Object の画像変換処理 --
    imgObj = Image.open(BytesIO(data))
    re_image = imgObj.resize((300, 300))
    re_image = re_image.rotate(-45)

    # -- 変換した画像を保存 --
    re_image.save("./temp.jpg")

    # -- HTTP レスポンスを作成する --
    output = BytesIO()
    re_image.save(output, format='jpeg')
    res = HTTPResponse(status=200, body=output.getvalue())
    res.set_header('Content-Type', 'image/jpeg')
    return res


# -- ビルドインの開発用サーバーの起動 --
run(host='0.0.0.0', port=8080, debug=True, reloader=True)
