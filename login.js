function Login(emails, password) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  const login_user = users.find(item => {
    return item.email == emails
  })

  if (login_user == undefined) {
    return 'Can not find this user'
  } else if (login_user.email == emails & login_user.password == password) {
    return login_user
  } else {
    return 'Password error'
  }


}

module.exports = Login