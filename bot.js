const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '91.98.80.233',
  port: 25762,
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
