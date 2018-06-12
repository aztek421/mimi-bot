const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on("ready", () => {
  client.user.setGame("🔥v0.1🔥  ✨NirvA✨ ", "https://www.twitch.tv/turkish_coffee") 
  console.log("Bağlandım!")   
});
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
  };


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam, Hoşgeldin :innocent: :heartpulse: ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm selam, Hoşgeldin :innocent: :heartpulse: ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hayırsız bot') {
    msg.reply('**Öyle Olsun :sob: :sob:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('**iyidir sen ^^** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kötü') {
    msg.reply('**Niye kötüsün yaa :/** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'haklısın knk') {
    msg.reply('**tabiki haklıyım :d** ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'haklısın') {
    msg.reply('**tabiki haklıyım :d** ');
  }
});

client.on("message", message => {
  if (message.content === prefix + "kalp") {
    message.channel.sendMessage(`Benim kalbim yok madem senin olsun ❤ <@${message.author.id}>`)
    message.react("❤")
}
if (message.content === prefix + "sigarayak") {
  message.channel.sendMessage(`Sigara içmek sağlığa zararlıdır! 🚭 <@${message.author.id}>`)
  message.react("🚭")
}

if (message.content === prefix + "yapımcım") {
  message.channel.sendMessage(`<@361100685863026688>`)
}
if (message.content === prefix + "lol") {
  message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> League Of Legends oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles: **`)
}

if (message.content === prefix + "tos") {
  message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> Town of Salem oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles:**`)
}

if (message.content === prefix + "cs") {
  message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> Counter Strike oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles:**`)
}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("message", message => {

  const kufur = ["amk", "aq", "sik", "oç", "orospu evladı", "orosbu evladı", "sikik", "yarrak", "yarak", "AMK", "SİK", "OÇ","PİÇ","piç"];
  if (kufur.some(word => message.content.includes(word)) ) {
      message.reply("**Küfür Etmemelisin -,- **")
      message.delete()
  }
});

client.login(ayarlar.token);
