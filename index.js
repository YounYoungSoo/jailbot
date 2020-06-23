const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '&안녕') {
    return message.reply('&안녕하세요');
  }

  if(message.content == '&썰') {
    let img = 'https://ifh.cc/g/R6EOJ3.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('썰 종류')
      .setURL('http://www.naver.com')
      .setAuthor('깍둑봇', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('&사이다썰', '제보받은 썰중 사이다썰 목록을 보여줍니다.')
      .addField('&공포썰', '제보받은 썰중 공포썰 목록을 보여줍니다.')
      .addField('&웃긴썰', '제보받은 썰중 웃긴썰 목록을 보여줍니다.')
      .addBlankField()
      .setTimestamp()
      .setFooter('깍둑봇', img)

    message.channel.send(embed)
  } 
  
  if(message.content == '&사이다썰') {
    let img = 'https://ifh.cc/g/rHrO3N.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('사이다썰')
      .setURL('http://www.naver.com')
      .setAuthor('깍둑봇', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('사이다썰 목록', '택시 무임승차 썰')
      .addBlankField()
      .setTimestamp()
      .setFooter('깍둑봇', img)

    message.channel.send(embed)
  }

  if(message.content == '택시 무임승차 썰') {
    let img = 'https://ifh.cc/g/rHrO3N.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('사이다썰')
      .setURL('http://www.naver.com')
      .setAuthor('깍둑봇', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('택시 무임승차 썰', '한 1주일 전에 있었던 썰을 풀어볼게.\n그때는 진짜 햇볓이 사람을 익힐정도로 너무 더운 날씨였어\n그때 친구들이 같이 택시를 타자했지.\n그래서 각각 1000원씩 돈을 내고 택시를 타자 했어.\n친구중 1명이 택시를 불렀는데 택시가 너무 빨리와버린거야.\n그래서 나랑 친구들은 허둥지둥 뛰어갔지.\n택시에 다 왔을때 쯤 훈재라는 얘가 택시를 타는거야..\n그래서 우리 넷은 당황하며 택시를 탔어.\n그때 훈재는 너무 뻔뻔하게 나와서 얘들 다 어이없어했지.\n그때 택시기사님께서 일침을 날리신거야.\n"5명이서 타면 안받아주는데 오늘은 1000원만 더 받을게"\n어찌됬든 택시는 목적지에 도착했고 초과요금은 걔가 내기로 했어 ㅋㅋ\n물론 욕이란 욕은 다 먹고 말이야 ㅋㅋ\n(택시기사님이랑 합의봐서 초과요금은 안냈다는...)')
      .addBlankField()
      .setTimestamp()
      .setFooter('깍둑봇', img)

    message.channel.send(embed)
  }

  if(message.content == '&공포썰') {
    let img = 'https://ifh.cc/g/8olwAn.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('공포썰')
      .setURL('http://www.naver.com')
      .setAuthor('깍둑봇', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('공포썰 목록', '여러분의 제보를 기다립니다.')
      .addBlankField()
      .setTimestamp()
      .setFooter('깍둑봇', img)

    message.channel.send(embed)
  }

  if(message.content == '&웃긴썰') {
    let img = 'https://ifh.cc/g/BcXkPN.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('웃긴썰')
      .setURL('http://www.naver.com')
      .setAuthor('깍둑봇', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('웃긴썰 목록', '여러분의 제보를 기다립니다.')
      .addBlankField()
      .setTimestamp()
      .setFooter('깍둑봇', img)

    message.channel.send(embed)
  }
  
  else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);