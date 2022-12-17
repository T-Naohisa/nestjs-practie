ドキュメントベース：practice 配下
作成：anime 配下

フォルダ構成と責務
anime
├── contollers
│ └── xxxController.ts
├── usecases
│ └── xxxService.ts
├── domains
│ ├── xxx
│ └── xxx.ts
├── interfaces
│ └── xxx
│ └── xxxx.ts
└──

予定
controller・・・リクエストの受け口
usecases・・・ドメインのインスタンスを生成、API の実行とエラーハンドリングの処理を受け持つ
domains・・・ドメインモデル、ドメインが持つ処理を実装する
interfaces・・・API の実行
