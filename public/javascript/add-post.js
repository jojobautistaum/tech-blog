async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  console.log(title);
  console.log(post_text);
  const response = await fetch('/api/posts', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      title,
      post_text
    })
  });

  // if (response.ok) {
    document.location.replace('/dashboard');
  // } else {
  //   console.log(response);
  //   alert(response.statusText);
  // }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);