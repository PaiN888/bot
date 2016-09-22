'use strict'

var api = require('./api')

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('221886180:AAGFflNRklNtzS4qcdAGnPQiIkiRIte6XkM')

class PingController extends TelegramBaseController{
    pingHandler($){
        api.getMZ(function(data){
            $.sendMessage(data)
        })
    }
    get routes(){
        return { 'ping':'pingHandler'}
    }
}

tg.router
  .when(['ping'],new PingController())
