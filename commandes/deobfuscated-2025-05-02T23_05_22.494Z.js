const { zokou } = require('../framework/zokou'),
  traduire = require('../framework/traduction'),
  { default: axios } = require('axios')
zokou(
  {
    nomCom: 'bing10',
    reaction: '💫',
    categorie: 'IA',
  },
  async (_0x5a2043, _0xcfaa75, _0x509d92) => {
    const { repondre: _0x51e1ff, arg: _0x533bb0, ms: _0x47b964 } = _0x509d92
    try {
      if (!_0x533bb0 || _0x533bb0.length === 0) {
        return _0x51e1ff(
          'Please enter the necessary information to generate the image.'
        )
      }
      const _0x19cd09 = _0x533bb0.join(' '),
        _0xe1c811 = await axios.get(
          'http://api.maher-zubair.tech/ai/photoleap?q=' + _0x19cd09
        ),
        _0x1882c0 = _0xe1c811.data
      let _0x5310aa = '*bing images by Fredie Tech*'
      if (_0x1882c0.status == 200) {
        const _0x4e96c4 = _0x1882c0.result
        _0xcfaa75.sendMessage(
          _0x5a2043,
          {
            image: { url: _0x4e96c4 },
            caption: _0x5310aa,
          },
          { quoted: _0x47b964 }
        )
      } else {
        _0x51e1ff('Error during image generation.')
      }
    } catch (_0x103cfc) {
      console.error('Erreur:', _0x103cfc.message || "Une erreur s'est produite")
      _0x51e1ff('Oops, an error occurred while processing your request')
    }
  }
)
zokou(
  {
    nomCom: 'see',
    categorie: 'Mods',
  },
  async (_0x486886, _0x325c9b, _0x1c648a) => {
    const {
      repondre: _0x149d2d,
      msgRepondu: _0x3815e1,
      superUser: _0x32a783,
      auteurMessage: _0x2e49e2,
    } = _0x1c648a
    if (_0x32a783) {
      if (_0x3815e1) {
        console.log(_0x3815e1)
        let _0x4ee3f4
        if (_0x3815e1.imageMessage) {
          let _0x6d7a77 = await _0x325c9b.downloadAndSaveMediaMessage(
            _0x3815e1.imageMessage
          )
          _0x4ee3f4 = {
            image: { url: _0x6d7a77 },
            caption: _0x3815e1.imageMessage.caption,
          }
        } else {
          if (_0x3815e1.videoMessage) {
            let _0x43f289 = await _0x325c9b.downloadAndSaveMediaMessage(
              _0x3815e1.videoMessage
            )
            _0x4ee3f4 = {
              video: { url: _0x43f289 },
              caption: _0x3815e1.videoMessage.caption,
            }
          } else {
            if (_0x3815e1.audioMessage) {
              let _0x6abd9b = await _0x325c9b.downloadAndSaveMediaMessage(
                _0x3815e1.audioMessage
              )
              _0x4ee3f4 = {
                audio: { url: _0x6abd9b },
                mimetype: 'audio/mp4',
              }
            } else {
              if (_0x3815e1.stickerMessage) {
                let _0x5bb879 = await _0x325c9b.downloadAndSaveMediaMessage(
                    _0x3815e1.stickerMessage
                  ),
                  _0x32b1a3 = new Sticker(_0x5bb879, {
                    pack: 'BMW-MD-TAG',
                    type: StickerTypes.CROPPED,
                    categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
                    id: '12345',
                    quality: 70,
                    background: 'transparent',
                  })
                const _0x392998 = await _0x32b1a3.toBuffer()
                _0x4ee3f4 = { sticker: _0x392998 }
              } else {
                _0x4ee3f4 = { text: _0x3815e1.conversation }
              }
            }
          }
        }
        _0x325c9b.sendMessage(_0x2e49e2, _0x4ee3f4)
      } else {
        _0x149d2d('Mention the message that you want to save')
      }
    } else {
      _0x149d2d('only mods can use this command')
    }
  }
)
