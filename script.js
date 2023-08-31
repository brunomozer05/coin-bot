require('dotenv').config();

const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });



client.on('ready', () => {
    console.log('bot is ready');
})

client.on('messageCreate', async (message) => {
    if (message.content === 'help') {
        message.reply({
            content: 'All currencies are calculated with 1 unit being converted into BRL',
        })
    }
    if (message.content === 'help') {
        message.reply({
            content: 'to use this bot you need to type: currencies',
        })
    }
    if (message.content === 'currencies') {
        message.reply({
            content: 'type : dollar/euro/rublo/btc',
        })
    }
    if (message.content === 'dollar') {
        const url = 'https://economia.awesomeapi.com.br/last/'
        const coins = 'USD-BRL'
    
        const currency = await fetch(url + coins)
            .then(currency => currency.json())
            .then(coins => coins.USDBRL.bid)

            const money = (currency * 1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        message.reply({
            content: money,
        })
    }

    if (message.content === 'euro') {
        const url = 'https://economia.awesomeapi.com.br/last/'
        const coins = 'EUR-BRL'
    
        const currency = await fetch(url + coins)
            .then(currency => currency.json())
            .then(coins => coins.EURBRL.bid)

         
            const money = (currency * 1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        message.reply({
            content: money,
        })
    }

    if (message.content === 'btc') {
        const url = 'https://economia.awesomeapi.com.br/last/'
        const coins = 'BTC-BRL'
    
        const currency = await fetch(url + coins)
            .then(currency => currency.json())
            .then(coins => coins.BTCBRL.bid)

            const money = (currency * 1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        message.reply({
            content: money,
        })
    }
    if (message.content === 'rublo') {
        const url = 'https://economia.awesomeapi.com.br/last/'
        const coins = 'RUB-BRL'
    
        const currency = await fetch(url + coins)
            .then(currency => currency.json())
            .then(coins => coins.RUBBRL.bid)

            const money = (currency * 1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        message.reply({
            content: money,
        })
    }
})

client.login(process.env.DISCORD_BOT_ID);