const { Telegraf } = require('telegraf')
const session = require('telegraf/session')
require('dotenv').config()

const { BOT_TOKEN } = process.env

const bot = new Telegraf(BOT_TOKEN)
bot.use(session())
bot.use(Telegraf.log())

bot.start((ctx) => {
    ctx.replyWithPhoto({source: 'assets/mujer.jpg'}, {caption: 'Belleza de mujer nicaraguense'});
});

bot.startPolling();