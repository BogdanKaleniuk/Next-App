import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/socials");
    const data = await response.json();

    console.log("data", data);
    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next.js Application" />
    <Socials socials={socials} />
  </div>
);

export default Home;
