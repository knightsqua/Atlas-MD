const {checkWelcome}= require('./MongoDB/MongoDb_Core');

module.exports = async (Atlas, anu) => {
  try {
    let metadata = await Atlas.groupMetadata(anu.id);
    let participants = anu.participants;
    let desc = metadata.desc;
    if (desc == undefined) desc = "No Description";

    for (let num of participants) {
      try {
        ppuser = await Atlas.profilePictureUrl(num, "image");
      } catch {
        ppuser = botImage4;
      }

      if (anu.action == "add") {
        const WELstatus = await checkWelcome(anu.id);
        let WAuserName = num;
        console.log(
          `\n+${WAuserName.split("@")[0]} Joined/Got Added in: ${
            metadata.subject
          }\n`
        );
        Atlastext = `
𝐤𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${WAuserName.split("@")[0]} Senpai, 𝐈'𝐦 Sᴀᴍᴍʏ ᴋᴜɴ

╔════════ ≪ °❈° ≫ ═══════╗

ㅤㅤㅤㅤ         〄 welcome 𝐢𝐧 〄
            *${metadata.subject}*.

╚════════ ≪ °❈° ≫ ═══════╝ 

*🧣 𝗚𝗥𝗢𝗨𝗣 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡 🧣*

${desc}

*🔰𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 : Sᴀᴍᴍʏ*
  `;
        if (WELstatus) {
          await Atlas.sendMessage(anu.id, {
            image: { url: ppuser },
            caption: Atlastext,
            mentions: [num],
          });
        }
      } else if (anu.action == "remove") {
        const WELstatus = await checkWelcome(anu.id);
        let WAuserName = num;
        console.log(
          `\n+${WAuserName.split("@")[0]} Left/Got Removed from: ${
            metadata.subject
          }\n`
        );
        Atlastext = `
  @${WAuserName.split("@")[0]} Senpai left *${metadata.subject}*.
                                                       
  *I𝙵  T𝙷𝙴  S𝚃𝙰𝚁𝚂  W𝙷𝙴𝚁𝙴  T𝙾  F𝙰𝙻𝙻  F𝚁𝙾𝙼  H𝙴𝙰𝚅𝙴𝙽  T𝙾  D𝙴𝚂𝙲𝚁𝙸𝙱𝙴  Y𝙾𝚄𝚁  B𝙴𝙰𝚄𝚃𝚈✨
N𝙾  S𝚃𝙰𝚁  W𝙾𝚄𝙻𝙳  Leave  T𝙷𝙴  H𝙴𝙰𝚅𝙴𝙽  T𝙷𝙰𝚃  D𝙰𝚈....✨✨🗿*

╭━━╮
┃╭╮┃
┃╰╯╰┳╮╱╭┳━━╮
┃╭━╮┃┃╱┃┃┃━┫
┃╰━╯┃╰━╯┃┃━┫
╰━━━┻━╮╭┻━━╯
╱╱╱╱╭━╯┃
╱╱╱╱╰━━╯
ㅤㅤ 🔰𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 : Sᴀᴍᴍʏ
  `;
        if (WELstatus) {
          await Atlas.sendMessage(anu.id, {
            image: { url: ppuser },
            caption: Atlastext,
            mentions: [num],
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
