module.exports = ({
name: "meme",
description: "Returns a random reddit post from a specified subreddit.",
usage: "randomreddit <subreddit>",
$if: "v4",
code: 
`$addButton[1;Comments: $replaceText[$getObjectProperty[numComments];undefined;0];primary;comments;yes;💬]
$addButton[1;Downvotes: $replaceText[$getObjectProperty[downvotes];undefined;0];danger;downvotes;yes;⬇]
$addButton[1;Upvotes: $replaceText[$getObjectProperty[upvotes];undefined;0];success;upvotes;yes;⬆]
$addTimestamp[1]
$footer[1;From r/$splitText[2];$serverIcon[$guildID]]
$title[1;$getObjectProperty[title];$getObjectProperty[url]]
$color[1;RANDOM]
$replaceText[$replaceText[$checkContains[$getObjectProperty[image];https://v.redd.it/];true;];false;$image[1;$getObjectProperty[image]]]
$reply[$messageID;no]
$textSplit[$splitText[2];/]
$textSplit[$getObjectProperty[url];https://reddit.com/]
$if[$checkContains[$getObjectProperty[image];https://v.redd.it/]==false]
$createObject[$jsonRequest[https://cryptons-api.herokuapp.com/api/v1/reddit?subreddit=meme]]
$endIf
$if[$checkContains[$getObjectProperty[image];https://v.redd.it/]==false]
$createObject[$jsonRequest[https://cryptons-api.herokuapp.com/api/v1/reddit?subreddit=meme]]
$endIf
$onlyIf[$getObjectProperty[url]!=;{newEmbed: {description:...}}]
$createObject[$jsonRequest[https://cryptons-api.herokuapp.com/api/v1/reddit?subreddit=meme]]
`})