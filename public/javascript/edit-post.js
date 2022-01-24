async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="comment-body"]').value;
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${post_id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_text,
      loggedIn: true
    })
  });
  document.location.replace('/dashboard');
    
}

async function deleteFormHandler(event) {
  event.preventDefault();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE',
  });
  document.location.replace('/dashboard');
    
}


document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);