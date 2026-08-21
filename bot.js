const mineflayer = require('mineflayer')

console.log('Bot başlatılıyor...')
console.log('Sunucu: dynamic-8.magmanode.com:25762')

const bot = mineflayer.createBot({
  host: 'dynamic-8.magmanode.com',
  port: 25762,
  username: 'ali1234'
})

bot.on('login', () => {
  console.log('✅ MINECRAFT SUNUCUSUNA GİRİLDİ!')
})

bot.on('spawn', () => {
  console.log('✅ BOT SPAWN OLDU!')
})

bot.on('error', (err) => {
  console.log('❌ HATA:', err)
})

bot.on('end', () => {
  console.log('❌ BAĞLANTI KESİLDİ')
})

bot.on('kicked', (reason) => {
  console.log('❌ SUNUCUDAN ATILDI:', reason)
})
