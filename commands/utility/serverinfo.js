module.exports = ({
  name:'serverinfo',
  aliases: ['walpaper' ,'wallpapaer'],
 code: `$title[1; Info Of $serverName[$guildID]]

$description[1; - Server Owner - <@$ownerID[$guildID]>
- Date Created - \`$creationDate[$guildID;date]\`
- Members - \`$membersCount[$guildID;no]\`
- Roles - \`$roleCount[$guildID]\`]
$footer[1; Server Info]  $addTimestamp[1] $color[1; #FF000]

`,
})