import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝐒𝐇𝐀𝐃𝐎𝐖-𝐁𝐎𝐓",
        body: "𓆩 𝐒𝐇𝐀𝐃𝐎𝐖-𝐁𝐎𝐓 𓆪",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}