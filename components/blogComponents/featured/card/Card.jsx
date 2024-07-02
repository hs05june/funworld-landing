import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className="flex flex-col px-2 py-2 md:flex-row justify-between items-center gap-4 border my-4" key={key}>
      {item.img && (
        <div className="first-line:">
          <Image src={item.img} alt="" width={250} height={300} />
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "} {item.catSlug}
          </span>
        </div>
      )}
      <div className={styles.textContainer}>
        
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
