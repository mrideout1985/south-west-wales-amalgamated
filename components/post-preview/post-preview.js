import Link from "next/link";
import { imageBuilder } from "../../lib/sanity";
import { useRouter } from "next/router";
import CoverImage from "../cover-image/cover-image";
import Date from "../date/date";
import Avatar from "../avatar/avatar";
import styles from "./post-preview.module.scss";
export default function PostPreview({ title, coverImage, date, slug }) {
  const path = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3>
        <Link
          href={
            path.asPath === `/news` ? `/posts/${slug}` : `/campaigns/${slug}`
          }
        >
          <a>{title}</a>
        </Link>
      </h3>
      <div className={styles.date}>
        <Date dateString={date} />
      </div>
    </div>
  );
}
