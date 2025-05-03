import _0x6cb1e from "mumaker";
export const hackerCommand = {
  name: "hacker",
  aliases: [],
  description: "Generate a neon hacker-style logo.",
  category: "Logo",
  execute: async (_0x45dfcb, _0x28e32f, _0x58994b, _0x5ede34) => {
    if (!_0x58994b || _0x58994b.length === 0) {
      const _0x54097c = {
        quoted: _0x28e32f
      };
      return await _0x45dfcb.sendMessage(_0x5ede34, {
        text: "Example: .hacker YourName"
      }, _0x54097c);
    }
    try {
      const _0x1985cc = {
        quoted: _0x28e32f
      };
      await _0x45dfcb.sendMessage(_0x5ede34, {
        text: "*Generating your logo... Please wait.*"
      }, _0x1985cc);
      const _0x1e0350 = await _0x6cb1e.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0x58994b.join(" "));
      const _0x2a6ca4 = {
        url: _0x1e0350.image
      };
      const _0x55d68d = {
        image: _0x2a6ca4,
        caption: "*FLASH-MD V2 - Logo Generator*"
      };
      const _0x45e110 = {
        quoted: _0x28e32f
      };
      await _0x45dfcb.sendMessage(_0x5ede34, _0x55d68d, _0x45e110);
    } catch (_0x3a4111) {
      console.error("Logo generation error:", _0x3a4111);
      const _0x2050f0 = {
        quoted: _0x28e32f
      };
      await _0x45dfcb.sendMessage(_0x5ede34, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x2050f0);
    }
  }
};
export const dragonballCommand = {
  name: "dragonball",
  aliases: [],
  description: "Generate a Dragon Ball style logo.",
  category: "Logo",
  execute: async (_0x32c418, _0x4730d2, _0x400c48, _0x70c18b) => {
    const _0x1e9132 = "*Example:* .dragonball YourText";
    if (!_0x400c48 || _0x400c48.length === 0) {
      const _0x31bdfc = {
        text: _0x1e9132
      };
      const _0x42493f = {
        quoted: _0x4730d2
      };
      return await _0x32c418.sendMessage(_0x70c18b, _0x31bdfc, _0x42493f);
    }
    try {
      const _0x12eac3 = {
        quoted: _0x4730d2
      };
      await _0x32c418.sendMessage(_0x70c18b, {
        text: "*Processing your logo... Please wait.*"
      }, _0x12eac3);
      const _0x535585 = await _0x6cb1e.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", _0x400c48.join(" "));
      const _0x5b9193 = {
        url: _0x535585.image
      };
      const _0x5e35d9 = {
        image: _0x5b9193,
        caption: "*FLASH-MD V2 - Logo Generator*"
      };
      const _0x403a2b = {
        quoted: _0x4730d2
      };
      await _0x32c418.sendMessage(_0x70c18b, _0x5e35d9, _0x403a2b);
    } catch (_0x5dac39) {
      console.error("Logo generation error:", _0x5dac39);
      const _0xf9015b = {
        quoted: _0x4730d2
      };
      await _0x32c418.sendMessage(_0x70c18b, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0xf9015b);
    }
  }
};
export const narutoCommand = {
  name: "naruto",
  aliases: [],
  description: "Generate a Naruto Shippuden style logo.",
  category: "Logo",
  execute: async (_0x278368, _0x217783, _0x4f0ac3, _0x2b0d7f) => {
    const _0x3e295e = "*Example:* .naruto YourText";
    if (!_0x4f0ac3 || _0x4f0ac3.length === 0) {
      const _0x2b1441 = {
        text: _0x3e295e
      };
      const _0x2cd9e2 = {
        quoted: _0x217783
      };
      return await _0x278368.sendMessage(_0x2b0d7f, _0x2b1441, _0x2cd9e2);
    }
    try {
      const _0x181011 = {
        quoted: _0x217783
      };
      await _0x278368.sendMessage(_0x2b0d7f, {
        text: "*Processing your logo... Please wait.*"
      }, _0x181011);
      const _0xee5ebc = await _0x6cb1e.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", _0x4f0ac3.join(" "));
      const _0x485afd = {
        url: _0xee5ebc.image
      };
      const _0x5c94c6 = {
        image: _0x485afd,
        caption: "*FLASH-MD V2 - Logo Generator*"
      };
      const _0x454726 = {
        quoted: _0x217783
      };
      await _0x278368.sendMessage(_0x2b0d7f, _0x5c94c6, _0x454726);
    } catch (_0x5f1419) {
      console.error("Logo generation error:", _0x5f1419);
      const _0x450b69 = {
        quoted: _0x217783
      };
      await _0x278368.sendMessage(_0x2b0d7f, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x450b69);
    }
  }
};
export const sandCommand = {
  name: "sand",
  aliases: [],
  description: "Generate a sand-style logo.",
  category: "Logo",
  execute: async (_0x1cd4d1, _0x2b8f40, _0x5a8e3d, _0x5a8ec8) => {
    const _0x2bcc61 = "*Example:* .sand YourText";
    if (!_0x5a8e3d || _0x5a8e3d.length === 0) {
      const _0x163945 = {
        text: _0x2bcc61
      };
      const _0x253da1 = {
        quoted: _0x2b8f40
      };
      return await _0x1cd4d1.sendMessage(_0x5a8ec8, _0x163945, _0x253da1);
    }
    const _0x121712 = _0x5a8e3d.join(" ");
    try {
      const _0x49b05d = await _0x6cb1e.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", _0x121712);
      const _0x4f60f1 = {
        url: _0x49b05d.image
      };
      const _0x430bb6 = {
        image: _0x4f60f1,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x348d9c = {
        quoted: _0x2b8f40
      };
      await _0x1cd4d1.sendMessage(_0x5a8ec8, _0x430bb6, _0x348d9c);
    } catch (_0xfa62d7) {
      console.error("Logo generation error:", _0xfa62d7);
      const _0x24073e = {
        quoted: _0x2b8f40
      };
      await _0x1cd4d1.sendMessage(_0x5a8ec8, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x24073e);
    }
  }
};
export const nightCommand = {
  name: "night",
  aliases: [],
  description: "Generate a stars-at-night style logo.",
  category: "Logo",
  execute: async (_0x51bac5, _0x4680d0, _0x2a4645, _0x17d7fe) => {
    const _0x59dd3b = "*Example:* .night YourText";
    if (!_0x2a4645 || _0x2a4645.length === 0) {
      const _0x4b2e49 = {
        text: _0x59dd3b
      };
      const _0x55f322 = {
        quoted: _0x4680d0
      };
      return await _0x51bac5.sendMessage(_0x17d7fe, _0x4b2e49, _0x55f322);
    }
    const _0x3001e0 = _0x2a4645.join(" ");
    try {
      const _0x270ee4 = await _0x6cb1e.ephoto("https://en.ephoto360.com/stars-night-online-1-85.html", _0x3001e0);
      const _0x2180e7 = {
        url: _0x270ee4.image
      };
      const _0x3c81e3 = {
        image: _0x2180e7,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x4c741b = {
        quoted: _0x4680d0
      };
      await _0x51bac5.sendMessage(_0x17d7fe, _0x3c81e3, _0x4c741b);
    } catch (_0x60ad23) {
      console.error("Logo generation error:", _0x60ad23);
      const _0x47714a = {
        quoted: _0x4680d0
      };
      await _0x51bac5.sendMessage(_0x17d7fe, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x47714a);
    }
  }
};
export const sunsetCommand = {
  name: "sunset",
  aliases: [],
  description: "Generate a sunset light text effect.",
  category: "Logo",
  execute: async (_0x517019, _0x31d07d, _0x107c54, _0x2faa5b) => {
    const _0x4f1ade = "*Example:* .sunset YourText";
    if (!_0x107c54 || _0x107c54.length === 0) {
      const _0x2ce446 = {
        text: _0x4f1ade
      };
      const _0x5ccfdc = {
        quoted: _0x31d07d
      };
      return await _0x517019.sendMessage(_0x2faa5b, _0x2ce446, _0x5ccfdc);
    }
    const _0x15f17d = _0x107c54.join(" ");
    try {
      const _0x57f861 = await _0x6cb1e.ephoto("https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html", _0x15f17d);
      const _0x10024f = {
        url: _0x57f861.image
      };
      const _0x5ae9bb = {
        image: _0x10024f,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x5b9d33 = {
        quoted: _0x31d07d
      };
      await _0x517019.sendMessage(_0x2faa5b, _0x5ae9bb, _0x5b9d33);
    } catch (_0x3ff956) {
      console.error("Logo generation error:", _0x3ff956);
      const _0x232b94 = {
        quoted: _0x31d07d
      };
      await _0x517019.sendMessage(_0x2faa5b, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x232b94);
    }
  }
};
export const chocolateCommand = {
  name: "chocolate",
  aliases: [],
  description: "Generate a chocolate text effect.",
  category: "Logo",
  execute: async (_0x5e8221, _0x16ac34, _0x1aa72f, _0x34e230) => {
    const _0x2a2aab = "*Example:* .chocolate YourText";
    if (!_0x1aa72f || _0x1aa72f.length === 0) {
      const _0x5b3e60 = {
        text: _0x2a2aab
      };
      const _0x17016e = {
        quoted: _0x16ac34
      };
      return await _0x5e8221.sendMessage(_0x34e230, _0x5b3e60, _0x17016e);
    }
    const _0x302e66 = _0x1aa72f.join(" ");
    try {
      const _0x26403e = await _0x6cb1e.ephoto("https://en.ephoto360.com/chocolate-text-effect-353.html", _0x302e66);
      const _0x2c3ce8 = {
        url: _0x26403e.image
      };
      const _0x25be0f = {
        image: _0x2c3ce8,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x4a831b = {
        quoted: _0x16ac34
      };
      await _0x5e8221.sendMessage(_0x34e230, _0x25be0f, _0x4a831b);
    } catch (_0x3b0baf) {
      console.error("Logo generation error:", _0x3b0baf);
      const _0x2d0246 = {
        quoted: _0x16ac34
      };
      await _0x5e8221.sendMessage(_0x34e230, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x2d0246);
    }
  }
};
export const mechanicalCommand = {
  name: "mechanical",
  aliases: [],
  description: "Generate a mechanical style text effect.",
  category: "Logo",
  execute: async (_0x549e3c, _0x9a24fb, _0x70015b, _0x4fb434) => {
    const _0x1dfd27 = "*Example:* .mechanical YourText";
    if (!_0x70015b || _0x70015b.length === 0) {
      const _0x17fb4f = {
        text: _0x1dfd27
      };
      const _0x11a6b9 = {
        quoted: _0x9a24fb
      };
      return await _0x549e3c.sendMessage(_0x4fb434, _0x17fb4f, _0x11a6b9);
    }
    const _0x292ef0 = _0x70015b.join(" ");
    try {
      const _0x3df745 = await _0x6cb1e.ephoto("https://en.ephoto360.com/create-your-name-in-a-mechanical-style-306.html", _0x292ef0);
      const _0x2d93fe = {
        url: _0x3df745.image
      };
      const _0x5d0fed = {
        image: _0x2d93fe,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0xb733cb = {
        quoted: _0x9a24fb
      };
      await _0x549e3c.sendMessage(_0x4fb434, _0x5d0fed, _0xb733cb);
    } catch (_0x56c358) {
      console.error("Logo generation error:", _0x56c358);
      const _0x5798a5 = {
        quoted: _0x9a24fb
      };
      await _0x549e3c.sendMessage(_0x4fb434, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x5798a5);
    }
  }
};
export const rainCommand = {
  name: "rain",
  aliases: [],
  description: "Generate a foggy rainy text effect.",
  category: "Logo",
  execute: async (_0x4e0029, _0x4f7087, _0x4818c8, _0x1ab740) => {
    const _0x4ee1a7 = "*Example:* .rain YourText";
    if (!_0x4818c8 || _0x4818c8.length === 0) {
      const _0x4b5ffd = {
        text: _0x4ee1a7
      };
      const _0xddd47 = {
        quoted: _0x4f7087
      };
      return await _0x4e0029.sendMessage(_0x1ab740, _0x4b5ffd, _0xddd47);
    }
    const _0x3a2a12 = _0x4818c8.join(" ");
    try {
      const _0x21ca3c = await _0x6cb1e.ephoto("https://en.ephoto360.com/foggy-rainy-text-effect-75.html", _0x3a2a12);
      const _0x1b41d3 = {
        url: _0x21ca3c.image
      };
      const _0x125d11 = {
        image: _0x1b41d3,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x5dd927 = {
        quoted: _0x4f7087
      };
      await _0x4e0029.sendMessage(_0x1ab740, _0x125d11, _0x5dd927);
    } catch (_0x25e658) {
      console.error("Logo generation error:", _0x25e658);
      const _0x356ec2 = {
        quoted: _0x4f7087
      };
      await _0x4e0029.sendMessage(_0x1ab740, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x356ec2);
    }
  }
};
export const clothCommand = {
  name: "cloth",
  aliases: [],
  description: "Generate a text on cloth effect.",
  category: "Logo",
  execute: async (_0x31e2f1, _0x1b7a08, _0x2ee53f, _0x128bba) => {
    const _0x20da0d = "*Example:* .cloth YourText";
    if (!_0x2ee53f || _0x2ee53f.length === 0) {
      const _0x215cc2 = {
        text: _0x20da0d
      };
      const _0x4c3291 = {
        quoted: _0x1b7a08
      };
      return await _0x31e2f1.sendMessage(_0x128bba, _0x215cc2, _0x4c3291);
    }
    const _0x211ed0 = _0x2ee53f.join(" ");
    try {
      const _0x4a8bd3 = await _0x6cb1e.ephoto("https://en.ephoto360.com/text-on-cloth-effect-62.html", _0x211ed0);
      const _0x7367b3 = {
        url: _0x4a8bd3.image
      };
      const _0x2b1596 = {
        image: _0x7367b3,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x468c04 = {
        quoted: _0x1b7a08
      };
      await _0x31e2f1.sendMessage(_0x128bba, _0x2b1596, _0x468c04);
    } catch (_0x21711f) {
      const _0x31379f = {
        quoted: _0x1b7a08
      };
      await _0x31e2f1.sendMessage(_0x128bba, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x31379f);
    }
  }
};
export const waterCommand = {
  name: "water",
  aliases: [],
  description: "Generate a water effect text logo.",
  category: "Logo",
  execute: async (_0x10bd40, _0x14a995, _0x22d396, _0x1e6507) => {
    const _0x23f521 = "*Example:* .water YourText";
    if (!_0x22d396 || _0x22d396.length === 0) {
      const _0x27e41b = {
        text: _0x23f521
      };
      const _0x2135d4 = {
        quoted: _0x14a995
      };
      return await _0x10bd40.sendMessage(_0x1e6507, _0x27e41b, _0x2135d4);
    }
    const _0xb2832d = _0x22d396.join(" ");
    try {
      const _0x47f4aa = await _0x6cb1e.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", _0xb2832d);
      const _0x233412 = {
        url: _0x47f4aa.image
      };
      const _0x45ddc5 = {
        image: _0x233412,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x33645e = {
        quoted: _0x14a995
      };
      await _0x10bd40.sendMessage(_0x1e6507, _0x45ddc5, _0x33645e);
    } catch (_0x2a726e) {
      const _0x401e46 = {
        quoted: _0x14a995
      };
      await _0x10bd40.sendMessage(_0x1e6507, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x401e46);
    }
  }
};
export const nineteen17Command = {
  name: "1917",
  aliases: [],
  description: "Generate a 1917 movie-style text logo.",
  category: "Logo",
  execute: async (_0x11d598, _0xad1427, _0x4854f1, _0x541962) => {
    const _0x126ad0 = "*Example:* .1917 YourText";
    if (!_0x4854f1 || _0x4854f1.length === 0) {
      const _0x372814 = {
        text: _0x126ad0
      };
      const _0x57c07b = {
        quoted: _0xad1427
      };
      return await _0x11d598.sendMessage(_0x541962, _0x372814, _0x57c07b);
    }
    const _0x493b40 = _0x4854f1.join(" ");
    try {
      const _0x234c2d = await _0x6cb1e.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", _0x493b40);
      const _0xa9fe08 = {
        url: _0x234c2d.image
      };
      const _0x33d29b = {
        image: _0xa9fe08,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x50c778 = {
        quoted: _0xad1427
      };
      await _0x11d598.sendMessage(_0x541962, _0x33d29b, _0x50c778);
    } catch (_0x52e432) {
      const _0x4218bc = {
        quoted: _0xad1427
      };
      await _0x11d598.sendMessage(_0x541962, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x4218bc);
    }
  }
};
export const graffitiCommand = {
  name: "graffiti",
  aliases: [],
  description: "Generate a cartoon-style graffiti text effect.",
  category: "Logo",
  execute: async (_0x18a2c7, _0x161164, _0x333d2f, _0x4f2511) => {
    const _0x24f29c = "*Example:* .graffiti YourText";
    if (!_0x333d2f || _0x333d2f.length === 0) {
      const _0x3e9a9c = {
        text: _0x24f29c
      };
      const _0x3a3e2d = {
        quoted: _0x161164
      };
      return await _0x18a2c7.sendMessage(_0x4f2511, _0x3e9a9c, _0x3a3e2d);
    }
    const _0x14590e = _0x333d2f.join(" ");
    try {
      const _0x2bd77d = await _0x6cb1e.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", _0x14590e);
      const _0x368601 = {
        url: _0x2bd77d.image
      };
      const _0x5a6829 = {
        image: _0x368601,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x5d2c6a = {
        quoted: _0x161164
      };
      await _0x18a2c7.sendMessage(_0x4f2511, _0x5a6829, _0x5d2c6a);
    } catch (_0x6eb258) {
      const _0x41e4ef = {
        quoted: _0x161164
      };
      await _0x18a2c7.sendMessage(_0x4f2511, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x41e4ef);
    }
  }
};
export const boomCommand = {
  name: "boom",
  aliases: [],
  description: "Generate a comic-style boom text effect.",
  category: "Logo",
  execute: async (_0x3104d7, _0x1b6774, _0x42088b, _0x4cebc1) => {
    const _0x34360d = "*Example:* .boom YourText";
    if (!_0x42088b || _0x42088b.length === 0) {
      const _0x3eeec7 = {
        text: _0x34360d
      };
      const _0x4ebc02 = {
        quoted: _0x1b6774
      };
      return await _0x3104d7.sendMessage(_0x4cebc1, _0x3eeec7, _0x4ebc02);
    }
    const _0x4d155f = _0x42088b.join(" ");
    try {
      const _0x3bc58c = await _0x6cb1e.ephoto("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", _0x4d155f);
      const _0x284ebe = {
        url: _0x3bc58c.image
      };
      const _0x6e695b = {
        image: _0x284ebe,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x203204 = {
        quoted: _0x1b6774
      };
      await _0x3104d7.sendMessage(_0x4cebc1, _0x6e695b, _0x203204);
    } catch (_0x5f3936) {
      const _0x211f45 = {
        quoted: _0x1b6774
      };
      await _0x3104d7.sendMessage(_0x4cebc1, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x211f45);
    }
  }
};
export const catCommand = {
  name: "cat",
  aliases: [],
  description: "Generate handwritten text on foggy glass.",
  category: "Logo",
  execute: async (_0x63184a, _0x236123, _0x3730f6, _0x31e637) => {
    const _0x2bc3de = "*Example:* .cat YourText";
    if (!_0x3730f6 || _0x3730f6.length === 0) {
      const _0x52ce7d = {
        text: _0x2bc3de
      };
      const _0x1e06e9 = {
        quoted: _0x236123
      };
      return await _0x63184a.sendMessage(_0x31e637, _0x52ce7d, _0x1e06e9);
    }
    const _0x484272 = _0x3730f6.join(" ");
    try {
      const _0x27114e = await _0x6cb1e.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", _0x484272);
      const _0x5a2436 = {
        url: _0x27114e.image
      };
      const _0x1170a4 = {
        image: _0x5a2436,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x43cd0f = {
        quoted: _0x236123
      };
      await _0x63184a.sendMessage(_0x31e637, _0x1170a4, _0x43cd0f);
    } catch (_0x1af085) {
      const _0x28351f = {
        quoted: _0x236123
      };
      await _0x63184a.sendMessage(_0x31e637, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x28351f);
    }
  }
};
export const purpleCommand = {
  name: "purple",
  aliases: [],
  description: "Generate a purple text effect.",
  category: "Logo",
  execute: async (_0x5295dd, _0x526272, _0x523ae9, _0x2a77ab) => {
    const _0x5728f4 = "*Example:* .purple YourText";
    if (!_0x523ae9 || _0x523ae9.length === 0) {
      const _0x29f3b6 = {
        text: _0x5728f4
      };
      const _0x4d2bc9 = {
        quoted: _0x526272
      };
      return await _0x5295dd.sendMessage(_0x2a77ab, _0x29f3b6, _0x4d2bc9);
    }
    const _0x2be592 = _0x523ae9.join(" ");
    try {
      const _0x1b99f4 = await _0x6cb1e.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", _0x2be592);
      const _0x224bbc = {
        url: _0x1b99f4.image
      };
      const _0x288afb = {
        image: _0x224bbc,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x2fb877 = {
        quoted: _0x526272
      };
      await _0x5295dd.sendMessage(_0x2a77ab, _0x288afb, _0x2fb877);
    } catch (_0x2d0abe) {
      const _0x22c9d0 = {
        quoted: _0x526272
      };
      await _0x5295dd.sendMessage(_0x2a77ab, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x22c9d0);
    }
  }
};
export const goldCommand = {
  name: "gold",
  aliases: [],
  description: "Generate a modern gold text effect.",
  category: "Logo",
  execute: async (_0x374c8b, _0x1f3072, _0x1514d4, _0x243bdc) => {
    const _0x3917f4 = "*Example:* .gold YourText";
    if (!_0x1514d4 || _0x1514d4.length === 0) {
      const _0x433261 = {
        text: _0x3917f4
      };
      const _0x39204c = {
        quoted: _0x1f3072
      };
      return await _0x374c8b.sendMessage(_0x243bdc, _0x433261, _0x39204c);
    }
    const _0x36e643 = _0x1514d4.join(" ");
    try {
      const _0x3a29d4 = await _0x6cb1e.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", _0x36e643);
      const _0x5e8c03 = {
        url: _0x3a29d4.image
      };
      const _0x27b690 = {
        image: _0x5e8c03,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x4afa04 = {
        quoted: _0x1f3072
      };
      await _0x374c8b.sendMessage(_0x243bdc, _0x27b690, _0x4afa04);
    } catch (_0x23a7ba) {
      const _0x2ad511 = {
        quoted: _0x1f3072
      };
      await _0x374c8b.sendMessage(_0x243bdc, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x2ad511);
    }
  }
};
export const arenaCommand = {
  name: "arena",
  aliases: [],
  description: "Generate Arena of Valor-style cover text.",
  category: "Logo",
  execute: async (_0x2a6da9, _0x104f05, _0x399677, _0x24b463) => {
    const _0x53064c = "*Example:* .arena YourText";
    if (!_0x399677 || _0x399677.length === 0) {
      const _0x4da9df = {
        text: _0x53064c
      };
      const _0x455557 = {
        quoted: _0x104f05
      };
      return await _0x2a6da9.sendMessage(_0x24b463, _0x4da9df, _0x455557);
    }
    const _0x411f07 = _0x399677.join(" ");
    try {
      const _0x3f68e8 = await _0x6cb1e.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x411f07);
      const _0x3a990a = {
        url: _0x3f68e8.image
      };
      const _0x356dda = {
        image: _0x3a990a,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x2a6c07 = {
        quoted: _0x104f05
      };
      await _0x2a6da9.sendMessage(_0x24b463, _0x356dda, _0x2a6c07);
    } catch (_0xf878f4) {
      const _0x28608a = {
        quoted: _0x104f05
      };
      await _0x2a6da9.sendMessage(_0x24b463, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x28608a);
    }
  }
};
export const incandescentCommand = {
  name: "incandescent",
  aliases: [],
  description: "Generate incandescent bulb text effect.",
  category: "Logo",
  execute: async (_0x576b09, _0x11ccc8, _0x4f42e0, _0x12b61c) => {
    const _0x188bbd = "*Example:* .incandescent YourText";
    if (!_0x4f42e0 || _0x4f42e0.length === 0) {
      const _0x3bafe6 = {
        text: _0x188bbd
      };
      const _0x25eb3f = {
        quoted: _0x11ccc8
      };
      return await _0x576b09.sendMessage(_0x12b61c, _0x3bafe6, _0x25eb3f);
    }
    const _0x1e39a5 = _0x4f42e0.join(" ");
    try {
      const _0x5e61a7 = await _0x6cb1e.ephoto("https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html", _0x1e39a5);
      const _0x31bc85 = {
        url: _0x5e61a7.image
      };
      const _0x2199ac = {
        image: _0x31bc85,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x45f4ff = {
        quoted: _0x11ccc8
      };
      await _0x576b09.sendMessage(_0x12b61c, _0x2199ac, _0x45f4ff);
    } catch (_0x1fa000) {
      const _0x22f7aa = {
        quoted: _0x11ccc8
      };
      await _0x576b09.sendMessage(_0x12b61c, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x22f7aa);
    }
  }
};
export const childCommand = {
  name: "child",
  aliases: [],
  description: "Write text on wet glass style.",
  category: "Logo",
  execute: async (_0x2b1dbc, _0x246309, _0x41eee4, _0x1c9b47) => {
    const _0x50cc90 = "*Example:* .child YourText";
    if (!_0x41eee4 || _0x41eee4.length === 0) {
      const _0x56b346 = {
        text: _0x50cc90
      };
      const _0x5cfa4d = {
        quoted: _0x246309
      };
      return await _0x2b1dbc.sendMessage(_0x1c9b47, _0x56b346, _0x5cfa4d);
    }
    const _0x4453b7 = _0x41eee4.join(" ");
    try {
      const _0x2a2a2f = await _0x6cb1e.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0x4453b7);
      const _0x5337b4 = {
        url: _0x2a2a2f.image
      };
      const _0xead834 = {
        image: _0x5337b4,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x4af849 = {
        quoted: _0x246309
      };
      await _0x2b1dbc.sendMessage(_0x1c9b47, _0xead834, _0x4af849);
    } catch (_0x4cca5f) {
      const _0x88b5f0 = {
        quoted: _0x246309
      };
      await _0x2b1dbc.sendMessage(_0x1c9b47, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x88b5f0);
    }
  }
};
export const typoCommand = {
  name: "typo",
  aliases: [],
  description: "Generate typography text on pavement.",
  category: "Logo",
  execute: async (_0x173c62, _0x29a592, _0x5d64ae, _0x5715dd) => {
    const _0x1a5a75 = "*Example:* .typo YourText";
    if (!_0x5d64ae || _0x5d64ae.length === 0) {
      const _0x69ef4 = {
        text: _0x1a5a75
      };
      const _0x4f11d5 = {
        quoted: _0x29a592
      };
      return await _0x173c62.sendMessage(_0x5715dd, _0x69ef4, _0x4f11d5);
    }
    const _0xae1730 = _0x5d64ae.join(" ");
    try {
      const _0x5cd963 = await _0x6cb1e.ephoto("https://en.ephoto360.com/typography-text-effect-on-pavement-online-774.html", _0xae1730);
      const _0x12ace9 = {
        url: _0x5cd963.image
      };
      const _0xe07480 = {
        image: _0x12ace9,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x5d6447 = {
        quoted: _0x29a592
      };
      await _0x173c62.sendMessage(_0x5715dd, _0xe07480, _0x5d6447);
    } catch (_0x227011) {
      const _0x35df45 = {
        quoted: _0x29a592
      };
      await _0x173c62.sendMessage(_0x5715dd, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x35df45);
    }
  }
};
export const lightCommand = {
  name: "light",
  aliases: [],
  description: "Generate futuristic light technology style text.",
  category: "Logo",
  execute: async (_0x547aa6, _0x24d7db, _0x3bdae4, _0x2e2320) => {
    const _0x5b6805 = "*Example:* .light YourText";
    if (!_0x3bdae4 || _0x3bdae4.length === 0) {
      const _0x1e2e5a = {
        text: _0x5b6805
      };
      const _0x116dbc = {
        quoted: _0x24d7db
      };
      return await _0x547aa6.sendMessage(_0x2e2320, _0x1e2e5a, _0x116dbc);
    }
    const _0x7b4b0a = _0x3bdae4.join(" ");
    try {
      const _0xfc5111 = await _0x6cb1e.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", _0x7b4b0a);
      const _0x152021 = {
        url: _0xfc5111.image
      };
      const _0x2e61e2 = {
        image: _0x152021,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x319fe2 = {
        quoted: _0x24d7db
      };
      await _0x547aa6.sendMessage(_0x2e2320, _0x2e61e2, _0x319fe2);
    } catch (_0x4c3ad6) {
      const _0x49f78e = {
        quoted: _0x24d7db
      };
      await _0x547aa6.sendMessage(_0x2e2320, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x49f78e);
    }
  }
};
export const steelCommand = {
  name: "steel",
  aliases: [],
  description: "Generate dragon steel text effect.",
  category: "Logo",
  execute: async (_0x23cc6a, _0x169da4, _0x4b0f2f, _0x55f91f) => {
    const _0x308fe3 = "*Example:* .steel YourText";
    if (!_0x4b0f2f || _0x4b0f2f.length === 0) {
      const _0x5b926a = {
        text: _0x308fe3
      };
      const _0x242a7e = {
        quoted: _0x169da4
      };
      return await _0x23cc6a.sendMessage(_0x55f91f, _0x5b926a, _0x242a7e);
    }
    const _0x1bc292 = _0x4b0f2f.join(" ");
    try {
      const _0x20087d = await _0x6cb1e.ephoto("https://en.ephoto360.com/dragon-steel-text-effect-online-347.html", _0x1bc292);
      const _0x29dce5 = {
        url: _0x20087d.image
      };
      const _0x5e5c8a = {
        image: _0x29dce5,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x2e41c1 = {
        quoted: _0x169da4
      };
      await _0x23cc6a.sendMessage(_0x55f91f, _0x5e5c8a, _0x2e41c1);
    } catch (_0x45c7c9) {
      const _0x3a6f82 = {
        quoted: _0x169da4
      };
      await _0x23cc6a.sendMessage(_0x55f91f, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x3a6f82);
    }
  }
};
export const sunlightCommand = {
  name: "sunlight",
  aliases: [],
  description: "Generate a sunlight shadow text effect.",
  category: "Logo",
  execute: async (_0xbe6cba, _0x3dd199, _0x45fe84, _0x274fef) => {
    const _0x52e87b = "*Example:* .sunlight YourText";
    if (!_0x45fe84 || _0x45fe84.length === 0) {
      const _0x44c86f = {
        text: _0x52e87b
      };
      const _0xf719cb = {
        quoted: _0x3dd199
      };
      return await _0xbe6cba.sendMessage(_0x274fef, _0x44c86f, _0xf719cb);
    }
    const _0x37a888 = _0x45fe84.join(" ");
    try {
      const _0x5ce7fd = await _0x6cb1e.ephoto("https://en.ephoto360.com/sunlight-shadow-text-204.html", _0x37a888);
      const _0x3ff3f9 = {
        url: _0x5ce7fd.image
      };
      const _0x1e2d13 = {
        image: _0x3ff3f9,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x4b6c65 = {
        quoted: _0x3dd199
      };
      await _0xbe6cba.sendMessage(_0x274fef, _0x1e2d13, _0x4b6c65);
    } catch (_0x3bba86) {
      const _0xa782c5 = {
        quoted: _0x3dd199
      };
      await _0xbe6cba.sendMessage(_0x274fef, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0xa782c5);
    }
  }
};
export const frozenCommand = {
  name: "frozen",
  aliases: [],
  description: "Generate a frozen Christmas text effect.",
  category: "Logo",
  execute: async (_0xf4fe5b, _0x46a3ab, _0x9556f1, _0x3df886) => {
    const _0x27f416 = "*Example:* .frozen YourText";
    if (!_0x9556f1 || _0x9556f1.length === 0) {
      const _0x5c3ed0 = {
        text: _0x27f416
      };
      const _0x10e27f = {
        quoted: _0x46a3ab
      };
      return await _0xf4fe5b.sendMessage(_0x3df886, _0x5c3ed0, _0x10e27f);
    }
    const _0x312b9f = _0x9556f1.join(" ");
    try {
      const _0x38f30b = await _0x6cb1e.ephoto("https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html", _0x312b9f);
      const _0xddd667 = {
        url: _0x38f30b.image
      };
      const _0x2e0102 = {
        image: _0xddd667,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x2dfa78 = {
        quoted: _0x46a3ab
      };
      await _0xf4fe5b.sendMessage(_0x3df886, _0x2e0102, _0x2dfa78);
    } catch (_0x219ce9) {
      const _0x472850 = {
        quoted: _0x46a3ab
      };
      await _0xf4fe5b.sendMessage(_0x3df886, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x472850);
    }
  }
};
export const leavesCommand = {
  name: "leaves",
  aliases: [],
  description: "Generate a green brush text effect.",
  category: "Logo",
  execute: async (_0x1d09d3, _0x54891b, _0x1d6a79, _0xee346b) => {
    const _0x5ef9fc = "*Example:* .leaves YourText";
    if (!_0x1d6a79 || _0x1d6a79.length === 0) {
      const _0x5db34a = {
        text: _0x5ef9fc
      };
      const _0x1b36cc = {
        quoted: _0x54891b
      };
      return await _0x1d09d3.sendMessage(_0xee346b, _0x5db34a, _0x1b36cc);
    }
    const _0x1cd8a7 = _0x1d6a79.join(" ");
    try {
      const _0x1e3542 = await _0x6cb1e.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", _0x1cd8a7);
      const _0x195a5f = {
        url: _0x1e3542.image
      };
      const _0x27ec7b = {
        image: _0x195a5f,
        caption: "*Logo by FLASH-MD V2*"
      };
      const _0x2f50e9 = {
        quoted: _0x54891b
      };
      await _0x1d09d3.sendMessage(_0xee346b, _0x27ec7b, _0x2f50e9);
    } catch (_0x237569) {
      const _0x3a6883 = {
        quoted: _0x54891b
      };
      await _0x1d09d3.sendMessage(_0xee346b, {
        text: "An error occurred while generating your logo. Please try again later."
      }, _0x3a6883);
    }
  }
};