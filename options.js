module.exports = {
    mainMenu: {
            reply_markup: {
                keyboard: [
                    [{text: "Добавить фразу", web_app: {url: process.env.WEBAPP + '/add'}}],
                    [{text: "Слот 1", web_app: {url: process.env.WEBAPP + '/slot_1'}}],
                    [{text: "Слот 2", web_app: {url: process.env.WEBAPP + '/slot_2'}}],
                    [{text: "Слот 3", web_app: {url: process.env.WEBAPP + '/slot_3'}}],
                    [{text: "Слот 4", web_app: {url: process.env.WEBAPP + '/slot_4'}}],
                    [{text: "Слот 5", web_app: {url: process.env.WEBAPP + '/slot_5'}}],
                    [{text: "Словарь", web_app: {url: process.env.WEBAPP + '/slovar'}}],
                    [{text: "Статистика", web_app: {url: process.env.WEBAPP + '/stat'}}]
                ]
            } 
      },
    
    changeMenu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {text: 'Слот 1', callback_data: 'slot_1'},
                    {text: 'Слот 2', callback_data: 'slot_2'}
                ]
            ]
        })
    }
}

