const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: Number(process.env.MC_PORT),
  username: 'ali1234',
  version: '26.2'
})

bot.on('login', () => {
  console.log('Bot sunucuya bağlandı!')
})

bot.on('error', err => {
  console.log('Hata:', err.message)
})

bot.on('end', () => {
  console.log('Bağlantı kesildi.')
})
