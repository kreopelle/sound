sound1 = Sound.new(title: 'Seed Sound 1', description:'NASA Liftoff')
sound1.file.attach(io: File.open('/Users/Kayla/Desktop/640392main_STS-26_Liftoff.mp3'), filename: '640392main_STS-26_Liftoff.mp3', content_type: 'audio/mpeg')

sound1.save

sound2 = Sound.new(title: 'Seed Sound 2', description:'NASA Atlas 5 launch')
sound2.file.attach(io: File.open('/Users/Kayla/Desktop/590329main_ringtone_SDO_launchNats.mp3'), filename: '590329main_ringtone_SDO_launchNats.mp3', content_type: 'audio/mpeg')

sound2.save

sound3 = Sound.new(title: 'Seed Sound 3', description:'NASA Beeps')
sound3.file.attach(io: File.open('/Users/Kayla/Desktop/693857main_emfisis_chorus_1.mp3'), filename: '693857main_emfisis_chorus_1.mp3', content_type: 'audio/mpeg')

sound3.save

sound4 = Sound.new(title: 'Seed Sound 4', description:'Daughters of Freedom')
sound4.file.attach(io: File.open('/Users/Kayla/Desktop/7102334.mp3'), filename: '7102334.mp3', content_type: 'audio/mpeg')

sound4.save
