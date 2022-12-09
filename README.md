# local_web_server

## 概要

クライアントとサーバを用意して，クライアントから送られるセンサデータをサーバ側が受け取り，CSVに格納しつつグラフ表示するプログラム

## client

クライアントは**Raspberry Pi Zero**を想定しており，温度センサの値を読み取りつつ送信することを想定している．

## server

サーバ側はWebサーバの役割も担っており，基本的に決まったルーティングにPOST送信されたデータを格納してブラウザに反映させる仕組みとなっている．

## プログラムについて

client側はPythonを使用し，server側はミドルウェアにNode.js・サーバ側にJSを採用している．

## 参考文献

https://mat0401.info/blog/chartjs-timeline/

https://smtengkapi.com/chart-js-use
