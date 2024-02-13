// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const posts = [
  { creator: 'hamada', postIndex: 1, content: 'I' },
  { creator: 'hamasa', postIndex: 2, content: 'E' },
  { creator: 'hamasa', postIndex: 3, content: 'E' },
  { creator: 'hamada', postIndex: 4, content: 'E' },
  { creator: 'ameer' , postIndex: 5, content: 'A' },
  { creator: 'hamada', postIndex: 6, content: 'L' },
  { creator: 'ameer' , postIndex: 7, content: 'E' },
  { creator: 'ameer' , postIndex: 8, content: 'X' },
];
// filter
const hamadaPosts = posts.filter((post) => {
  // if (post.creator === "hamada") {
  //   return post;
  // }
  return post.creator === "hamada";
});
console.log(hamadaPosts);

const recentPosts = posts.filter((post) => post.postIndex > 4);
console.log(recentPosts);

// no match
// Explain inlcudes
const uncensoredPosts = posts.filter((post) => post.content.includes('curse word'));
console.log(uncensoredPosts);

// find
const firstPost = posts.find((post) => post.postIndex === 1);
console.log(firstPost);
// no match
const futurePost = posts.find((post) => post.postIndex === 1000);
console.log(futurePost);
// multiple matches
const ameerPost = posts.find((post) => post.creator === "ameer");
console.log(ameerPost);

const xPost = posts.filter((post) => post.content === "X");
console.log(xPost);