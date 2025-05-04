const { fana } = require('../njabulo/fana'),
  { Sticker, StickerTypes } = require('wa-sticker-formatter'),
  {
    ajouterOuMettreAJourJid,
    mettreAJourAction,
    verifierEtatJid,
  } = require('../bdd/antilien'),
  {
    atbajouterOuMettreAJourJid,
    atbverifierEtatJid,
  } = require('../bdd/antibot'),
  { search, download } = require('aptoide-scraper'),
  fs = require('fs-extra'),
  conf = require('../set'),
  { default: axios } = require('axios')
fana(
  {
    nomCom: 'tagall',
    categorie: 'Group',
    reaction: '\uD83D\uDCC3',
  },
  async (_0x92d79a, _0x3ca0ea, _0x1ec3d0) => {
    const {
      ms: _0x1cb102,
      repondre: _0x2aa2ad,
      arg: _0x4fb3ef,
      verifGroupe: _0x3e2579,
      nomGroupe: _0xf42821,
      infosGroupe: _0x44a6a6,
      nomAuteurMessage: _0x5ec75f,
      verifAdmin: _0x2f3fc2,
      superUser: _0x599928,
    } = _0x1ec3d0
    if (!_0x3e2579) {
      _0x2aa2ad('```erro only groups \u274C```')
      return
    }
    !_0x4fb3ef || _0x4fb3ef === ' '
      ? (mess = 'Aucun Message')
      : (mess = _0x4fb3ef.join(' '))
    let _0x224e44 = _0x3e2579 ? await _0x44a6a6.participants : ''
    var _0xa390c4 = ''
    _0xa390c4 += '\n \n *\uD83D\uDFE2online\uD83D\uDFE2*\n'
    let _0x4b8e90 = ['\u2022'],
      _0xad47c6 = Math.floor(Math.random() * (_0x4b8e90.length - 1))
    for (const _0x352fbd of _0x224e44) {
      _0xa390c4 +=
        _0x4b8e90[_0xad47c6] + ' +' + _0x352fbd.id.split('+')[0] + '\n'
    }
    _0x2f3fc2 || _0x599928
      ? _0x3ca0ea.sendMessage(
          _0x92d79a,
          {
            text: _0xa390c4,
            contextInfo: {
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '120363345407274799@newsletter',
                newsletterName: '\u256D\u2022\u2022\u27A4\xAENjabulo Jb',
                serverMessageId: 143,
              },
              forwardingScore: 999,
              externalAdReply: {
                title: _0xf42821,
                body: '\uD83D\uDCC3online is alwaysonline',
                thumbnailUrl: conf.URL,
                mediaType: 1,
                renderSmallThumbnail: true,
              },
            },
          },
          { quoted: _0x1cb102 }
        )
      : _0x2aa2ad('```erro \uD83D\uDEABonly admins\uD83D\uDEA8```')
  }
)
