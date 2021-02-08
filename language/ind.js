exports.wait = () => {
	return`*「 WAIT 」 𝙼𝚎𝚐𝚞𝚖𝚒𝚗 𝙱𝙾𝚃 Sedang Dalam proses*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Fajar|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Uang mu* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *User register* : ${_registered.length}
┗━━━⊱  ⸨ *𝙼𝚎𝚐𝚞𝚖𝚒𝚗 𝙱𝙾𝚃* ⸩  ⊰━━━━┛

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}stickergif*
┣⊱ *${prefix}quotemaker* <text|author>
┣⊱ *${prefix}qrcode* <text>
┣⊱ *${prefix}ttp*
┣⊱ *${prefix}stickerhide* <text>
┣⊱ *${prefix}emoji*
┣⊱ *${prefix}tahta* <teks>
┣⊱ *${prefix}blood* <teks>
┣⊱ *${prefix}blood2* <teks>
┣⊱ *${prefix}ice* <teks>
┣⊱ *${prefix}2021* <teks>
┣⊱ *${prefix}holographic* <teks>
┣⊱ *${prefix}racun* <teks>
┣⊱ *${prefix}metaldark* <teks>
┣⊱ *${prefix}serem* <teks>
┣⊱ *${prefix}strawberry* <teks>
┣⊱ *${prefix}bunga* <teks>
┣⊱ *${prefix}jokerlogo* <teks>
┣⊱ *${prefix}bokeh* <teks>
┣⊱ *${prefix}lawas* <teks>
┣⊱ *${prefix}holiday* <teks>
┣⊱ *${prefix}steel3d* <teks> | <teks>
┣⊱ *${prefix}prome* <teks> | <teks>
┣⊱ *${prefix}pronlogo* <teks> | <teks>
┣⊱ *${prefix}love* <teks>
┣⊱ *${prefix}paper* <teks>
┣⊱ *${prefix}slide* <teks>
┣⊱ *${prefix}party* <teks>
┣⊱ *${prefix}roman* <teks>
┣⊱ *${prefix}glitch* <teks> | <teks>
┣⊱ *${prefix}apiteks* <teks>
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}lirik* <text>
┣⊱ *${prefix}chord* <text>
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}gantengcek* <tag member>
┣⊱ *${prefix}cantikcek* <tag member>
┣⊱ *${prefix}watak* <tag member>
┣⊱ *${prefix}hobby*
┣⊱ *${prefix}persengay* <tag member>
┣⊱ *${prefix}persenbucin* <tag member>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}brainly* [error]
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣⊱ *${prefix}tiktok* <username>
┣⊱ *${prefix}ssweb* <link>
┣⊱ *${prefix}kbbi* <text>
┣⊱ *${prefix}asupan*
┣⊱ *${prefix}randomquran*
┣⊱ *${prefix}fakta*
┣⊱ *${prefix}meme*
┣⊱ *${prefix}hekerbucin*
┣⊱ *${prefix}katailham*
┣━━⊱ *AUDIO* ⊰━━━┫
┣⊱ *${prefix}slow* <replay mp4/mp3>
┣⊱ *${prefix}bass* <replay mp4/mp3>
┣⊱ *${prefix}gemuk* <replay mp4/mp3>
┣⊱ *${prefix}toptt* <replay mp4/mp3>
┣⊱ *${prefix}tupai* <replay mp4/mp3>
┣⊱ *${prefix}tomp3* 
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}yt* <link yt>
┣⊱ *${prefix}yt3* <link yt>
┣⊱ *${prefix}joox* <judul>
┣⊱ *${prefix}play* <judul>
┣⊱ *${prefix}play1* <judul>
┣⊱ *${prefix}tiktok* <link>
┣⊱ *${prefix}snack* <link>
┣⊱ *${prefix}smule* <link>
┣⊱ *${prefix}instavid* <link>
┣⊱ *${prefix}instaimg* <link>
┣⊱ *${prefix}instastory*
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}hentai*
┣⊱ *${prefix}sideoppai*
┣⊱ *${prefix}animebooty*
┣⊱ *${prefix}animefeets*
┣⊱ *${prefix}ecchi*
┣⊱ *${prefix}ahegao*
┣⊱ *${prefix}nsfwwaifu*
┣⊱ *${prefix}animethighss*
┣⊱ *${prefix}hololewd*
┣⊱ *${prefix}hentaiparadise*
┣⊱ *${prefix}nsfwneko*
┣⊱ *${prefix}nsfwloli*
┣⊱ *${prefix}nsfwtrap*
┣⊱ *${prefix}nsfwblowjob*
┣⊱ *${prefix}peluk*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <jumblah>
┣⊱ *${prefix}transfer* <tag |jumblah>
┣⊱ *${prefix}dompet*
┣⊱ *${prefix}leaderboard*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}blocklist*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}kicktime*
┣⊱ *${prefix}del* <hapus chat>
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
❍█╭━━━━━━━━━━━━━
❍█      *NEW FITUR*
❍█╭━━━━━━━━━━━━━
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}randombokep* 
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}caklontong*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}tebakgambar*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}family100*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}spamgmail*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}spamsms* <no> | <jumalh>
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}spamcall* <0897xxxx>
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}bokep* <judul>
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}mimpi* <mimpi mu>
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}artinama* <namamu>
❍╰━━━━━━━━━━━━━
❍ ╭━━━━━━━━━━━━━
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}playstore* <search>
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}cerpen*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}cersex*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}ytsearch*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}quran*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}randomquran*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}infocuaca* <kota>
      ❍━━━━━━━━━━━━━❍
               *ANIME & WIBU*
      ❍━━━━━━━━━━━━━❍
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}loli*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}neko*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}naruto*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}minato*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}boruto*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}hinata*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}sasuke*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}sakura*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}kaneki*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}toukachan*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}rize*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}akira*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}itori*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}goku*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}kurumi*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}miku*
❍【♡ۣۜۜ፝͜͜͡͡✿➣ *${prefix}wait* <send image>
❍ ╰━━━━━━━━━━━━━
╭──━─── ❀۝❀ ───━──╮
          *𝙼𝚎𝚐𝚞𝚖𝚒𝚗 𝙱𝙾𝚃*
╰──━─── ❀۝❀ ───━──╯
┣━━⊱ *THANGKS TO* ⊰━━┫
┃
┣⊱ *Fajar Alfarizi* <dev>
┣⊱ *Debby* <partner>
┣⊱ *Resta Fvnky* <sc ori>
┣⊱ *D N S BOT* <team>
┃
┃
┃
┃ 
┃
┗━━⊱  ⸨ *𝙼𝚎𝚐𝚞𝚖𝚒𝚗 𝙱𝙾𝚃* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}