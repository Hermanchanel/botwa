// GAK ADA APA APA NGAB KALEM
// Edit Di Index.js
const {
	MessageType,
	mentionedJid,
    waChatKey,	
} = require("@adiwajshing/baileys");
const fs = require("fs-extra");
const axios = require("axios")
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, waktoonyabro, calender} = require('../lib/functions')
const PhoneNumber = require('awesome-phonenumber');
const moment = require("moment-timezone");
const { color, bgcolor } = require('../lib/color');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
module.exports = welcome = async (client, anj, jid, mek, key) => {
        const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        const isWelcome = welkom.includes(anj.jid)
        const mdata = await client.groupMetadata(anj.jid)
        const groupMet = await client.groupMetadata(anj.jid);
        const groupMembers = groupMet.participants;
        const groupAdmins = getGroupAdmins(groupMembers);
        const groupName = mdata.subject
        const sender = client.user.jid
        const conts = client.contacts[anj.participants[0]] || { notify: jid.replace(/@.+/, '') }
    	const pushname = conts.notify || conts.vname || conts.name || PhoneNumber('+' + anj.participants[0].replace('@s.whatsapp.net', '')).getNumber('international') 
        taguser = `${anj.participants[0].split("@")[0]}`	    
	    if (!isWelcome) return
		try {
			const mdata = await client.groupMetadata(anj.jid)
			console.log(anj)
			if (anj.action == 'add') {
				num = anj.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
				    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			    } 			
				let buff = await getBuffer(ppimg)
		        const bosco1 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			 
				const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1				
                await client.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
 
          welnjing = `*Hello @${taguser}*
_Welcome In ${mdata.subject}_
*Intro Dulu Ye*
•_+ Nama :
•_+ Umur :
•_+ Askot:
_do not get out :v_`,
          potor = `_Welcome Message_`,	    
                   welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'WELCONE'},type:1}]
                welcomeButt = { contentText: `${welnjing}`, footerText: `${potor}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
				} else if (anj.action == 'remove') {
				num = anj.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const bosco3 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3				

                await client.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          memek = `*Byee @${taguser}*
_Out Of ${mdata.subject}_
          
_GoodBye :)_`,
          metu = `_Leave Message_`,
           welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'SAYONARA'},type:1}]
                welcomeButt = { contentText: `${memek}`, footerText: `${metu}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco4.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
			     }
			else if (anj.action == 'promote') {
num = anj.participants[0]
try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const bosco5 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const bosco6 = bosco5.message["ephemeralMessage"] ? bosco5.message.ephemeralMessage : bosco5				

                await clientprepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          promote = `*P R O M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nSelamat Yah atas Kenaikan Pangkatnya ðŸ”¥`,
          loter = `_Promote Message_`,
         welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'Congralutions'},type:1}]
                welcomeButt = { contentText: `${promote}`, footerText: `${loter}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco6.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
} else if (anj.action == 'demote') {
num = anj.participants[0]
try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const bosco7 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const bosco8 = bosco7.message["ephemeralMessage"] ? bosco7.message.ephemeralMessage : bosco7				

                await client.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          demote = `*D E M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nMamposs Nggak jadi Admin lagi, mangkanya yg Becuss..!!`,
          mote = `_Demote Message_`,
          welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'Congralutions'},type:1}]
                welcomeButt = { contentText: `${demote}`, footerText: `${mote}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco8.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
			    
}
  metdata = await client.groupMetadata(anj.jid)
    if(anj.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anj.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anj.desc == ''){
    tag = anj.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anj.descOwner.split('@')[0]}\nâ€¢ Deskripsi Baru : ${anj.desc}`
    client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  else if(anj.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
  else if(anj.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
}
		 	   
//const _0x3bd05a=_0x5492;(function(_0x513886,_0x1bcd19){const _0x117446=_0x5492,_0x39729d=_0x513886();while(!![]){try{const _0x281c3b=-parseInt(_0x117446(0x128))/0x1*(parseInt(_0x117446(0xe0))/0x2)+parseInt(_0x117446(0xeb))/0x3*(-parseInt(_0x117446(0x118))/0x4)+-parseInt(_0x117446(0xd8))/0x5*(parseInt(_0x117446(0xfe))/0x6)+-parseInt(_0x117446(0x106))/0x7+parseInt(_0x117446(0x10f))/0x8*(parseInt(_0x117446(0x109))/0x9)+-parseInt(_0x117446(0xd6))/0xa+parseInt(_0x117446(0x103))/0xb;if(_0x281c3b===_0x1bcd19)break;else _0x39729d['push'](_0x39729d['shift']());}catch(_0x3a1890){_0x39729d['push'](_0x39729d['shift']());}}}(_0x3b05,0xe10dc));const {MessageType,mentionedJid,waChatKey}=require(_0x3bd05a(0xe2)),fs=require(_0x3bd05a(0x105)),axios=require(_0x3bd05a(0xe6)),fetch=require(_0x3bd05a(0x120)),encodeUrl=require(_0x3bd05a(0xe1)),{forks,wait,simih,getBuffer,h2k,generateMessageID,getGroupAdmins,getRandom,banner,start,info,success,close,waktoonyabro,calender}=require(_0x3bd05a(0x121)),PhoneNumber=require('awesome-phonenumber'),moment=require(_0x3bd05a(0x12b)),{color,bgcolor}=require(_0x3bd05a(0x11b));module[_0x3bd05a(0xe4)]=welcome=async(_0x8263fc,_0x1ce881,_0x4defbd,_0x3ed3ab,_0x2e1e3e)=>{const _0x2af118=_0x3bd05a,_0x2cbd89=JSON[_0x2af118(0x116)](fs[_0x2af118(0xe5)](_0x2af118(0xf4))),_0x3f5e66=_0x2cbd89['includes'](_0x1ce881['jid']),_0xfd7f13=await _0x8263fc[_0x2af118(0x127)](_0x1ce881['jid']),_0x3d1e2d=await _0x8263fc[_0x2af118(0x127)](_0x1ce881[_0x2af118(0xe7)]),_0x132160=_0x3d1e2d[_0x2af118(0x10d)],_0x2fadb8=getGroupAdmins(_0x132160),_0x1f7efa=_0xfd7f13[_0x2af118(0xf9)],_0x5651ac=_0x8263fc[_0x2af118(0x122)]['jid'],_0x5e2db3=_0x8263fc['contacts'][_0x1ce881[_0x2af118(0x10d)][0x0]]||{'notify':_0x4defbd[_0x2af118(0xe3)](/@.+/,'')},_0x1a1bcf=_0x5e2db3[_0x2af118(0x117)]||_0x5e2db3['vname']||_0x5e2db3[_0x2af118(0xed)]||PhoneNumber('+'+_0x1ce881[_0x2af118(0x10d)][0x0][_0x2af118(0xe3)](_0x2af118(0xdd),''))['getNumber'](_0x2af118(0x111));taguser=''+_0x1ce881[_0x2af118(0x10d)][0x0][_0x2af118(0xff)]('@')[0x0];if(!_0x3f5e66)return;try{const _0x282837=await _0x8263fc[_0x2af118(0x127)](_0x1ce881['jid']);console[_0x2af118(0xde)](_0x1ce881);if(_0x1ce881['action']=='add'){num=_0x1ce881[_0x2af118(0x10d)][0x0];try{ppimg=await _0x8263fc['getProfilePicture'](num[_0x2af118(0xff)]('@')[0x0]+_0x2af118(0xdc));}catch{ppimg='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}let _0x46e5ed=await getBuffer(ppimg);const _0x228eb5=await _0x8263fc[_0x2af118(0x10e)]('0@s.whatsapp.net',_0x46e5ed,MessageType['location'],{'thumbnail':_0x46e5ed}),_0x1f93e7=_0x228eb5[_0x2af118(0x102)][_0x2af118(0xd9)]?_0x228eb5[_0x2af118(0x102)]['ephemeralMessage']:_0x228eb5;await _0x8263fc['prepareMessageMedia'](_0x46e5ed,_0x2af118(0xea),{'thumbnail':_0x46e5ed}),(welnjing=_0x2af118(0xf6)+taguser+_0x2af118(0x11d)+_0x282837[_0x2af118(0xf9)]+_0x2af118(0x107),potor=_0x2af118(0xd7),welcomeBut=[{'buttonId':'00','buttonText':{'displayText':'Welcome'},'type':0x1}]),welcomeButt={'contentText':''+welnjing,'footerText':''+potor,'buttons':welcomeBut,'headerType':0x6,'locationMessage':_0x1f93e7['message']['locationMessage']},_0x8263fc[_0x2af118(0x110)](_0x282837['id'],welcomeButt,MessageType['buttonsMessage'],{'caption':_0x2af118(0x126),'contextInfo':{'mentionedJid':[num]}});}else{if(_0x1ce881[_0x2af118(0x104)]=='remove'){num=_0x1ce881[_0x2af118(0x10d)][0x0];try{ppimg=await _0x8263fc[_0x2af118(0xf5)](num[_0x2af118(0xff)]('@')[0x0]+_0x2af118(0xdc));}catch{ppimg='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}let _0x331a92=await getBuffer(ppimg);const _0x1b2b67=await _0x8263fc[_0x2af118(0x10e)](_0x2af118(0xdb),_0x331a92,MessageType[_0x2af118(0x10a)],{'thumbnail':_0x331a92}),_0x1503cd=_0x1b2b67[_0x2af118(0x102)]['ephemeralMessage']?_0x1b2b67[_0x2af118(0x102)][_0x2af118(0xd9)]:_0x1b2b67;await _0x8263fc['prepareMessageMedia'](_0x331a92,'imageMessage',{'thumbnail':_0x331a92}),(memek='*Byee\x20@'+taguser+_0x2af118(0x119)+_0x282837['subject']+_0x2af118(0x11f),metu=_0x2af118(0xf0),welcomeBut=[{'buttonId':'00','buttonText':{'displayText':_0x2af118(0xf3)},'type':0x1}]),welcomeButt={'contentText':''+memek,'footerText':''+metu,'buttons':welcomeBut,'headerType':0x6,'locationMessage':_0x1503cd[_0x2af118(0x102)]['locationMessage']},_0x8263fc['sendMessage'](_0x282837['id'],welcomeButt,MessageType[_0x2af118(0xef)],{'caption':_0x2af118(0x126),'contextInfo':{'mentionedJid':[num]}});}else{if(_0x1ce881[_0x2af118(0x104)]==_0x2af118(0x10b)){num=_0x1ce881[_0x2af118(0x10d)][0x0];try{ppimg=await _0x8263fc['getProfilePicture'](num[_0x2af118(0xff)]('@')[0x0]+_0x2af118(0xdc));}catch{ppimg=_0x2af118(0x125);}let _0x1650b0=await getBuffer(ppimg);const _0x51e00d=await _0x8263fc[_0x2af118(0x10e)](_0x2af118(0xdb),_0x1650b0,MessageType['location'],{'thumbnail':_0x1650b0}),_0x262fc0=_0x51e00d['message']['ephemeralMessage']?_0x51e00d[_0x2af118(0x102)][_0x2af118(0xd9)]:_0x51e00d;await _0x8263fc[_0x2af118(0x11a)](_0x1650b0,_0x2af118(0xea),{'thumbnail':_0x1650b0}),(promote='*P\x20R\x20O\x20M\x20O\x20T\x20E\x20-\x20D\x20E\x20T\x20E\x20C\x20T\x20E\x20D*\x0aUsername:\x20@'+num[_0x2af118(0xff)]('@')[0x0]+_0x2af118(0x113)+moment['tz']('Asia/Jakarta')[_0x2af118(0x101)](_0x2af118(0xfa))+_0x2af118(0xda)+_0x282837[_0x2af118(0xf9)]+_0x2af118(0x12a),loter=_0x2af118(0x11e),welcomeBut=[{'buttonId':'00','buttonText':{'displayText':_0x2af118(0xee)},'type':0x1}]),welcomeButt={'contentText':''+promote,'footerText':''+loter,'buttons':welcomeBut,'headerType':0x6,'locationMessage':_0x262fc0[_0x2af118(0x102)][_0x2af118(0x10c)]},_0x8263fc[_0x2af118(0x110)](_0x282837['id'],welcomeButt,MessageType[_0x2af118(0xef)],{'caption':_0x2af118(0x126),'contextInfo':{'mentionedJid':[num]}});}else{if(_0x1ce881[_0x2af118(0x104)]==_0x2af118(0x11c)){num=_0x1ce881[_0x2af118(0x10d)][0x0];try{ppimg=await _0x8263fc['getProfilePicture'](num[_0x2af118(0xff)]('@')[0x0]+'@c.us');}catch{ppimg=_0x2af118(0x125);}let _0x3f3d5e=await getBuffer(ppimg);const _0x918f6f=await _0x8263fc[_0x2af118(0x10e)](_0x2af118(0xdb),_0x3f3d5e,MessageType[_0x2af118(0x10a)],{'thumbnail':_0x3f3d5e}),_0x51b1b7=_0x918f6f['message'][_0x2af118(0xd9)]?_0x918f6f[_0x2af118(0x102)]['ephemeralMessage']:_0x918f6f;await _0x8263fc[_0x2af118(0x11a)](_0x3f3d5e,_0x2af118(0xea),{'thumbnail':_0x3f3d5e}),(demote=_0x2af118(0xec)+num['split']('@')[0x0]+_0x2af118(0x113)+moment['tz'](_0x2af118(0x108))[_0x2af118(0x101)](_0x2af118(0xfa))+'\x0aGroup:\x20'+_0x282837['subject']+_0x2af118(0xe9),mote=_0x2af118(0xf7),welcomeBut=[{'buttonId':'00','buttonText':{'displayText':'Congralutions'},'type':0x1}]),welcomeButt={'contentText':''+demote,'footerText':''+mote,'buttons':welcomeBut,'headerType':0x6,'locationMessage':_0x51b1b7[_0x2af118(0x102)][_0x2af118(0x10c)]},_0x8263fc[_0x2af118(0x110)](_0x282837['id'],welcomeButt,MessageType[_0x2af118(0xef)],{'caption':'buff','contextInfo':{'mentionedJid':[num]}});}}}}metdata=await _0x8263fc[_0x2af118(0x127)](_0x1ce881[_0x2af118(0xe7)]);if(_0x1ce881[_0x2af118(0xfc)]==_0x2af118(0x114))teks=_0x2af118(0xfd),_0x8263fc[_0x2af118(0x110)](metdata['id'],teks,MessageType[_0x2af118(0xe8)],{'quoted':fkontakk}),console[_0x2af118(0xde)](_0x2af118(0x129)+metdata[_0x2af118(0xf9)]);else{if(_0x1ce881['announce']=='true')teks=_0x2af118(0xf1),_0x8263fc['sendMessage'](metdata['id'],teks,MessageType[_0x2af118(0xe8)],{'quoted':fkontakk}),console[_0x2af118(0xde)]('-\x20[\x20Group\x20Closed\x20]\x20-\x20In\x20'+metdata[_0x2af118(0xf9)]);else{if(!_0x1ce881['desc']=='')tag=_0x1ce881['descOwner'][_0x2af118(0xff)]('@')[0x0]+_0x2af118(0xdd),teks=_0x2af118(0xf2)+_0x1ce881['descOwner'][_0x2af118(0xff)]('@')[0x0]+_0x2af118(0xd5)+_0x1ce881[_0x2af118(0xfb)],_0x8263fc['sendMessage'](metdata['id'],teks,MessageType[_0x2af118(0xe8)],{'contextInfo':{'mentionedJid':[tag]},'quoted':fkontakk}),console[_0x2af118(0xde)](_0x2af118(0x123)+metdata[_0x2af118(0xf9)]);else{if(_0x1ce881[_0x2af118(0x112)]==_0x2af118(0x114))teks=_0x2af118(0xdf),_0x8263fc[_0x2af118(0x110)](metdata['id'],teks,MessageType[_0x2af118(0xe8)],{'quoted':fkontakk}),console[_0x2af118(0xde)]('-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x20In\x20'+metdata[_0x2af118(0xf9)]);else _0x1ce881[_0x2af118(0x112)]==_0x2af118(0x100)&&(teks=_0x2af118(0x115),_0x8263fc[_0x2af118(0x110)](metdata['id'],teks,MessageType['text'],{'quoted':fkontakk}),console['log'](_0x2af118(0xf8)+metdata['subject']));}}}}catch(_0x268903){console[_0x2af118(0xde)]('Error\x20:\x20%s',color(_0x268903,_0x2af118(0x124)));}};function _0x5492(_0x588bcc,_0x4de565){const _0x3b05da=_0x3b05();return _0x5492=function(_0x5492e7,_0x30e289){_0x5492e7=_0x5492e7-0xd5;let _0x8cae00=_0x3b05da[_0x5492e7];return _0x8cae00;},_0x5492(_0x588bcc,_0x4de565);}function _0x3b05(){const _0x1a1983=['../lib/functions','user','-\x20[\x20Group\x20Description\x20Change\x20]\x20-\x20In\x20','red','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','buff','groupMetadata','57686xcbCQh','-\x20[\x20Group\x20Opened\x20]\x20-\x20In\x20','\x0a\x0aSelamat\x20Yah\x20atas\x20Kenaikan\x20Pangkatnya\x20ðŸ”¥','moment-timezone','\x0aâ€¢\x20Deskripsi\x20Baru\x20:\x20','15523570eGNcsf','_Welcome\x20Message_','110gszAsE','ephemeralMessage','\x0aGroup:\x20','0@s.whatsapp.net','@c.us','@s.whatsapp.net','log','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x0a\x0aEdit\x20Group\x20info\x20telah\x20dibuka\x20untuk\x20member\x0aSekarang\x20semua\x20member\x20dapat\x20mengedit\x20info\x20Group\x20Ini','18FIgvct','encodeurl','@adiwajshing/baileys','replace','exports','readFileSync','axios','jid','text','\x0a\x0aMamposs\x20Nggak\x20jadi\x20Admin\x20lagi,\x20mangkanya\x20yg\x20Becuss..!!','imageMessage','25626iEjSRD','*D\x20E\x20M\x20O\x20T\x20E\x20-\x20D\x20E\x20T\x20E\x20C\x20T\x20E\x20D*\x0aUsername:\x20@','name','Congralutions','buttonsMessage','_Leave\x20Message_','-\x20[\x20Group\x20Closed\x20]\x20-\x0a\x0a_Group\x20telah\x20ditutup\x20oleh\x20admin_\x0a_Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan_','-\x20[\x20Group\x20Description\x20Change\x20]\x20-\x0a\x0aDeskripsi\x20Group\x20telah\x20diubah\x20oleh\x20Admin\x20@','Byee','./database/group/welcome.json','getProfilePicture','*Hello\x20@','_Demote\x20Message_','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x20In\x20','subject','DD/MM\x20HH:mm:ss','desc','announce','-\x20[\x20Group\x20Opened\x20]\x20-\x0a\x0a_Group\x20telah\x20dibuka\x20oleh\x20admin_\x0a_Sekarang\x20semua\x20member\x20bisa\x20mengirim\x20pesan_','15678jmMmcN','split','true','format','message','36965555lbjzNe','action','fs-extra','7058352HScSVP','_\x0a\x0a_Keep\x20Stay\x20Healty_','Asia/Jakarta','5094qZYGjK','location','promote','locationMessage','participants','prepareMessage','17240fNQsAZ','sendMessage','international','restrict','\x0aTime\x20:\x20','false','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x0a\x0aEdit\x20Group\x20info\x20telah\x20ditutup\x20untuk\x20member\x0aSekarang\x20hanya\x20admin\x20group\x20yang\x20dapat\x20mengedit\x20info\x20Group\x20Ini','parse','notify','244qPPRrf','*\x0a_Out\x20Of\x20','prepareMessageMedia','../lib/color','demote','*\x0a_Welcome\x20In\x20','_Promote\x20Message_','_\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a_Sayonara\x20:)_','node-fetch'];_0x3b05=function(){return _0x1a1983;};return _0x3b05();}