const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on("ready", () => {
  console.log("I am ready!");
});

//Actual Bot Stuff

var Headcanons = [
  "Spanish proficiency ranking: 1. Thor 2. Loki 3. Tony 4. Peter 5. Bruce",
  "F.R.I.D.A.Y.'s translation engine may not be very accurate when translating Spanish due to the Spanish knowledge of its programmer a.k.a. Tony.",
  "Thor likes ice cream, Loki doesn't like Midgardian food too much.",
  "During her studies, Stephanie A. Stark went by her real name while claiming she was not related to Tony Stark at all, arguing many people share the last name 'Stark'.",
  "When fleeing from her parents' home, Carla decided her cat Dalton should stay, as he is happier with them.",
  "When Stephanie A. Stark was presumed dead, her best friend Peter Parker made sure to rewatch and read both Card Captor Sakura and Tsubasa RESERVoir CHRoNiCLE (several times, even). His favourite characters are Keroberos and Kurogane, respectively, but he holds Syaoran in high regard.",
  "The current Avengers lineup includes Iron Man, Thor, Hulk/Bruce Banner, War Machine and Spiderman. The rest of superheroes either decided to live quietly for now or are outlaws who sided with Captain America during the events of Civil War.",
  "Statistics say that Carla is 'with Loki' in 99.9% of the recorded occasions. Seemingly, disagreement only occurs when the topic is related to the following keywords: meat, vegan, dairy."

];

var Quote = [
  "Carla and I? Too many ideological differences. She doesn't agree on treating people like cattle. Hell, she doesn't even agree on treating *cattle* like cattle. -Loki",
  "No llorando por favor! -Peter",
  "Thor: Curses! I happen to be running out of battery!\nLoki: *Sigh* I know you don't know what a battery is, brother.",
  "Tony: DE DÓNDE HAS SACADO ESE ANILLO??\nSteph: No sé de Amazon o Ebay o algo no me acuerdo...?",
  "Tony: Hey kid--- What do you think you are doing?!\nStephanie: I'm a millenial. What did you expect, leaving a computer in the room I'm in and ME NOT USING IT?",
  "Carla: Fuck Stark Industries.\nFrank: Yeah!!! Fuck Tony Stark!!!!!!!\nShawn: Frank??",
  "Is Thor in there? Are we gonna see Thor, guys???? Are we gonna see Thor? I hope Thor is in there. -Ana",
  "Carla: Well, well, well... If it isn't Stephanie Stark... I suppose you want an explanation.\nPeter: or... AN ICE-CREAM! Who wants ice cream?!\nAna: NO QUIERO COMIDA, QUIERO RESPUESTAS!",
  "As a disabled teen with no money and no future, I couldn't pass up the chance to get 50k just for befriending some nerd. -Carla",
  "Don't try me, Stephanie. I'm not getting paid to be your friend anymore. -Carla",
  "Don't try me, Stephanie. I'm not getting paid to be your friend anymore.\nAna: ARE YOU GETTING PAID TO BE MY FRIEND, CARLA???\nCarla: No, but I'd take payment if you offered. I do provide a great friend service after all.",
  "Mira... La verdad es que no se que esta pasando pero. Cual de las dos me da mas chances de ver a Thor Odinson?? -Ana",
  "Steff, if you wanna cry, cry, pero dame la contraseña del wifi y leo los dms. -Ana",
  "Ana: Nah, no creo que Loki esté aquí. Lo matarían los otros Avengers.\nCarla: Pero acuérdate que puede estar sin ser visto podría ser un pájaro una serpiente o un... gato....\n*el gatito negro sale pitando*",
  "Peter: Trying on Stephanie's glasses How do I look?!\nStephanie: *squinting* You look blurry.",
  "Tony Stark is possibly the second worst person in the galaxy. ...Still an improvement, though. -Steph",
  "Thor:  I must say, brother, I must commend your brave attitude. What hidden motive or promise of reward did drive your actions this time?\nLoki: El iron man iba a estar insufrible si le mataban a la hija."
]

var Questions = [
  "True or False: Carla loves being webbed.",
  "False",
  "What is the name of the suit worn by Stephanie A. Stark?",
  "The Teal Blue Suit",
  "What color is the writing on Carla's standard t-shirt?",
  "Bright Pink",
  "How old is Stephanie A. Stark?",
  "17",
  "Who was inside the Hulkbuster when it arrived to save the day at the end of the 'Attack on Avengers Manor' arc?",
  "Thor",
  "Who said this: 'No llorando por favor!'",
  "Peter",
  "What item was the key to the secret passageway leading out of the bunker during the 'Attack on Avengers Manor' arc?",
  "Stephanie's Ring",
  "Who said this: 'Free up to 100MB of space to open Whatsapp'?",
  "Ana's Phone",
  "True or False: Peter Parker has never impersonated Stephanie.",
  "False",
  "Where did Stephanie bump into Tony Stark for the first time at the beginning of the First Arc?",
  "Ibiza Pool Party",
  "Who said this: 'Ese es el anillo de mi difunta hija!'",
  "Tony Stark",
  "What animal form was Loki assuming when the Starkids first arrived at the Avengers Manor in Arc 1?",
  "Black Cat",
  "True or False: Peter's Webs are completely Vegan.",
  "True.",
  "Who is Ana's favourite Avenger?",
  "Thor",
  "True or False: Loki loves midgardian food.",
  "False",
  "True or False: Peter's webs are edible.",
  "False",
  "Who destroyed Carla's phone?",
  "Thor",
  "True or False: Thor loves snakes.",
  "True",
  "Who said this: 'Brother, I know you don't know what a battery is.'",
  "Loki",
  "Like Thor is the God of Thunder, Loki is the God of...",
  "Mischief",
  "How does Peter usually refer to Loki?",
  "Mr. Loki",
  "How does Thor usually refer to Tony Stark?",
  "Man of Iron",
  "How does Loki usually refer to Carla?",
  "The Crazy Kid",
  "What did tiny Thor want to be when he grew up?",
  "A Valkyrie",
  "Which two characters had been kidnapped at the start of Arc 3?",
  "Tony and Carla",
  "Who smashed Carla's phone against the ground?",
  "Thor",
  "What carat is the silver of Stephanie's ring?",
  "295"


]

client.on("message", (message) => {
  //pingpong
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  //random fact from array
  if (message.content.startsWith(config.prefix + "fact")) {
    var randomHC = Headcanons[Math.floor(Math.random() * Headcanons.length)];
    message.channel.send(randomHC);
  } else
  //random quote from array
  if (message.content.startsWith(config.prefix + "quote")) {
    var randomQuote = Quote[Math.floor(Math.random() * Quote.length)];
    message.channel.send(randomQuote);
  } else

  //tinybot
  if (message.content.startsWith(config.prefix + "tiny")) {
    message.channel.sendMessage((message.content.replace(/a/g, "ᵃ").replace(/b/g, "ᵇ").replace(/c/g, "ᶜ").replace(/d/g, "ᵈ").replace(/e/g, "ᵉ").replace(/f/g, "ᶠ").replace(/g/g, "ᵍ").replace(/h/g, "ʰ").replace(/i/g, "ⁱ").replace(/j/g, "ʲ").replace(/k/g, "ᵏ").replace(/l/g, "ˡ").replace(/m/g, "ᵐ").replace(/n/g, "ⁿ")));
  } else

  //trivialbotattempt
  if (message.content.startsWith(config.prefix + "trivial")) {
var number = Math.floor(Math.random() * Questions.length);
     if(number % 2 == 0){
     number = number;
   } else
     number = number +1
var question = Questions[number];
var answer = Questions[number +1];
message.channel.send('```fix' + '\n' + question + '```');
function giveanswer(){
  message.channel.send('```css' + '\n' + '[' + "Correct Answer: " + answer + ']' + '```')
}
myVar = setTimeout (giveanswer, 15000)
  }

});

client.login(config.token);
//https://discordapp.com/oauth2/authorize?client_id=456666099669401610&scope=bot
