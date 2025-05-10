const {
  zokou
} = require("../framework/zokou");
const traduire = require("../framework/traduction");
const s = require("../set");
const axios = require("axios");
zokou({
  name: "best-wallp",
  aliases: ["bestwal", "best", "bw"],
  description: "Sends a high-quality random wallpaper.",
  category: "BONIPHACE PICS",
  execute: async (_0x1e6357, _0x3cef73, _0x126f09, _0x1b951c) => {
    try {
      const _0x496657 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
      const _0x3e22ff = await _0x496657.json();
      const _0x403ba4 = _0x3e22ff.urls?.regular;
      if (!_0x403ba4) {
        const _0x59099a = {
          quoted: _0x3cef73
        };
        return await _0x1e6357.sendMessage(_0x1b951c, {
          text: "Couldn't fetch wallpaper. Try again later."
        }, _0x59099a);
      }
      const _0x2512a8 = {
        url: _0x403ba4
      };
      const _0xf76fc3 = {
        image: _0x2512a8,
        caption: "*POWERED BY BONIPHACE-MD*"
      };
      const _0x37a7aa = _0xf76fc3;
      const _0x81f2f = {
        quoted: _0x3cef73
      };
      await _0x1e6357.sendMessage(_0x1b951c, _0x37a7aa, _0x81f2f);
    } catch (_0x50112a) {
      console.error("Wallpaper Error:", _0x50112a);
      const _0x1a96ff = {
        quoted: _0x3cef73
      };
      await _0x1e6357.sendMessage(_0x1b951c, {
        text: "An error occurred while fetching wallpaper."
      }, _0x1a96ff);
    }
  }
};
export const randomWallpCommand = {
  name: "random1",
  aliases: [],
  description: "Sends a random wallpaper from boniphace.",
  category: "BONIPHACE PICS",
  execute: async (_0x4830fe, _0x6906b2, _0x4bdb0b, _0x4d98db) => {
    try {
      const _0x5c4ca4 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
      const _0x3349d6 = await _0x5c4ca4.json();
      const _0x29b992 = _0x3349d6.urls?.regular;
      if (!_0x29b992) {
        const _0x34994e = {
          quoted: _0x6906b2
        };
        return await _0x4830fe.sendMessage(_0x4d98db, {
          text: "Couldn't fetch wallpaper. Try again later."
        }, _0x34994e);
      }
      const _0x3a64b0 = {
        url: _0x29b992
      };
      const _0x4b3bd8 = {
        image: _0x3a64b0,
        caption: "*POWERED BY BONIPHACE-MD*"
      };
      const _0x4df617 = _0x4b3bd8;
      const _0x43db04 = {
        quoted: _0x6906b2
      };
      await _0x4830fe.sendMessage(_0x4d98db, _0x4df617, _0x43db04);
    } catch (_0x3a8f90) {
      console.error("Random Wallpaper Error:", _0x3a8f90);
      const _0x37b877 = {
        quoted: _0x6906b2
      };
      await _0x4830fe.sendMessage(_0x4d98db, {
        text: "Failed to get a wallpaper. Please try again."
      }, _0x37b877);
    }
  }
};
export const natureWallpCommand = {
  name: "nature1",
  aliases: [],
  description: "Sends a random nature-themed wallpaper.",
  category: "BONIPHACE PICS",
  execute: async (_0x4dcfa7, _0x3fc727, _0x423b2c, _0x100409) => {
    try {
      const _0x2755c3 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc&query=nature");
      const _0xf2fbd8 = await _0x2755c3.json();
      const _0x20a81d = _0xf2fbd8.urls?.regular;
      if (!_0x20a81d) {
        const _0x9f9ec = {
          quoted: _0x3fc727
        };
        return await _0x4dcfa7.sendMessage(_0x100409, {
          text: "Couldn't fetch a nature wallpaper. Try again."
        }, _0x9f9ec);
      }
      const _0x1606dd = {
        url: _0x20a81d
      };
      const _0x5d1162 = {
        image: _0x1606dd,
        caption: "*POWERED BY BONIPHACE-MD*"
      };
      const _0x4caf9f = _0x5d1162;
      const _0x59e895 = {
        quoted: _0x3fc727
      };
      await _0x4dcfa7.sendMessage(_0x100409, _0x4caf9f, _0x59e895);
    } catch (_0x3215b8) {
      console.error("Nature Wallpaper Error:", _0x3215b8);
      const _0x46b15b = {
        quoted: _0x3fc727
      };
      await _0x4dcfa7.sendMessage(_0x100409, {
        text: "Something went wrong. Please try again later."
      }, _0x46b15b);
    }
  }
};
export const timeCommand = {
  name: "time1",
  aliases: ["timezone", "clock"],
  description: "Get the current time and timezone for a specific country.",
  category: "General",
  execute: async (_0x4fa0b6, _0x3cace3, _0x4b0a59, _0x327f58) => {
    if (!_0x4b0a59 || _0x4b0a59.length === 0) {
      const _0x23fff3 = {
        quoted: _0x3cace3
      };
      return await _0x4fa0b6.sendMessage(_0x327f58, {
        text: "Enter the name of the country you want to know the time and date of."
      }, _0x23fff3);
    }
    const _0x5caf2f = _0x4b0a59.join(" ");
    const _0x372d05 = "https://levanter.onrender.com/time?code=" + encodeURIComponent(_0x5caf2f);
    try {
      const {
        data: _0x5756eb
      } = await _0x401a36.get(_0x372d05);
      if (!_0x5756eb?.result?.length) {
        const _0x27d304 = {
          quoted: _0x3cace3
        };
        return await _0x4fa0b6.sendMessage(_0x327f58, {
          text: "That country name is incorrect!"
        }, _0x27d304);
      }
      const {
        name: _0x2d4009,
        time: _0x1ca220,
        timeZone: _0x426c02
      } = _0x5756eb.result[0];
      const _0x305af8 = "Live Time in " + _0x2d4009 + "*:\n\n*Date & Time:* " + _0x1ca220 + "\n*TimeZone:* " + _0x426c02 + "\n\n> *POWERED BY BONIPHACE-MD*";
      await _0x4fa0b6.sendMessage(_0x327f58, {
        text: "*" + _0x305af8.trim(),
        contextInfo: {
          externalAdReply: {
            title: "Boniphace-Md",
            body: "Powered by Boniphace",
            mediaType: 1,
            thumbnailUrl: "https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E",
            sourceUrl: "https://github.com/boniphace478/BONIPHACE-MD",
            showAdAttribution: true,
            previewType: 0,
            newsletterJid: "120363330180223606@newsletter",
            newsletterName: "World Time Info"
          }
        },
        quoted: _0x3cace3
      });
    } catch (_0x1fd31f) {
      console.error("Time API Error:", _0x1fd31f);
      const _0x30e6c5 = {
        quoted: _0x3cace3
      };
      await _0x4fa0b6.sendMessage(_0x327f58, {
        text: "An error occurred or the country name is invalid."
      }, _0x30e6c5);
    }
  }
};
export const llamaCommand = {
  name: "+ask",
  aliases: ["ilama"],
  description: "Ask LLaMA AI a question or prompt.",
  category: "AI",
  execute: async (_0x212e33, _0x66d5e1, _0x1acfac, _0x4469e0) => {
    if (!_0x1acfac || _0x1acfac.length === 0) {
      const _0x5a930d = {
        quoted: _0x66d5e1
      };
      return await _0x212e33.sendMessage(_0x4469e0, {
        text: "Please provide a question."
      }, _0x5a930d);
    }
    const _0x4dfa3d = _0x1acfac.join(" ");
    const _0x2f1cbb = "https://api.gurusensei.workers.dev/llama?prompt=" + encodeURIComponent(_0x4dfa3d);
    try {
      const {
        data: _0x40f2d1
      } = await _0x401a36.get(_0x2f1cbb);
      if (!_0x40f2d1?.response?.response) {
        const _0x4b4c70 = {
          quoted: _0x66d5e1
        };
        return await _0x212e33.sendMessage(_0x4469e0, {
          text: "No response received from LLaMA."
        }, _0x4b4c70);
      }
      const _0x253028 = _0x40f2d1.response.response;
      await _0x212e33.sendMessage(_0x4469e0, {
        text: "*Llama says:*\n\n" + _0x253028.trim(),
        contextInfo: {
          externalAdReply: {
            title: "Flash-Md",
            body: "Powered by France King",
            mediaType: 1,
            thumbnailUrl: "https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E",
            sourceUrl: "https://github.com/boniphace478/BONIPHACE-MD",
            showAdAttribution: true,
            previewType: 0,
            newsletterJid: "120363330180223606@newsletter",
            newsletterName: "LLaMA AI Assistant"
          }
        },
        quoted: _0x66d5e1
      });
    } catch (_0x1a8ce7) {
      console.error("LLaMA API Error:", _0x1a8ce7);
      const _0x3a1cc8 = {
        quoted: _0x66d5e1
      };
      await _0x212e33.sendMessage(_0x4469e0, {
        text: "An error occurred while getting a response from LLaMA."
      }, _0x3a1cc8);
    }
  }
};
export const pairCommand = {
  name: "session",
  aliases: ["pairing", "generatecode"],
  description: "Generates a pairing code for a phone number.",
  category: "User",
  execute: async (_0x45851c, _0x50af8b, _0x3667e9, _0x387b2d) => {
    if (!_0x3667e9 || _0x3667e9.length === 0) {
      const _0x205f4f = {
        quoted: _0x50af8b
      };
      return await _0x45851c.sendMessage(_0x387b2d, {
        text: "Please provide a phone number to generate a pairing code."
      }, _0x205f4f);
    }
    const _0xed405e = _0x3667e9.join(" ").trim();
    const _0x264df8 = "https://boniphacetech.onrender.com/code?number=" + encodeURIComponent(_0xed405e);
    try {
      const _0x3980a1 = {
        quoted: _0x50af8b
      };
      await _0x45851c.sendMessage(_0x387b2d, {
        text: "*BONIPHACE-MD is generating your pairing code...*"
      }, _0x3980a1);
      const _0x1a4d7e = await fetch(_0x264df8);
      const _0x538ac3 = await _0x1a4d7e.json();
      if (!_0x1a4d7e.ok || !_0x538ac3?.code) {
        const _0x1c17b7 = {
          quoted: _0x50af8b
        };
        return await _0x45851c.sendMessage(_0x387b2d, {
          text: "Could not retrieve the pairing code. Please check the number and try again."
        }, _0x1c17b7);
      }
      const _0x114131 = {
        text: "*Pairing Code for " + _0xed405e + " is the digits below ⤵️!*\n\n> *Powered by BONIPHACE-MD*",
        contextInfo: {
          externalAdReply: {
            title: "Boniphace-MD",
            body: "Powered by Boniphace",
            mediaType: 1,
            thumbnailUrl: "https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E",
            sourceUrl: "https://github.com/boniphace478/BONIPHACE-MD",
            showAdAttribution: true,
            previewType: 0,
            newsletterJid: "120363330180223606@newsletter",
            newsletterName: "Pairing Info"
          }
        },
        quoted: _0x50af8b
      };
      await _0x45851c.sendMessage(_0x387b2d, _0x114131);
      const _0x116a29 = {
        text: "```" + _0x538ac3.code + "```"
      };
      await _0x45851c.sendMessage(_0x387b2d, _0x116a29);
    } catch (_0x36d724) {
      console.error("Pairing Code Error:", _0x36d724);
      const _0x748914 = {
        quoted: _0x50af8b
      };
      await _0x45851c.sendMessage(_0x387b2d, {
        text: "There was an error processing your request. Please try again later."
      }, _0x748914);
    }
  }
};
