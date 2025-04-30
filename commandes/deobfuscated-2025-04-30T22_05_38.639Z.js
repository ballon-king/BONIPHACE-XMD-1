const { fana } = require('../njabulo/fana'),
  axios = require('axios'),
  ytSearch = require('yt-search'),
  conf = require(__dirname + '/../set'),
  getContextInfo = (_0x4a688c = '', _0x439803 = '', _0x5b6a84 = '') => ({
    mentionedJid: [_0x439803],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363345407274799@newsletter',
      newsletterName: '\u256D\u2022\u2022\u27A4\xAENjabulo Jb',
      serverMessageId: Math.floor(100000 + Math.random() * 900000),
    },
    externalAdReply: {
      showAdAttribution: true,
      title: conf.BOT || 'YouTube Downloader',
      body: _0x4a688c || 'Media Downloader',
      thumbnailUrl: _0x5b6a84 || conf.URL || '',
      sourceUrl: conf.GURL || '',
      mediaType: 1,
      renderLargerThumbnail: false,
    },
  })
async function searchYouTube(_0x498aea) {
  try {
    const _0x248757 = await ytSearch(_0x498aea)
    if (!_0x248757?.videos?.length) {
      throw new Error('No video found for the specified query.')
    }
    return _0x248757.videos[0]
  } catch (_0xbe4712) {
    console.error('YouTube search error:', _0xbe4712)
    throw new Error('YouTube search failed: ' + _0xbe4712.message)
  }
}
async function downloadFromApis(_0x4696ef) {
  for (const _0x2b5b28 of _0x4696ef) {
    try {
      const _0x591c28 = await axios.get(_0x2b5b28, { timeout: 15000 })
      if (_0x591c28.data?.success) {
        return _0x591c28.data
      }
    } catch (_0x397fd8) {
      console.warn('API ' + _0x2b5b28 + ' failed:', _0x397fd8.message)
      continue
    }
  }
  throw new Error('Failed to retrieve download URL from all sources.')
}
fana(
  {
    nomCom: 'play',
    aliases: ['song', 'playdoc', 'audio', 'mp3'],
    categorie: 'Download',
    reaction: '\uD83C\uDFB8',
  },
  async (_0x372c50, _0x458ba0, _0x3b33ba) => {
    const { arg: _0x8a2818, ms: _0x5182b6, userJid: _0x522a3e } = _0x3b33ba
    try {
      if (!_0x8a2818[0]) {
        return repondre(
          _0x458ba0,
          _0x372c50,
          _0x5182b6,
          'Please provide a song name.'
        )
      }
      const _0x52565b = _0x8a2818.join(' '),
        _0x682b7e = await searchYouTube(_0x52565b)
      await _0x458ba0.sendMessage(
        _0x372c50,
        {
          text: '=========================\n *YOUTUBE DOWNLOADER*\n=========================\n *Source :* YouTube\n=========================\n *Hallo:* Wait are second\n *Downloaded:* you audio\n=========================\n\n> \xA9 Sir Njabulo JB',
          contextInfo: getContextInfo(
            'Downloaded From YouTube\n youtube.com',
            _0x522a3e,
            _0x682b7e.thumbnail
          ),
        },
        { quoted: _0x5182b6 }
      )
      const _0x32c670 = [
          'https://api.davidcyriltech.my.id/download/ytmp3?url=' +
            encodeURIComponent(_0x682b7e.url),
          'https://www.dark-yasiya-api.site/download/ytmp3?url=' +
            encodeURIComponent(_0x682b7e.url),
          'https://api.giftedtech.web.id/api/download/dlmp3?url=' +
            encodeURIComponent(_0x682b7e.url) +
            '&apikey=gifted-md',
          'https://api.dreaded.site/api/ytdl/audio?url=' +
            encodeURIComponent(_0x682b7e.url),
        ],
        _0x325a6d = await downloadFromApis(_0x32c670),
        { download_url: _0x19ea39, title: _0x1ce3f0 } = _0x325a6d.result,
        _0x5a8b5b = [
          {
            audio: { url: _0x19ea39 },
            mimetype: 'audio/mp4',
            caption: '\uD83C\uDFB5 *' + _0x1ce3f0 + '*',
            contextInfo: getContextInfo(
              _0x1ce3f0,
              _0x522a3e,
              _0x682b7e.thumbnail
            ),
          },
        ]
      for (const _0x361c30 of _0x5a8b5b) {
        await _0x458ba0.sendMessage(_0x372c50, _0x361c30, { quoted: _0x5182b6 })
      }
    } catch (_0x50e112) {
      console.error('Audio download error:', _0x50e112)
      repondre(
        _0x458ba0,
        _0x372c50,
        _0x5182b6,
        'Download failed: ' + _0x50e112.message
      )
    }
  }
)
fana(
  {
    nomCom: 'video',
    aliases: ['videodoc', 'film', 'mp4'],
    categorie: 'Download',
    reaction: '\uD83C\uDFAC',
  },
  async (_0x3b3471, _0x3a1496, _0x5ac1f8) => {
    const { arg: _0xc52f9b, ms: _0x1d5388, userJid: _0x17b79c } = _0x5ac1f8
    try {
      if (!_0xc52f9b[0]) {
        return repondre(
          _0x3a1496,
          _0x3b3471,
          _0x1d5388,
          'Please provide a video name.'
        )
      }
      const _0x3685e5 = _0xc52f9b.join(' '),
        _0x53995a = await searchYouTube(_0x3685e5)
      await _0x3a1496.sendMessage(
        _0x3b3471,
        {
          text: '=========================\n *YOUTUBE DOWNLOADER*\n=========================\n *Source :* YouTube\n=========================\n *Hallo:* Wait are second\n *Downloaded:* you audio\n=========================\n\n> \xA9 Sir Njabulo JB',
          contextInfo: getContextInfo(
            'Downloaded from YouTube\n youtube',
            _0x17b79c,
            _0x53995a.thumbnail
          ),
        },
        { quoted: _0x1d5388 }
      )
      const _0x100b6d = [
          'https://api.davidcyriltech.my.id/download/ytmp4?url=' +
            encodeURIComponent(_0x53995a.url),
          'https://www.dark-yasiya-api.site/download/ytmp4?url=' +
            encodeURIComponent(_0x53995a.url),
          'https://api.giftedtech.web.id/api/download/dlmp4?url=' +
            encodeURIComponent(_0x53995a.url) +
            '&apikey=gifted-md',
          'https://api.dreaded.site/api/ytdl/video?url=' +
            encodeURIComponent(_0x53995a.url),
        ],
        _0x15af58 = await downloadFromApis(_0x100b6d),
        { download_url: _0x1634ae, title: _0x27a397 } = _0x15af58.result,
        _0x5b14c3 = [
          {
            video: { url: _0x1634ae },
            mimetype: 'video/mp4',
            caption: '\uD83C\uDFA5 *' + _0x27a397 + '*',
            contextInfo: getContextInfo(
              _0x27a397,
              _0x17b79c,
              _0x53995a.thumbnail
            ),
          },
        ]
      for (const _0x282f0a of _0x5b14c3) {
        await _0x3a1496.sendMessage(_0x3b3471, _0x282f0a, { quoted: _0x1d5388 })
      }
    } catch (_0x29997a) {
      console.error('Video download error:', _0x29997a)
      repondre(
        _0x3a1496,
        _0x3b3471,
        _0x1d5388,
        'Download failed: ' + _0x29997a.message
      )
    }
  }
)
