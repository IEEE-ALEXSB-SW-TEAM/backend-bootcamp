// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const users = [
  { name: 'bob', postsCount: 100 },
  { name: 'peter', postsCount: 300 },
  { name: 'susy', postsCount: 400 },
  { name: 'anna', postsCount: 10 },
];

const dailyTotal = users.reduce((totalPosts, user) => {
  console.log(totalPosts);
  console.log(user.postsCount);
  totalPosts += user.postsCount;
  return totalPosts;
}, 0);

console.log(dailyTotal);
