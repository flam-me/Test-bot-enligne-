const { Telegraf } = require('telegraf');
const express = require('express');

const TOKEN = '8282844051:AAEkFJeG39w7zdoyK4CpGbtNEzJt2QjjelM';
const bot = new Telegraf(TOKEN);

// Commandes du bot
bot.start((ctx) => ctx.reply('👋 Bienvenue ! Tape /help pour voir les commandes.'));
bot.help((ctx) => ctx.reply('🛠 Commandes disponibles :\n/start\n/help\n/ping\n/info'));
bot.command('ping', (ctx) => ctx.reply('🏓 Pong ! Je suis là.'));
bot.command('info', (ctx) => {
  const user = ctx.from;
  ctx.reply(`👤 Ton nom : user.first_name🆔 ID :{user.id}`);
});

// Démarrer le bot
bot.launch();

// Serveur Express pour rester en ligne sur Replit
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Bot en ligne.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
