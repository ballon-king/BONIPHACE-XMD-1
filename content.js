const { zokou } = require('../framework/zokou'),
  ai = require('unlimited-ai'),
  axios = require('axios'),
  fs = require('fs'),
  conf = require(__dirname + '/../set'),
  fetchGptResponse = async (_0x41d9ed, _0x4d4af1) => {
    try {
      const _0x143e82 = await axios.get(
          _0x41d9ed + encodeURIComponent(_0x4d4af1)
        ),
        _0x50efc2 = _0x143e82.data
      if (_0x50efc2 && _0x50efc2.status) {
        return _0x50efc2.BK9
      } else {
        throw new Error('Failed to retrieve GPT response.')
      }
    } catch (_0x24d35c) {
      return (
        console.error('Error fetching GPT response:', _0x24d35c),
        'Something went wrong. Unable to fetch GPT response.'
      )
    }
  },
  handleAiCommand = async (
    _0x15fb4f,
    _0x4b53b8,
    _0x50cca1,
    _0x12c27c,
    _0x58e747
  ) => {
    const { repondre: _0x40b6c5, arg: _0x2a3609 } = _0x50cca1,
      _0x4f4c5e = _0x2a3609.join(' ').trim()
    if (!_0x4f4c5e) {
      return _0x40b6c5(_0x58e747)
    }
    const _0x1b2eca = _0x4f4c5e
    try {
      const _0x3fc63f = await fetchGptResponse(_0x12c27c, _0x1b2eca)
      await _0x4b53b8.sendMessage(_0x15fb4f, {
        text: _0x3fc63f,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363330180223606@newsletter',
            newsletterName: '_many_',
            serverMessageId: 143,
          },
          forwardingScore: 999,
          externalAdReply: {
            title: conf.BOT,
            body: 'Keep learning',
            thumbnailUrl: conf.URL,
            sourceUrl: 'https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E',
            mediaType: 1,
            showAdAttribution: true,
          },
        },
      })
    } catch (_0xd7993b) {
      console.error('Error generating AI response:', _0xd7993b)
      await _0x40b6c5("Sorry, I couldn't process your request.")
    }
  }
zokou(
  {
    nomCom: 'chat1',
    aliases: ['chatbot', 'chatai'],
    reaction: '\uD83D\uDCDC',
    categorie: 'AI',
  },
  async (_0x3f75b6, _0x3deee3, _0x5d89e0) => {
    handleAiCommand(
      _0x3f75b6,
      _0x3deee3,
      _0x5d89e0,
      'https://bk9.fun/ai/chataibot?q=',
      "Example usage: gpt How's the weather today?"
    )
  }
)
zokou(
  {
    nomCom: 'bon',
    aliases: ['bonio', 'boniphacebot'],
    reaction: '\uD83D\uDCDC',
    categorie: 'AI',
  },
  async (_0x20e9d1, _0x3fc7dc, _0x171c04) => {
    handleAiCommand(
      _0x20e9d1,
      _0x3fc7dc,
      _0x171c04,
      'https://bk9.fun/ai/BK93?BK9=you%20are%20zoro%20from%20one%20piece&q=',
      '```Hello there, This is Boniphace, How may I help you with?```'
    )
  }
)
zokou(
  {
    nomCom: 'gpt',
    aliases: ['ilamaa', 'ilamaai'],
    reaction: '\uD83D\uDCDC',
    categorie: 'AI',
  },
  async (_0x136c85, _0x39b911, _0xfe08ea) => {
    handleAiCommand(
      _0x136c85,
      _0x39b911,
      _0xfe08ea,
      'https://bk9.fun/ai/llama?q=',
      'Example usage: gpt Hi, how are you?'
    )
  }
)
zokou(
  {
    nomCom: 'gemini5',
    aliases: ['gemini4', 'geminiai'],
    reaction: '\uD83D\uDCDC',
    categorie: 'AI',
  },
  async (_0x15ef01, _0x56a11b, _0x2bd190) => {
    handleAiCommand(
      _0x15ef01,
      _0x56a11b,
      _0x2bd190,
      'https://bk9.fun/ai/gemini?q=',
      'Example usage: gemini Hi, how are you?'
    )
  }
)
zokou(
  {
    nomCom: 'ai',
    aliases: ['gpt9', 'ai'],
    reaction: '\uD83D\uDCDC',
    categorie: 'AI',
  },
  async (_0x22e6a5, _0x1a8319, _0x19b0a8) => {
    const { repondre: _0x380424, arg: _0x275e18 } = _0x19b0a8,
      _0x30391e = _0x275e18.join(' ').trim()
    if (!_0x30391e) {
      return _0x380424('Please provide a song name.')
    }
    const _0x55297b = _0x30391e
    try {
      const _0x46eb00 = 'gpt-4-turbo-2024-04-09',
        _0x265f45 = [
          {
            role: 'user',
            content: _0x55297b,
          },
          {
            role: 'system',
            content:
              'You are an assistant in WhatsApp. You are called boniphace. You respond to user commands.',
          },
        ],
        _0x394079 = await ai.generate(_0x46eb00, _0x265f45)
      await _0x1a8319.sendMessage(_0x22e6a5, {
        text: _0x394079,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363330180223606@newsletter',
            newsletterName: '_many_',
            serverMessageId: 143,
          },
          forwardingScore: 999,
          externalAdReply: {
            title: conf.BOT,
            body: 'keep learning wit Njabulo Jb',
            thumbnailUrl: conf.URL,
            sourceUrl: 'https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E',
            mediaType: 1,
            showAdAttribution: true,
          },
        },
      })
    } catch (_0x5901b2) {
      console.error('Error generating AI response:', _0x5901b2)
      await _0x380424("Sorry, I couldn't process your request.")
    }
  }
)
