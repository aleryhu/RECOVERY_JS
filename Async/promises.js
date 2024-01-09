// ASYNC PROGRSMMING
const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
];

const getPost = () => {
  setTimeout(() => {
    let outPut = "";
    posts.forEach((post) => {
      outPut += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = outPut;
  }, 1000);
};
const createPost = (post) => {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
};

