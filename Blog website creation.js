const posts = [
    { title: 'Post Title 1', content: 'Post content 1' },
    { title: 'Post Title 2', content: 'Post content 2' },
  ];
  
  const postsList = document.querySelector('ul');
  
  posts.forEach(post => {
    const listItem = document.createElement('li');
    const title = document.createElement('h2');
    const content = document.createElement('p');
  
    title.textContent = post.title;
    content.textContent = post.content;
  
    listItem.appendChild(title);
    listItem.appendChild(content);
  
    postsList.appendChild(listItem);
  });