function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))

}

/**
 1. get the container element where you want to add the new elements
 2. Creat child element
 3. set innerText or innerHTML
 4. appendchild
 */

function displayPosts(posts) {
    const postContainer = document.getElementById('post_container');
    for (const post of posts) {
        const PostDiv = document.createElement('div');
        PostDiv.classList.add('post')
        console.log(post);
        PostDiv.innerHTML = `
       <h4>User-${post.userId} </h4>
       <h5>Post: ${post.title} </h5>
       <p>Post Description: ${post.body} </p>
       `
        postContainer.appendChild(PostDiv);
    }
}

loadPosts();