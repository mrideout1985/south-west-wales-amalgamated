import { getHomeData } from "../lib/api";
import Meta from "../components/meta/meta";
import SanityBlockContent from "@sanity/block-content-to-react";
import styles from "../styles/Home.module.scss";

export default function Home({ data }) {
  return (
    <section className={styles.container}>
      <Meta title={"HOME"}>
        <meta name="description" content="Home" />
      </Meta>
      <div className={styles.pagetitle}>
        <h1>Home</h1>
      </div>
      <div className={styles["about-data"]}>
        {data &&
          data.map((about, index) => (
            <article key={index}>
              {console.log(about)}
              <div className={styles["aboutpage"]}>
                <div className={styles["blocks"]}>
                  <div className={styles["image-block1"]}>
                    <div className={styles.image}>
                      {about.image?.asset?.url !== undefined ? (
                        <img
                          src={about.image.asset.url}
                          alt="aboutpageoimage"
                        />
                      ) : null}
                    </div>
                    <div className={styles.section1}>
                      <SanityBlockContent
                        dataset="production"
                        projectId="8bvty42v"
                        blocks={about?.info}
                      />
                    </div>
                  </div>
                  <hr />
                  {!about.moreInfo ? null : (
                    <div className={styles.section2}>
                      <SanityBlockContent
                        dataset="production"
                        projectId="8bvty42v"
                        blocks={about.moreInfo}
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const homeData = await getHomeData();
  return {
    props: { data: homeData },
  };
}
