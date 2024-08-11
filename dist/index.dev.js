"use strict";

require("dotenv").config();

var TelegramBot = require("node-telegram-bot-api");

var _require = require("./options.js"),
    mainMenu = _require.mainMenu;

var bot = new TelegramBot(process.env.TOKEN, {
  polling: true
});
var webAppUrl = process.env.WEBAPP;

var start = function start() {
  return regeneratorRuntime.async(function start$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          bot.setMyCommands([{
            command: "/start",
            description: "Запуск бота"
          }, {
            command: "/rule",
            description: "Правила изучения"
          }]);
          bot.on("message", function _callee(msg) {
            var chatId, text;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    chatId = msg.chat.id;
                    text = msg.text; // const html = `<pre>Изучайте ежедневно по <b>20-30 карточек</b> и повторяйте их в течение дня.</pre><pre>В конце дня переместите изученные карточки во вторую ячейку.</pre><pre>На следующий день изучайте 20-30 новых карточек, и так продолжайте, пока вторая ячейка не будет заполнена полностью. Затем возьмите все карточки из второй ячейки и повторите их.</pre><pre>Слова, которые вы забыли, возвращаются в первую ячейку, а слова, что помните, переходят в следующую.</pre><pre>Методика флеш-карточек English Student основана на простом и эффективном подходе к изучению английского языка с использованием повторения пройденного лексического материала и систематического обновления. Каждое изученное слово повторяйте через день, через 3 дня, через 7 дней и так далее, в течение определенного периода времени</pre>`;

                    if (!(text === "/start")) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 5;
                    return regeneratorRuntime.awrap(bot.sendMessage(chatId, "Привет!", mainMenu));

                  case 5:
                    if (!(text === "/rule")) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 8;
                    return regeneratorRuntime.awrap(bot.sendMessage(chatId, process.env.RULE, {
                      parse_mode: "HTML"
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

start();