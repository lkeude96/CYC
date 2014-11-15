# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users_list = [
  ["garett@highstep.com", "cyc"],
  ["bill@microsoft.com", "cyc"],
  ["steve@apple.com", "cyc"],
  ["larry@oracle.com", "cyc"]
]

user_list.each do |email, password|
  User.create(email: email, password: password)
end


