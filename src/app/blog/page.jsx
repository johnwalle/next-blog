import styles from './blog.module.css';
import Postcard from '@/Components/postCard/postCard';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts' , {next:{revalidate:3600}} );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;