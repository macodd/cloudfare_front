import React, { useEffect, useState } from "react";


const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  const base_url = "https://my-worker.codd82.workers.dev/api/posts"
  const create_post_url = "https://my-worker.codd82.workers.dev/api/create"

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        base_url
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };
    getPosts();
  }, []);

  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <span className="fs-4">Cloudflare exercise</span>
      </header>
      <div className="row justify-content-center">
        <div className="col-lg-8 py-3 px-4 bg-light rounded-3">
          <h1 className="display-6 fw-bold">New Post</h1>
          <form action={create_post_url} method="POST">
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="username">Username</label>
              <input className="form-control" id="username" name="username" type="text" placeholder="your username" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" id="title" name="title" type="text" placeholder="title of post" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="content">Content</label>
              <textarea className="form-control" id="content" name="content" rows={3} />
            </div>
            <div className="col-auto text-center">
              <button type="submit" className="btn btn-primary mb-3">Create post</button>
                </div>
            </form>
          </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 px-4">
          <h1>Posts</h1>
          {posts.map((post) => (
              <div className="card mb-3" key={post.id}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{post.title}</h5>
                      <p className="card-text">{post.content}</p>
                      <p className="card-text"><small class="text-muted">by: {post.username}</small></p>
                     </div>
                  </div>
                 </div>
               </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
