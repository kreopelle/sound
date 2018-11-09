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
