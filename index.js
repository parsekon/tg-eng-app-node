require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const { mainMenu, changeMenu } = require("./options.js");

const bot = new TelegramBot(process.env.TOKEN, { polling: true });
const webAppUrl = process.env.WEBAPP;

const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "Запуск бота" },
    { command: "/rule", description: "Правила изучения" },
  ]);

  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // const html = `<pre>Изучайте ежедневно по <b>20-30 карточек</b> и повторяйте их в течение дня.</pre><pre>В конце дня переместите изученные карточки во вторую ячейку.</pre><pre>На следующий день изучайте 20-30 новых карточек, и так продолжайте, пока вторая ячейка не будет заполнена полностью. Затем возьмите все карточки из второй ячейки и повторите их.</pre><pre>Слова, которые вы забыли, возвращаются в первую ячейку, а слова, что помните, переходят в следующую.</pre><pre>Методика флеш-карточек English Student основана на простом и эффективном подходе к изучению английского языка с использованием повторения пройденного лексического материала и систематического обновления. Каждое изученное слово повторяйте через день, через 3 дня, через 7 дней и так далее, в течение определенного периода времени</pre>`;

    if (text === "/start") {
      await bot.sendMessage(chatId, "Привет!", mainMenu);
    }

    if (text === "/rule") {
      await bot.sendMessage(chatId, process.env.RULE, {
        parse_mode: "HTML",
      });
    }

    if (msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data);
      console.log(data);
      await bot.sendMessage(chatId, `English: ${data?.eng} Перевод: ${data?.rus}`, changeMenu);
    } catch (e) {
      console.log(e);
    }
  }
  });
};

start();
