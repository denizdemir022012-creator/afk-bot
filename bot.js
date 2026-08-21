const mc = require('minecraft-protocol')

console.log('=== BOT BAŞLIYOR ===')
console.log('Sunucu: dynamic-8.magmanode.com:25762')
console.log('Minecraft: 26.2')

const client = mc.createClient({
  host: 'dynamic-8.magmanode.com',
  port: 25762,
  username: 'ali1234',
  auth: 'offline',
  version: '26.2'
})

client.once('login', () => {
  console.log('=== MINECRAFT 26.2 SUNUCUSUNA GİRİLDİ ===')
})

client.on('error', (err) => {
  console.log('=== HATA ===')
  console.log(err)
})

client.on('end', () => {
  console.log('=== BAĞLANTI KESİLDİ ===')
})

client.on('kick_disconnect', (packet) => {
  console.log('=== SUNUCUDAN ATILDI ===')
  console.log(packet)
})
