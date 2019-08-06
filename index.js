const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA4MjE2MjY3NDQyMjI1MTUy.XUk9xA.ZOnJJh7Fi_0gfELnTbQDWLhiLLg'; 

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('guildMemberAdd', member =>{

const channel = member.guild.channels.find(channel => channel.name === "welcome");
if(!channel) return;

channel.send(`Welcome to My Server, ${member}, Please Enjoy yourself and have fun `)
});

bot.on('guildMemberAdd', function(member)
{
    member.send("Thank You For Joining! Feel Free to say Hi");
    let memberRole = member.guild.roles.find("name", "Queens");
    member.addRole(memberRole);
});

bot.on('message', function(msg){

    if(msg.content == 'Hello')
    {
        msg.channel.send('Hello ' + msg.author + ', How are you love?');
    }
    if(msg.content == 'Morning')
    {
        msg.channel.send('Good Morning' + msg.author + ', How are you love? did you dream of anything, have you ate? any boys message you');
    }
    if(msg.content == 'Should i Stay Caged?')
    {
        msg.channel.send('Well..' + msg.author + ', you must be a dumb slut cause we all know the awnser to that Question. you should never come out of that cage.');
    }
    if(msg.content == 'I am Plugged')
    {
        msg.channel.send('Good' + msg.author + ', now go call your dick appointment and have him take it out');
    }
    if(msg.content == 'Poppers')
    {
        msg.channel.send('YES!' + msg.author + ', breathe calmly and very hard, feel your femininity deep within you, love yourself and accept your fate! xoxo you cum guzzling slut');
    }
    if(msg.content == 'Queen Me')
    {
        msg.member.send("Welcome to the Server Queen, Feel Free to Ask Questions and message the Mods for anyhelp");
        let memberRole = msg.member.guild.roles.find(x => x.name === "Queens");
        msg.member.addRole(memberRole);
    }
    if(msg.content == 'Dude Here')
    {
        msg.member.send("Welcome to the Server Dude, How's it Hanging");
        let memberRole = msg.member.guild.roles.find(x => x.name === "Dude");
        msg.member.addRole(memberRole);
    }
});

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "feminization":
            msg.channel.send('planetary feminization is the road to a loving peaceful world! make love, not the war alpha males need us to keep there balls empty')
            break;
        case 'website':
            msg.channel.send('twitter.com/Sidneygrayxo')
            break;
        case 'info':
            if(args[1] === 'version'){
                msg.channel.send('Version ' + version);   
            }else{
                msg.channel.send('Invalid Args')
            }
            break;
        case 'clear':
            if(!args[1]) return msg.reply('Error please define second arg')
            msg.channel.bulkDelete(args[1]);
            break;
        case 'sissyhypno':
            msg.channel.send('https://hypnocypher.com/hypnos this is sidneys favorites')
            break;
        case 'help':
            msg.channel.send('Help? you need Help Cumming i can assist with that if you must')
            break;
        case 'sidney':
            msg.channel.send('Sidney Gray is Currently under Feminization')
            break;
        case 'anal':
            msg.channel.send('that and a cup coffee is one way to start the day')
            break;
        case 'commands':
            msg.channel.send('-!help !sidney !Website !anal !sissyhypno !feminization besure to tell the bot some things -Should i Stay Caged or tell Tomie that -I am Plugged - or just say Poppers for some motivation ask -Morning - or say Hello')
            break;

    }
})

bot.login(token);