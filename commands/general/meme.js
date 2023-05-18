const { SlashCommandBuilder } = require('discord.js');

const list = [
    "https://twitter.com/elonmusk/status/823727035088416768",
	"https://twitter.com/elonmusk/status/1120822191061209088",
	"https://twitter.com/elonmusk/status/1026872652290379776",
	"https://twitter.com/elonmusk/status/1113164389929160706",
	"https://twitter.com/elonmusk/status/1089657821652602880",
	"https://twitter.com/elonmusk/status/1153155448012300288",
	"https://twitter.com/elonmusk/status/1177099375287271424",
	"https://twitter.com/elonmusk/status/1054115562769416192",
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Satisifies the need for memes.'),
	async execute(interaction) {
        const item = list[Math.floor(Math.random() * list.length)];
		await interaction.reply({content: item.toString()});
	},
};