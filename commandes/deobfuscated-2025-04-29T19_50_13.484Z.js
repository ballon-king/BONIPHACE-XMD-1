'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const { zokou } = require('../framework/zokou')
zokou(
  {
    nomCom: 'alive',
    reaction: '💫',
    nomFichier: __filename,
  },
  async (dest, zk, commandeOptions) => {
    console.log('Alive command triggered!')
    const contactName = commandeOptions?.ms?.pushName || 'Unknown Contact'
    try {
      await zk.sendMessage(dest, {
        image: { url: 'https://files.catbox.moe/yvpwsn.jpeg' },
        caption: `💫 Always Active 🔥\n\n✨ Contact: ${contactName}\n🙏 [Visit Channel](${'https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E'})`,
        audio: { url: 'https://files.catbox.moe/eqm3or.mp3' },
        mimetype: 'audio/mpeg',
        ptt: true,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363330180223606@newsletter',
            newsletterName: '_BONIPHACE_',
            serverMessageId: 143,
          },
          forwardingScore: 999,
          externalAdReply: {
            title: `🧃 Hallo: ${contactName}`,
            body: "Yoh don't disturb am active Tap here",
            thumbnailUrl: 'https://files.catbox.moe/yvpwsn.jpeg',
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: 'https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E',
            showAdAttribution: true,
          },
          forwardingScore: -1,
        },
      })
      console.log('Alive message sent successfully with customized layout.')
    } catch (error) {
      console.error('Error sending Alive message:', error.message)
    }
  }
)
console.log('WhatsApp bot is ready!')
zokou(
  {
    nomCom: 'test',
    reaction: ❣️'',
    nomFichier: __filename,
  },
  async (dest, zk, commandeOptions) => {
    console.log('Alive command triggered!')
    const contactName = commandeOptions?.ms?.pushName || 'Unknown Contact'
    try {
      await zk.sendMessage(dest, {
        image: { url: 'https://files.catbox.moe/yvpwsn.jpeg' },
        caption: `💥 Always Active 💥\n\n🎙️ Contact: ${contactName}\n🎙️ [Visit Channel](${'https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E'})`,
        audio: { url: 'https://files.catbox.moe/xktd7q.mp3' },
        mimetype: 'audio/mpeg',
        ptt: true,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363330180223606@newsletter',
            newsletterName: '_BONIPHACE_',
            serverMessageId: 143,
          },
          forwardingScore: 999,
          externalAdReply: {
            title: `🧃Hallo: ${contactName}`,
            body: "Yoh don't disturb am active Tap here",
            thumbnailUrl: 'https://files.catbox.moe/yvpwsn.jpeg',
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: 'https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E',
            showAdAttribution: true,
          },
          forwardingScore: -1,
        },
      })
      console.log('Alive message sent successfully with customized layout.')
    } catch (error) {
      console.error('Error sending Alive message:', error.message)
    }
  }
)
console.log('WhatsApp bot is ready!')
