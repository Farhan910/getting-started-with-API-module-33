function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li) 
    }
}


function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then (res => res.json())
    .then(data => loadMoreComments(data))
}

loadComments();
function loadMoreComments(comments){
    const commentContainer = document.getElementById('load-comment')
    for(const comment of comments ){
        const p = document.createElement('p')
        p.innerText = comment.email
        commentContainer.appendChild(p)
    }
}