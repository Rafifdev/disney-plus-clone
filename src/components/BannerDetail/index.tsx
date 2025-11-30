import clsx from "clsx";
import styles from "./index.module.css";

interface GenreItem {
  id: number | undefined;
  name: string;
}

interface Props {
  title: string;
  overview: string;
  releaseDate: string;
  language: string;
  genres: GenreItem[];
}

function BannerDetail(props: Props) {
  const { title, overview, releaseDate, genres, language } = props;
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        <div className={clsx(styles.section, styles.section1)}>
          <span>{releaseDate}</span>
          <i>&#x2022;</i>
          <span>{language}</span>
        </div>

        <div className={clsx(styles.section, styles.section2)}>
          <p>{overview}</p>
        </div>

        <div className={clsx(styles.section, styles.section3)}>
          {genres.map(({id, name}, index) => (
            <span key={id ?? index} className={styles.genre}>
              {index > 0 && <span className={styles.divider}>|</span>}
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerDetail;
