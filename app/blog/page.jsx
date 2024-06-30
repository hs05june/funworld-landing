import CardList from "@/components/blogComponents/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/blogComponents/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="container">
      <div className="wrapper">
        <div className={styles.container}>
          <h1 className={styles.title}>{cat} Blog</h1>
          <div className={styles.content}>
            <CardList page={page} cat={cat} />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
