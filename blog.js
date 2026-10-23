async function loadBlog() {
    const res = await fetch('posts.json');
    const data = await res.json();
    
    data.sort((a, b) => b.timestamp - a.timestamp);

    document.getElementById('blog').innerHTML = data.map(post => `
        <div class="post">
            <h2>${post.title}</h2>
            <small>${post.date}</small>
            <p>${post.content}</p>
        </div>
    `).join('');
}

loadBlog();