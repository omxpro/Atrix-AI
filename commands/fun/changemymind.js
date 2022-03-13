module.exports = ({
 name: "changemymind",
  aliases:['cmm'],
 code: `$image[1;https://vacefron.nl/api/changemymind?text=$replaceText[$replaceText[$message; ;%20];<@$mentioned[1]>;$userTag[$mentioned[1]]]]
$color[1;RANDOM]
$title[1;$message, Change my mind!]
$onlyIf[$message!=;{newEmbed: {color:#FF000}{title:Command: e!changemymind}{description:<a:WAVE6:952466432896172122> | **Description:** Change my mind. Yes!
<a:WAVE6:952466432896172122> | **Cooldown:** 3 seconds
<a:WAVE6:952466432896172122> | **Usage:** ?changemymind <query>
<a:WAVE6:952466432896172122> | **Example:** ?cmm Test It Now People !!}}]`
})