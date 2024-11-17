const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Afrique/Libreville";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_02_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwU1Q1WHdCdDA1dzVPSi9NSW9HWTRWUDQ4aDY0RHdiOHhOTldFRjRDMXI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRdXJsNlE4eVJQbUh2dkFwaHJET2FRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhZmRhMTgxLTBjMmUtNGNmNC1iZmYwLWNiMDkxZTJjYjViYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDUwLFxuICAgICAgMTI4LFxuICAgICAgOTYsXG4gICAgICA1MSxcbiAgICAgIDEyNSxcbiAgICAgIDIxNCxcbiAgICAgIDEyNixcbiAgICAgIDE0OSxcbiAgICAgIDE0NixcbiAgICAgIDE1OCxcbiAgICAgIDEwNixcbiAgICAgIDIwNSxcbiAgICAgIDQ1LFxuICAgICAgMTc1LFxuICAgICAgMTQ2LFxuICAgICAgMTY0LFxuICAgICAgMTUzLFxuICAgICAgOTksXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgNDcsXG4gICAgICAxMDQsXG4gICAgICAyMCxcbiAgICAgIDQ5LFxuICAgICAgNDIsXG4gICAgICAxOTQsXG4gICAgICAyOSxcbiAgICAgIDI2LFxuICAgICAgNDcsXG4gICAgICA0OSxcbiAgICAgIDYsXG4gICAgICA5NSxcbiAgICAgIDk0LFxuICAgICAgMTk2LFxuICAgICAgODgsXG4gICAgICAxNDIsXG4gICAgICAyMzYsXG4gICAgICAyMyxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJROVc3SkhOR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQxMDQ3NjI0Njg6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MzczMDQ2MzMzNDU4MDo2MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcVV3L1lFRU52dTU3a0dHQkVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJQaUhabGEwQ1E4VDErdENXSjc5VXpobWxPQkhpdDlnQlZ0bzZPdk1CeXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieVJJRW5JT29nZ3Z0dEpJc3pEM0lnRWZZVDlXZWUyMXMvdjhzc21lN1k0R2ZaOE0xc0lrZHV1S2JSN3YzMnRCZFFxazdYNVA2U0lMTFRNMWJWTXVTRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSlpnc2t2MzMwM1o5bXlSanlYeEVRV29sUGxKMEU4TVljNk5CeElyVnpqT1NOSzByaHlqWFFzdlV5L2tuK3EyU2tpOGxJOVBjb0NZaW5RY3U0SUhpaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQxMDQ3NjI0Njg6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE4NTIxMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQURVQUFLU1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRFVBQUtTVS5qc29uIjogIntcImtleURhdGFcIjpcIm1UVTZpYVpOMTBjN2haNXl1T1RveWs0Mys1U053T2Y2cTFRaTc4bm9XalE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMyMjMwNjEyMixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzYsNCw1Myw1LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyODQyMzMzNzM3M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "£",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐿𝛩𝑅𝐷",
  packname: process.env.PACK_NAME || "𝐿𝛩𝑅𝐷",
  botname : process.env.BOT_NAME  || "𝐿𝛩𝑅𝐷",
  ownername:process.env.OWNER_NAME|| "𝐿𝛩𝑅𝐷",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
