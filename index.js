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
  time: 20
})


 bot.status({
  text: "?help | Developing...",
  type: "PLAYING",
  status: "dnd",
  time: 10
})

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Ready With $pingms'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


// Execute runner-actions after starting the server
function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}
exec('actions-runner/run.sh');

