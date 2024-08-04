"use strict";

require('dotenv').config();

var TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(process.env.TOKEN, {
  polling: true
});
bot.on('message', function _callee(msg) {
  var chatId, text;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          chatId = msg.chat.id;
          text = msg.text;

          if (!(text === '/start')) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(bot.sendMessage(chatId, 'Привет!'));

        case 5:
          if (!(text === '/rule')) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(bot.sendMessage(chatId, process.env.RULE));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});