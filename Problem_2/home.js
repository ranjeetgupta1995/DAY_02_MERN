async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

async function displayPosts() {
    try {
        const posts = await fetchPosts();
        if (posts.length === 0) {
            console.log('No posts found.');
            return;
        }
        console.log('Posts:');
        posts.forEach(post => {
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log('---');
        });
    } catch (error) {
        console.error('Error displaying posts:', error);
    }
}

// Call the function to display posts
displayPosts();