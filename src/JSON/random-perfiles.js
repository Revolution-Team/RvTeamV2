import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const cristiano = (await axios.get(`https://raw.githubusercontent.com/Revolution-Team/RvTeamV2/master/src/JSON/Perfiles.json`)).data;
  const ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())];
  conn.sendFile(m.chat, ronaldo, 'error.jpg', `_*☆PERFILES☆*_
• 🍿ᴠɪx *$10*
• 🍿ᴠɪx 2ᴍ *$15*
• 🍿ᴠɪx 1 ᴀÑᴏ *$35*
• 🍿ᴘʀɪᴍᴇ ᴠɪᴅᴇᴏ *$10*
• 🍿ᴘʀɪᴍᴇ ᴠɪᴅᴇᴏ ꜱ/ᴀɴᴜɴᴄɪᴏꜱ *$13*
• 🍿ᴘʀɪᴍᴇ ᴠɪᴅᴇᴏ ᴄ/ᴄᴀɴᴀʟᴇꜱ *$25*
• 🍿ᴘʀɪᴍᴇ ᴠɪᴅᴇᴏ 6ᴍ *$30*
• 🍿ᴘʀɪᴍᴇ ᴠɪᴅᴇᴏ 1ᴀÑᴏ *$50* 
• 🍿ᴘᴀʀᴀᴍᴏᴜᴛ *$10*
• 🍿ᴄʀᴜɴᴄʜʏʀᴏʟʟ *$10*
• 🍿ᴄʀᴜɴᴄʜʏʀᴏʟʟ 1 ᴀÑᴏ *$65*
• 🍿ɴᴇᴛꜰʟɪx  *$40*
• 🍿ɴᴇᴛꜰʟɪx ᴍɪᴇᴍʙʀᴏ ᴇxᴛʀᴀ *$48*
• 🍿ᴅɪꜱɴᴇʏ ᴘʀᴇᴍɪᴜᴍ ꜱ/ꜱᴛᴀʀᴛ *$22*
• 🍿ᴅɪꜱɴᴇʏ ᴘʀᴇᴍɪᴜᴍ ᴄᴏɴ ꜱᴛᴀʀ *$26*
• 🍿ᴍᴀx *$20*
• 🍿ᴍᴀx ᴘʟᴀᴛɪɴᴏ *$24*
• 🍿ᴍᴀx ᴘʟᴀᴛɪɴᴏ ʀᴇɴᴏ *$28*
• 🍿ᴄᴀɴᴠᴀ *$15*
• 🍿ᴄᴀɴᴠᴀ 6ᴍ *$40*
• 🍿ᴄᴀɴᴠᴀ 1ᴀñᴏ *$60*
• 🍿ʏᴏᴜᴛᴜʙᴇ 1ᴍ *$15*
• 🍿ʏᴏᴜᴛᴜʙᴇ 1ᴍ ʀᴇɴᴏ *$20*
• 🍿ʏᴏᴜᴛᴜʙᴇ 3ᴍ *$30*
• 🍿ᴘʟᴇx *$25*
• 🍿ɪᴘᴛᴠ *$25*
• 🍿ᴍᴀɢɪꜱᴛᴠ *$100* 3ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏꜱ`, m);
};
// conn.sendButton(m.chat, "*Perfiles*", author, ronaldo, [['😎 SIGUIENTE 😎', `${usedPrefix + command}`]], m)}
handler.help = ['p', 'start'];
handler.tags = ['internet'];
handler.command = /^(p|p1)$/i;
export default handler;
