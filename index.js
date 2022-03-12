 const aoijs = require ('aoi.js')
 require('dotenv').config()
 const bot = new aoijs.Bot({
   token: process.env.TOKEN, //Discord Bot Token
   prefix: process.env.PREFIX, //Discord Bot Prefix
   intents: "all", //Discord Intents 
   mobile: true 
 })

 bot.onMessage() //Allows to execute Commands

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")


 bot.status({
  text: "?help | Made By ! NotEnd#0001.",
  type: "PLAYING",
  status: "dnd",
  time: 12
})



