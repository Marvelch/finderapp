function index({ posts }) {
  // return { posts };
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=bdbf6fe6d9a54a8b92f564d37dbcba6c"
  );
  const posts = await res.json();

  return {
    props: {
      posts,  
    },
  };
}

export default index;
