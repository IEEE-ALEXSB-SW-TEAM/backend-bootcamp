let user1 = {
  firstname: "Joe",
  lastname: "Cube",
  is_loggedin: false
}


function greetUser(user) {
  console.log(`Hello ${user?.firstname || ''} ${user?.lastname || ''}!!`)
}

function successful_login(user, greeter) {
  user.is_loggedin = true
  greeter(user)
}

successful_login(user1,greetUser)
