'use strict'

var api = require('./api')

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('YOU_TOKEN')

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
