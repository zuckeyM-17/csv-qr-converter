# csv-qr-converter

## CSVファイル

### 仕様

- UTF-8
- "出力画像のファイル名","QRコードの値"の改行区切り

### Excelにおける作成方法

- A列に出力画像のファイル名
- B列にQRコードの値

を入力し、
「 メニューバー > ファイル > 名前を付けて保存... 」
でファイル形式を「CSV UTF-8（コンマ区切り）(.csv)」に変更し、任意の場所に保存する。

### 例）

amazon,https://amazon.com
google,https://google.jp
yahoo,https://yahoo.co.jp

=> amazon.png、google.png、yahoo.png
がimagesというフォルダに入って生成される。
