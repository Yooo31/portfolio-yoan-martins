export class TelegramService {
  static async sendMessage(message: string) {
    const res = await fetch('https://ym-telegram.yoanmartins.fr/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { bot: "fgtyhdnjkl",
          canal: "sdefrgtik",
          info: {
            name: "Yoan",
            text: "fghjkggggg"
          }
        }
      ),
    })
    const data = await res.json();
    console.log(data);
  }
}