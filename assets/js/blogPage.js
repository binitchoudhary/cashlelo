document.addEventListener("DOMContentLoaded", function () {
    // Get the query parameter "id" from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    if (postId) {
        // Find the blog post with the matching id from the data
        const blogPost = blogData.find(post => post.id === parseInt(postId));

        if (blogPost) {
            // Set the content of the blog page
            // document.getElementById("blogTitle").textContent = blogPost.title;
            document.getElementById("blogImage").src = blogPost.img;
            document.getElementById("blogPostTitle").textContent = blogPost.title;
            document.getElementById("blogDescription").textContent = blogPost.description;
            document.title = blogPost.title;
        }
    }
});
