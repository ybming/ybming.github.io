var posts=["2025/09/26/hello-world/","2024/01/20/diyi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };