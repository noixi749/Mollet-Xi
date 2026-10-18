# src/mami-fight.html（claude.ai 版）から GitHub 版 ../index.html を作る
import os
HERE=os.path.dirname(os.path.abspath(__file__))
s=open(os.path.join(HERE,'mami-fight.html'),encoding='utf8').read()
assert s.count("const BUILD_GH=false;")==1
s=s.replace("const BUILD_GH=false;","const BUILD_GH=true;")
old='<p class="note credit">製作者 Naohisa Akiyama　／　BGM：魔王魂</p>'
assert s.count(old)==1
s=s.replace(old,'<p class="note credit"><a href="../">マミー会ローリング・ストーンズへ</a>　／　製作者 Naohisa Akiyama　／　BGM：魔王魂</p>')
s=s.replace('<meta name="claude:viewport-fit-sides" content="cover">\n','')
head='''<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="theme-color" content="#160c0a"><link rel="manifest" href="manifest.webmanifest"><link rel="icon" href="icon-192.png"><link rel="apple-touch-icon" href="icon-192.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">
</head>
<body>
'''
open(os.path.join(HERE,'..','index.html'),'w',encoding='utf8').write(head+s.rstrip()+'\n</body>\n</html>\n')
print('built ../index.html')
