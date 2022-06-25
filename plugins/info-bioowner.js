let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Wins-Bot
*✉️ Nama RL* : Fadil
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 7 Januari 200*
*🎨 Umur* : 1*
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton anime, Chatting, Recode script bot
*💬 Sifat* : Dingin, Tidak Ramah, Kanjut, Prik, Pendiam
*🗺️ Tinggal* : Indo, JawaBarat, Pantai Pangandaran
*❤️ Suka* : warnah kuning & biru, anime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @ziistore_id
*🇫  Facebook* : -
*🏮 Chanel Youtube* : ziistore
*🐈 Github:* Zii-Bot

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
