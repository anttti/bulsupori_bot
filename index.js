const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

const TelegramBot = require('node-telegram-bot-api');
const telegram = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
const Brain = require('./brain');

const getComic = (message) => {
  Brain.fetchComic().then(url => {
    telegram.sendMessage(message.chat.id, url);
  });
};

telegram.onText(/^\/pori/, getComic);
telegram.onText(/^\/fingerpori/, getComic);
