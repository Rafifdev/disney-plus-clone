import styles from "./index.module.css";
import ContentCard from "../../components/ContentCard";
import { useNavigate } from "react-router-dom";

function SearchTvSeries(data) {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className={styles.title}>Tv Series</h1>
      <div className={styles.contentGrid}>
        {data.tvData?.results?.length > 0 &&
          data.tvData?.results.map((content: any) => (
            <ContentCard
              key={content.id}
              onClick={() => navigate(`/tvseries/${content.id}`)}
              title={content.name ? content.name : "Title Not Found!"}
              description={content.overview ? content.overview : "Overview Not Found!"}
              posterImage={
                content.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${content.poster_path}`
                  : "https://placehold.co/400x600/png"
              }
              bannerImage={
                content.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${content.backdrop_path}`
                  : "https://placehold.co/700x400/png"
              }
            />
          ))}
      </div>
    </div>
  );
}

export default SearchTvSeries;
