import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../../lib/sanity";
import { useRouter } from "next/router";
import styles from "./cover-image.module.scss";

export default function CoverImage({ title, url, imageObject, slug }) {
  const path = useRouter();

  const image = (
    <img
      alt={`Cover Image for ${title}`}
      className={styles.image}
      src={imageBuilder(imageObject).width(1400).height(540).url()}
    />
  );

  return (
    <div className={styles.container}>
      {slug ? (
        <Link
          href={
            path.asPath === `/news` ? `/posts/${slug}` : `/campaigns/${slug}`
          }
        >
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
