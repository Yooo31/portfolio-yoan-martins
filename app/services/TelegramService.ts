export class TelegramService {
  private static readonly apiUrl = 'https://ym-telegram.yoanmartins.fr/sendMessage';

  static async sendMessage(message: string) {
    const requestBody = {
      bot: null,
      canal: null,
      config: 'portfolio-yoana',
      info: {
        name: "🚨 Nouvelle demande de contact ! 🚨",
        text: message,
      },
    };

    const res = await fetch(TelegramService.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const responseText = await res.text();
    console.log(responseText);
    return {status: res.status};
  }
}
