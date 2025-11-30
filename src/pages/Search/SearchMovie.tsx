import { useNavigate } from "react-router-dom";
import ContentCard from "../../components/ContentCard";
import styles from "./index.module.css"

function SearchMovie(data: any) {
    const navigate = useNavigate();
  return (
    <div>
      <h1 className={styles.title}>Movie</h1>
      <div className={styles.contentGrid}>
        {data.movieData?.results?.length > 0 &&
          data.movieData?.results.map((content: any) => (
            <ContentCard
              key={content.id}
              onClick={() => navigate(`/movie/${content.id}`)}
              title={content.title ? content.title : "Title Not Found!"}
              description={
                content.overview ? content.overview : "Overview Not Found!"
              }
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

export default SearchMovie;
