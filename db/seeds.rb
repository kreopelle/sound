sound = Sound.save(title: 'Seed Sound 2', description:'NASA Atlas 5 launch')
sound.file.attach(io: File.open('/Users/Kayla/Desktop/590329main_ringtone_SDO_launchNats.mp3'), filename: '590329main_ringtone_SDO_launchNats.mp3', content_type: 'audio/mpeg')

sound = Sound.save(title: 'Seed Sound 1', description:'NASA Liftoff')
sound.file.attach(io: File.open('/Users/Kayla/Desktop/640392main_STS-26_Liftoff.mp3'), filename: '640392main_STS-26_Liftoff.mp3', content_type: 'audio/mpeg')

sound = Sound.save(title: 'Seed Sound 3', description:'NASA Beeps')
sound.file.attach(io: File.open('/Users/Kayla/Desktop/693857main_emfisis_chorus_1.mp3'), filename: '693857main_emfisis_chorus_1.mp3', content_type: 'audio/mpeg')

sound = Sound.save(title: 'Seed Sound 4', description:'Daughters of Freedom')
sound.file.attach(io: File.open('/Users/Kayla/Desktop/7102334.mp3'), filename: '7102334.mp3', content_type: 'audio/mpeg')
