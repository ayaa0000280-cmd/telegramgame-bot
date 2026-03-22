const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
const token = "حط_توكن_بوتك_هنا";
const bot = new TelegramBot(token);

bot.setWebHook("https://telegramgame-bot.onrender.com/" + token);

app.use(express.json());

app.post("/" + token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.on("inline_query", (q) => {
  bot.answerInlineQuery(q.id, [{
    type: "game",
    id: "1",
    game_short_name: "snake_game"
  }]);
});

app.listen(3000, () => {
  console.log("Bot is running");
});
