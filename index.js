const aoijs = require ('aoi.js')
const bot = new aoijs.Bot({
   token: "OTQ4OTI1MTk0MzYwMTkzMDc0.YiC5dA.65AQ-A0Sp0ho7FTsjuJaqeaFmho", //Discord Bot Token
   prefix: "?", //Discord Bot Prefix
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



bot.interactionCommand({
name: "aoijs", 
prototype : 'slash',
code: `$interactionReply[AOIjs is an awesome package!]`
/*
The code will be execute once /aoijs has been ran
*/
})
bot.onInteractionCreate()