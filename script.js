// Get the post section and form elements
const postSection = document.querySelector('.post-section');
const postForm = postSection.querySelector('form');
const postTextarea = postForm.querySelector('textarea');
const postButton = postForm.querySelector('button');
const postsList = postSection.querySelector('.posts');

// Add event listener to the post button
postButton.addEventListener('click', (e) => {
  e.preventDefault();
  const postText = postTextarea.value.trim();
  if (postText) {
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = `
      <h2>Post</h2>
      <p>posted by <a href="#">Okeke Joe</a> on <time datetime="2024-10-10">October 10 2024</time></p>
      <p>${postText}</p>
    `;
    postsList.appendChild(newPost);
    postTextarea.value = '';
  }
});

// Get the friends section element
const friendsSection = document.querySelector('.friends-section');
const friendsList = friendsSection.querySelector('ul');

// Sample data for friends
const friends = [
  { id: 1, name: 'James Okeke' },
  { id: 2, name: 'Paul Onyeka' },
  { id: 3, name: 'Chisom Okeke' },
];

// Function to render friends list
function renderFriends() {
  const friendsHtml = friends.map((friend) => {
    return `<li>${friend.name}</li>`;
  }).join('');
  friendsList.innerHTML = friendsHtml;
}

// Render initial friends list
renderFriends();
