//  Javascript Nuggets
//  Timestamps
console.log(new Date());

// Unix Time
// January 1, 1970
// 1s = 1000ms

// Date.now()
console.log(Date.now());

posts = []


setTimeout(() => {
  newPost = {
    userid: 1,
    content: "Heyo",
    timestamp: Date.now(),
    timeForView: new Date()
  }
  posts.push(newPost)
  console.log(posts)  
}, 1000);

setTimeout(() => {
  newPost = {
    userid: 3,
    content: "Heyo amigo",
    timestamp: Date.now(),
    timeForView: new Date()
  }
  posts.push(newPost)
  console.log(posts)
}, 2000);

setTimeout(() => {
  newPost = {
    userid: 2,
    content: "Heyo egulino",
    timestamp: Date.now(),
    timeForView: new Date()
  }
  posts.push(newPost)
  console.log(posts)
}, 3000);

console.log(posts.at(-1))
console.log(posts.at(0))