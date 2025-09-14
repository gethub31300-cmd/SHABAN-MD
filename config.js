const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUl3MWZqcEsxU3FITStJdDdmZmxzNWRTbGY1NHhxRXNxRUJTRUhOdlVFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlhiRXRuVGh2QkVUc09YY0owVDJvWW9nSzIxT1hSQW5nQ0NBbm55UTZsQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUDZTLzJrTlg3Z05idDRjVUxseG1Ob2dGTmI2YlBYdnhyMStFaE9LREZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudFlET2xFbVNvQjM3YWcrZlMzR2tQdlVaZUpETERWdDM2S0pudWxhR1VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZEK2c0cVpQU1RMeUFqQTJUeEVFNGFoUTNsc0lsS1Mxb3J3RGFlc3cwVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PazhQbHkvSm5ySGNINTUwYWdaZmlDMlFOWERsSDRqWUVZZHJiZTVBbTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUw3NkxpcDFoSDZwNXEyQXJkWU5ER1ZvN3g3UzA3NEdCd0MySHN0S0huOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzRaK09jRDJXT3pFSHd3UmN6LzNGdHhoQmJMNVpQRWNqb2RZWU1MRTEycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGSUtEOFFTU3pLSHZRVDhSV2tTTTc1VXdmTWRPTkpzZ0xmYzdnYzNWZEs1NTZYVjljT0dGNFZvcjNXT2dENnRaZXIxVUZocG5DR3R0QzFFcTdXYWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJpZWovR3I1N1lWYVVEMzZtYmhwT2JNMWxzMzZ5TzV2VCs3NEFwaHI5S0x3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI0UEtYV0FHSiIsIm1lIjp7ImlkIjoiOTIzMTk0NTQxMTk0OjMzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCWoIfNovCdkanwnZGo4aq88J2RqyDNovCdkbXwnZGo8J2RuuGqtuGqvfCdkazwnZGs8J2RqSDNovCdka7wnZGw8J2RueGqtfCdkbPwlqCHXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNQ1VURSBHSVJM8JakjSIsImxpZCI6IjIwOTcxNTI1MDM2NDQ2MzozM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B1WjUwZ1EzYnljeGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9VSXB3aW8rY01FNFkyK2hUaGsrMTI2eUFoZG92TUtRb3VnZEdGcUhZUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRlSEJhbFc0ZmZBOFVoTU03dFJSWkk4bXBHZnFqZURoNnZOQzhJRFI5MkxDaG5oa3N6eWdldlV0R0dRWkp0TWxDNU1iNXZyL2RtZEFGaytKTVdkNkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhbkR5cXowWkI3dkxkRDk1ZERZT2cyeUhEc2ZxUW1XUnFWMjk1MkZHbUxnZ2Q4OUV6ZitIaml0b2l6OWx4NTh5bU9HWC9aM0Y2TFV0SEU5OHQ2TGhoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5NDU0MTE5NDozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmMUNLY0lxUG5EQk9HTnZvVTRaUHRkdXNnSVhhTHpDa0tMb0hSaGFoMkVZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc4Nzk5MDUsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1JEIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
