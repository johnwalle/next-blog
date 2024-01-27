import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectertur adispising elit.
          Vero blandits adispisci minima reicendisa autem assuemnda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='' fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/hero.png' alt='' width={500} height={500} className={styles.heroImg} />
      </div>

    </div>
  );
};

export default Home;