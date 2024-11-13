const dotenv = require('dotenv');
const path = require('path');

// 環境に応じた.envファイルを読み込む
const envFile = process.env.NODE_ENV === 'development' ? '.env.dev' : '.env';
dotenv.config({ path: path.resolve(__dirname, envFile) });

const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// Botトークンと設定の読み込み
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL;
const PORT = process.env.PORT || 3000;

// Telegram Botの初期化
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Expressサーバの初期化
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// /playコマンドを処理
bot.onText(/\/play/, (msg) => {
    const chatId = msg.chat.id;

    // Web Appを起動するボタンを送信
    bot.sendMessage(chatId, "Web App lunch", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "▶️ Web App Start",
                        url: WEB_APP_LUNCH_URL
                    }
                ]
            ]
        }
    });
});

// ルートエンドポイント
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバの起動
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
