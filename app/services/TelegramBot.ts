import TelegramBot from 'node-telegram-bot-api';

const botToken = 'YOUR_BOT_TOKEN';
const chatId = 'YOUR_CHAT_ID';

const bot = new TelegramBot(botToken, { polling: true });

const sendMessageToTelegram = (message: string) => {
  bot.sendMessage(chatId, message)
    .then(() => console.log('Message envoyé à Telegram'))
    .catch((error) => console.error('Erreur lors de l\'envoi du message à Telegram', error));
};

export { sendMessageToTelegram };
