import styles from "./homeBlogs.module.css";
import Featured from "@/components/blogComponents/featured/Featured";
import CategoryList from "@/components/blogComponents/featured/categoryList/CategoryList";
import CardList from "@/components/blogComponents/featured/cardList/CardList";
import Menu from "@/components/blogComponents/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat || "";

  return (
    <div className="container">
      <div className="wrapper">
        <div className={styles.container}>
          <Featured />
          <CategoryList />
          <div className={styles.content}>
            <CardList page={page} cat={cat} />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
