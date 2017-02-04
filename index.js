const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

const express = require('express');
const packageInfo = require('./package.json');
const TelegramBot = require('node-telegram-bot-api');
const Brain = require('./brain');

const telegram = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

const getComic = (message) => {
  Brain.fetchComic().then(url => {
    telegram.sendMessage(message.chat.id, url);
  });
};

telegram.onText(/^\/pori/, getComic);
telegram.onText(/^\/fingerpori/, getComic);

const app = express();
app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});
const server = app.listen(process.env.PORT, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Web server started at http://%s:%s', host, port);
});
