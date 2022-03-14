
module.exports = ({
 name: "ping",
 code: `$author[1;$serverName[$guildID];$serverIcon[$guildID]]
$addField[1;<a:loading:933712637785686057> | Last Restart#COLON#;<t:$truncate[$divide[$readyTimeStamp;1000]]:R>]
$addField[1; <a:loading:933712637785686057> | Database Latency#COLON#;$dbPingms]
$addField[1;<a:loading:933712637785686057> | Latency#COLON#;$Pingms]
$color[1;RANDOM]
$thumbnail[1;$serverIcon[$guildID]]
`})





// module.exports = ({
//name: "ping",
//aliases: ['pong','info'],
//code: `$title[1; <a:loading:933712637785686057> Current Ping ]
//$description[1; <:tickYes:952112972048785408>| Current Ping Is \`$ping ms\`] $color[1; #ffb5b5] $addTimestamp[1] $footer[1; My Current Ping !]`
//})


// <:tickYes:952112972048785408>| Current Ping Is \`$ping ms\`