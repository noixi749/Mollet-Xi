# Mollet Xi シリーズ

製作者 Naohisa Akiyama

## アプリ

| アプリ | 役目 | ブラウザ版 | Android（APK） |
|---|---|---|---|
| Mollet Xi | 計測・CDI（SHIRATAKI）の書き換え・解析・セッティング | https://noixi749.github.io/Mollet-Xi/ | [MolletXi.apk](https://noixi749.github.io/Mollet-Xi/apk/MolletXi.apk)（1.2.0） |
| 耐久がんこちゃん | 耐久レース用。メーター・レースメーター・ピット（子機・親機） | https://noixi749.github.io/Mollet-Xi/ganko/ | [Ganko.apk](https://noixi749.github.io/Mollet-Xi/apk/Ganko.apk)（1.0.0） |
| Mollet Xi データ盗む君 | 今のCDIの点火マップを読み取る | https://noixi749.github.io/Mollet-Xi/nusumu/ | [DataNusumu.apk](https://noixi749.github.io/Mollet-Xi/apk/DataNusumu.apk)（1.0.0） |
| Mollet Xi SD測る君 | 最高速・CVT計算機 | https://noixi749.github.io/scooter-topspeed/ | [SDhakarukun.apk](https://noixi749.github.io/scooter-topspeed/SDhakarukun.apk)（2.2.0） |

- APK は4つとも同じ鍵で署名しているので、入れるとアプリどうしでデータ（プリセット・マイバイク・設定・走行記録・盗んだマップ）を見せ合えます。
- ブラウザ版も全部 noixi749.github.io の下にあるので、同じブラウザならデータを見せ合えます。
- ブラウザ版は Chrome か Edge で開いて、メニューの「アプリをインストール」でホーム画面に置けます。一度開けば、電波の弱いサーキットでも開けます（地図とピット通信はネットが要ります）。

## そのほかのアプリ

| アプリ | 役目 | ブラウザ版 | Android（APK） |
|---|---|---|---|
| 切り貼り君 | YouTube用の動画編集。カット・テロップ・BGM・Claudeに頼んで編集 | https://noixi749.github.io/Mollet-Xi/kirihari/ | [Kirihari.apk](https://noixi749.github.io/Mollet-Xi/apk/Kirihari.apk)（1.1） |
| イツキくんち | 登録した行き先までの直線距離と方向（コンパス）をリアルタイムで表示。ナビ起動、到着するとお祝い（90m以内で「到着！」ボタン） | https://noixi749.github.io/Mollet-Xi/itsuki/ | [Itsuki.apk](https://noixi749.github.io/Mollet-Xi/apk/Itsuki.apk)（1.4） |
| マミー会ローリング・ストーンズ | 顔を積み上げて、落とした人の負け。合言葉で2〜8人のオンライン対戦・観戦・ホストのルール設定（ハイグリップ・特殊ステージ・台の大きさ ほか）・プロフィール・キャラ作成・レートとランキング | https://noixi749.github.io/Mollet-Xi/mummy/ | [MummyRS.apk](https://noixi749.github.io/Mollet-Xi/apk/MummyRS.apk)（1.4） |
| マミー会弾幕郷 | マミー会の顔で遊ぶ東方風の弾幕シューティング。ストーリー5面（スペルカードは全部ヤギをぶっ飛ばす系）・スペルプラクティス・合言葉で2〜8人バトル（花映塚風）・観戦・CPU対戦・ランキング | https://noixi749.github.io/Mollet-Xi/mummy/stg/ | ブラウザ版のみ |
| マミー会ファイト | マミー会の顔で戦う棒人間の格ゲー。ジョブ9種・ステップ回避（格闘・大剣・魔法・銃・ロボ・侍・ボディビルダー・勇者・天使）×武器・ステータス振り分け・コマンド技・スライディング・ジャストガードでカウンター・必殺技・ストーリー4章27話（ヤギ団をぶっ飛ばす・第3章は世界編・第4章は陰キャの王）・組手（勝ち抜き）とランキング・練習モード・3〜4人乱闘・合言葉で2〜4人のオンライン対戦・ステージ17種・コントローラー対応・問い合わせ | https://noixi749.github.io/Mollet-Xi/mummy/fight/ | ブラウザ版のみ |

- 切り貼り君の APK は Mollet Xi シリーズとは別の鍵で署名しています（シリーズのアプリとはデータを共有しません）。
- アプリ版とこのブラウザ版で Claude に頼むときは、Anthropic の API キーを入れて使います（Claude の月額プランとは別に、使った分だけ料金がかかります）。
- 書き出した動画は、アプリ版はスマホの「ムービー／切り貼り君」フォルダ、ブラウザ版はダウンロードに保存されます。
- イツキくんちの行き先（名前・住所・位置）は、初めて開いたときに登録します。登録した内容はそのスマホ（ブラウザ）の中だけに保存され、ここには入っていません。
- イツキくんちの APK も、ほかのアプリとは別の鍵で署名しています。
- マミー会ローリング・ストーンズは、作ったキャラとランキングをサーバー（Firebase）でみんなと共有します。APK も別の鍵で署名しています。
- マミー会弾幕郷は、マミー会のプロフィール（名前・アイコン）と作ったキャラをそのまま使います。ランキングとバトルも同じサーバー（Firebase）です。
- マミー会ファイトも同じサーバー（Firebase）で、キャラ名の変更（全員に反映）・組手ランキング・問い合わせ・オンライン対戦をしています。自分で作ったキャラと写真はそのスマホ（ブラウザ）の中だけに保存されます。BGM：魔王魂。
- マミー会ファイトの元のファイルとメンテ用のメモは `mummy/fight/src/` にあります（問い合わせは毎朝 Claude が読んで反映します）。

## ロガーの書き込みページ

https://noixi749.github.io/Mollet-Xi/flash/

- パソコンの Chrome か Edge で開いて、ボタンを押すだけで CATロガーのファームを書き込めます（Arduino IDE はいりません）。
- ファーム 1.1.0 から、金ロガー（子基板でパルサーをつないだロガー）がデータ盗む君の計測もします。データ盗む君アプリで「MolletXi-LOG」を選んでつなぎます。
- 2回目からは、スマホだけで更新できます（アプリの「ファームを更新」か BOOT ボタン2秒 → Wi-Fi「MolletXi-LOG-UPDATE」→ 192.168.4.1）。

## APK の入れ方

1. 上のリンクをスマホで開いてダウンロード
2. ファイルを開く →「この提供元のアプリを許可」をオン → インストール
3. 入れたら一度開いて、出てくる許可（位置情報・付近のデバイス など）を許可

## Bluetooth の機器の名前

- SHIRATAKI（CDI）：`MolletXi-CDI`
- CATロガー：`MolletXi-LOG`
- データ盗む君：`MolletXi-NSM`

署名の鍵（`naohisa-apps.p12`）はこのリポジトリには置きません。
