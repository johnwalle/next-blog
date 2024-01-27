'use client';

import PostUser from '@/Components/postUser/postUser';
import { useEffect, useState } from 'react';
import styles from './singlePage.module.css';
import Image from 'next/image';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = ({ params }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(params.slug);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='/post.png'
          alt=''
          layout="fill"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src='/post.png'
            alt=''
            width={50}
            height={50}
          />
          <div>
            <div className={styles.ttcontainer}>
              <PostUser useId={post.userId} />
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>01.01.2024</span>
              </div>
            </div>
            <div className={styles.content}>
              {post.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;