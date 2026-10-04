# Mollet Xi シリーズ

製作者 Naohisa Akiyama

## アプリ

| アプリ | 役目 | ブラウザ版 | Android（APK） |
|---|---|---|---|
| Mollet Xi | 計測・CDI（SHIRATAKI）の書き換え・解析・セッティング | https://noixi749.github.io/mollet-xi/ | [MolletXi.apk](https://noixi749.github.io/mollet-xi/apk/MolletXi.apk)（1.2.0） |
| 耐久がんこちゃん | 耐久レース用。メーター・レースメーター・ピット（子機・親機） | https://noixi749.github.io/mollet-xi/ganko/ | [Ganko.apk](https://noixi749.github.io/mollet-xi/apk/Ganko.apk)（1.0.0） |
| Mollet Xi データ盗む君 | 今のCDIの点火マップを読み取る | https://noixi749.github.io/mollet-xi/nusumu/ | [DataNusumu.apk](https://noixi749.github.io/mollet-xi/apk/DataNusumu.apk)（1.0.0） |
| Mollet Xi SD測る君 | 最高速・CVT計算機 | https://noixi749.github.io/scooter-topspeed/ | [SDhakarukun.apk](https://noixi749.github.io/scooter-topspeed/SDhakarukun.apk)（2.2.0） |

- APK は4つとも同じ鍵で署名しているので、入れるとアプリどうしでデータ（プリセット・マイバイク・設定・走行記録・盗んだマップ）を見せ合えます。
- ブラウザ版も全部 noixi749.github.io の下にあるので、同じブラウザならデータを見せ合えます。
- ブラウザ版は Chrome か Edge で開いて、メニューの「アプリをインストール」でホーム画面に置けます。一度開けば、電波の弱いサーキットでも開けます（地図とピット通信はネットが要ります）。

## APK の入れ方

1. 上のリンクをスマホで開いてダウンロード
2. ファイルを開く →「この提供元のアプリを許可」をオン → インストール
3. 入れたら一度開いて、出てくる許可（位置情報・付近のデバイス など）を許可

## Bluetooth の機器の名前

- SHIRATAKI（CDI）：`MolletXi-CDI`
- CATロガー：`MolletXi-LOG`
- データ盗む君：`MolletXi-NSM`

署名の鍵（`naohisa-apps.p12`）はこのリポジトリには置きません。
