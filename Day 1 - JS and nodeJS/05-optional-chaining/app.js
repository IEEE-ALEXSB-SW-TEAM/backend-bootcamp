const users = [
  {
    name: 'Anas'
  },
  {
    name: 'bob',
    recentPost: {
      datePosted: '9-2-2024 8 PM',
      content: "Javascripter and proud"
    }
  },
  {}
]

// Ecplain for each
users.forEach((user) => {
  // console.log(user.recentPost.content  )
  console.log(user?.recentPost?.content)
  console.log(user?.recentPost?.content || "Error: No posts or no user")
})
