const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu2", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";

    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault(s.TZ);
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    // Header with better formatting
    let infoMsg = `
╔════════════════════════╗
║      BONIPHACE MD      ║
╠════════════════════════╣
║ Mode: ${mode.padEnd(15)} ║
║ User: ${s.OWNER_NAME.padEnd(15)} ║
║ Time: ${temps.padEnd(15)} ║
║ Date: ${date.padEnd(15)} ║
╚════════════════════════╝\n\n`;

    // Horizontal menu layout
    let menuMsg = `╭───────── COMMANDS ─────────⳹\n`;

    for (const cat in coms) {
        menuMsg += `\n├─────「 ${cat.toUpperCase()} 」─────⳹\n`;
        
        // Format commands in 3 columns for better horizontal layout
        const colSize = Math.ceil(coms[cat].length / 3);
        for (let i = 0; i < colSize; i++) {
            let line = '│ ';
            for (let j = 0; j < 3; j++) {
                const index = i + j * colSize;
                if (index < coms[cat].length) {
                    line += `• ${coms[cat][index].padEnd(15)} `;
                }
            }
            menuMsg += line + '\n';
        }
    }

    menuMsg += `╰───────────────────────────⳹\n\n`;

    // Footer with better design
    const footerMsg = `
┏━━━━━━━━━━━━━━━━━━━━━━┓
┃   BONIPHACE MD BOT   ┃
┃   Powered by BONIPHACE Tech  ┃
┗━━━━━━━━━━━━━━━━━━━━━━┛`;

    var lien = mybotpic();

    try {
        if (lien.match(/\.(mp4|gif)$/i)) {
            await zk.sendMessage(dest, { 
                video: { url: lien }, 
                caption: infoMsg + menuMsg,
                footer: "BONIPHACE-MD • WhatsApp Bot",
                gifPlayback: true 
            }, { quoted: ms });
        } 
        else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
            await zk.sendMessage(dest, { 
                image: { url: lien }, 
                caption: infoMsg + menuMsg,
                footer: "BONIPHACE-MD • WhatsApp Bot"
            }, { quoted: ms });
        } 
        else {
            await repondre(infoMsg + menuMsg + footerMsg);
        }
    } catch (e) {
        console.error("Menu Error:", e);
        await repondre("⚠️ Error displaying menu. Please try again later.");
    }
});
