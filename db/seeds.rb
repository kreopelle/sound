admin = User.new
admin.email = 'admin@test.com'
admin.password = 'admin'
admin.password_confirmation = 'admin'
admin.admin = true
admin.save

user = User.new
user.email = 'user@test.com'
user.password = 'user'
user.password_confirmation = 'user'
user.save

# sound = admin.sounds.create(title: 'Picture', description:'Picture')
# sound.file.attach(io: File.open('/Users/Kayla/Desktop/test_image.png'), filename: 'test_image.png', content_type: 'image/png')

sound = admin.sounds.create(title: 'Seed Sound 1', description:'Daughters of Freedom')
sound.file.attach(io: File.open('/Users/Kayla/Desktop/7102334.mp3'), filename: '7102334.mp3', content_type: 'audio/mpeg')

sound = admin.sounds.create(title: 'Seed Sound 2', description:'NASA Beeps')
sound.file.attach(io: File.open('/Users/Kayla/Desktop/693857main_emfisis_chorus_1.mp3'), filename: '693857main_emfisis_chorus_1.mp3', content_type: 'audio/mpeg')

sound = user.sounds.create(title: 'Seed Sound 3', description:'NASA Atlas 5 launch')
sound.file.attach(io: File.open('/Users/Kayla/Desktop/590329main_ringtone_SDO_launchNats.mp3'), filename: '590329main_ringtone_SDO_launchNats.mp3', content_type: 'audio/mpeg')

sound = user.sounds.create(title: 'Seed Sound 4', description:'NASA Liftoff')
sound.file.attach(io: File.open('/Users/Kayla/Desktop/640392main_STS-26_Liftoff.mp3'), filename: '640392main_STS-26_Liftoff.mp3', content_type: 'audio/mpeg')
