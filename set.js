/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || '
  ALPHA;;;H4sIAAAAAAAAA61W2Y6bSBT9lVG92orZF0sthc0bdtttvI/moYACyqwuCmMc+VPyli/Ll4xwd09aSqanRwpPRQH3nnvq3HP5ArIcl8hGDeh/AQXBZ0hRu6RNgUAf6FUQIAK6wIcUgj6AA/sU7TLLWTx5ZWPagaZcLo+bKAvswl1KDttRsCtugqch8wBuXVBUboK9dwKuhIldE/36FFfhfAazU5SOzz5ZR3VmRLNyUDv2QKZ4xjnKA7i1ESEmOAutIkIpIjCxUbOAmHwMPjc/XrQB5+SbzJ3vSq2cnabJcH9IezvBXjodSV0tez38+MR7H4PfTI9UOKpJKZ2vorfy680MalUU0iyZUwMehoYsTw9n34/Wz/BLHGbIH/soo5g2H+b9aUGVjuVOWEdRfHvMXk3UYfcj3rloI7npXdJBcRqc64NhxR8DXhuB6c1m1yVbcUPJ70mj8VqeqfbT5DrPDdeP6kDMp/Mxs/PeAl+QV63E/4f3ehLb20syutrr7bo60b2rn3oFl49G4aZnRxPhyPjqqZY09oOy4TK0P8RZgOPssPJ5gVw77LqxpomqZ37u76iSktK/dtBq9gM+pBV5D2Vcb2BYWVG83spbGO63uZgW6WR6WoTX1VmSlemC1OPDMCmWcyyUm3A+OoS7k+JclGN81nRnxcTWalTl+coVhT0R11yBtYd7RTFqxj7os7cuICjEJSWQ4jxr9ySuC6B/dpBHEL2zC1x7X/m00wjQc1wmWir7rZyLRJw4Q03m4+Ol3uytbWpsjsoD6IKC5B4qS+SPcElz0sxQWcIQlaD/5/2g2poJSnOKJthv2RMFlhVYleVF5XP5qY4gLWFRfMoQBV0QkDydIdCnpEJdcP+AETjVVHXG4HmO44QBLxqSNJB0zlB5bWDIbYXpc9IVTlFJYVqAPiuLjKJwCqPeur8Hh8HzKjtQJUk0RMEUrIHOyYbOWoJkyJbKWO/jYJXfhUNSOUkXOdYUTYkzVVFRVGUgGJbJqALLaNL7OHjxd+HgGMtkZFOQVNEQONFgdUViZNWUBqLMmQb/Pg6Buf3VBRm60Oe2bsXIs10QYFLSdVYVSQ79155/fQg9L68y6jSZZ7QLRED/zTaiFGdh2VZWZZB4ET4jo60D9AOYlOgf/SOC/NdaXjzdyP22LdlHczaUhQlosbeBfuKmL/zMTvL8liDJPC9wnCCxjCr2hc/tfhdksA0FTJhR9EfqVRT98f3rt+9fv7UMvWBvU/mIQpyUrdQe+R2335vWHF0VbzwcalaoGaEGftT6aikvPcs6ubtY4mlAYrfiOvniNGkQEc8zez0ds2JgsaMSmXFxsR5+EaQdJjpXCoupczxjbrsUCSNfz+x0gVzDwvpxW/QyGQ0jFHFXq6gUnncYND76o3jFDVhPOlhsaKz2VyGZHhoSisvGEQJFb/2nC3x0xh56m6xyz852exxLenxsVLuj+qWa1tKl3geQd+1gdkkXTRnEjRT0KhJEQ3uw72yny7IzlWs290xvcUymZJGkm22y09OCcNuwfja7u9kmL0MOv/gQvt8GGN1nxsuB/NepPuNutcfcum9CvAyhfzFyfauuT8Mrs8e8JA5lej6ZEvayU8e9GonRPKLd5XEpj0LR9pbg1jZBkUAa5CRtf3Eyn+R30ZC8asU8zoL8nWSGNh4bLy6fwJJqPxrkV14oPL+1IHkxgmXUcrCR5dO6VXujFYVDIX3tN6C116TXAbe/AXVLGjWpCQAA';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || 'Dantemcute';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PRIVATE';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114191358';
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/jxxwms.jpeg';
const menu = process.env.MENU_TYPE || 'IMAGE';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
