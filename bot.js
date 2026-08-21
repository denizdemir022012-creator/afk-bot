console.log('=== BOT BAŞLIYOR ===')

const mineflayer = require('mineflayer')

console.log('Mineflayer yüklendi.')
console.log('Sunucuya bağlanılıyor: dynamic-8.magmanode.com:25762')

const bot = mineflayer.createBot({
  host: 'dynamic-8.magmanode.com',
  port: 25762,
  username: 'ali1234'
})

bot.on('login', () => {
  console.log('=== MINECRAFT SUNUCUSUNA GİRİLDİ ===')
})

bot.on('spawn', () => {
  console.log('=== BOT SPAWN OLDU ===')
})

bot.on('error', err => {
  console.log('=== HATA ===')
  console.log(err)
})

bot.on('kicked', reason => {
  console.log('=== SUNUCUDAN ATILDI ===')
  console.log(reason)
})

bot.on('end', () => {
  console.log('=== BAĞLANTI KESİLDİ ===')
})
