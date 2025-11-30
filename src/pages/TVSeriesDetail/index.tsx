import { useParams } from "react-router-dom";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/Imagebanner";
import EpisodeItem from "./EpisodeItem";
import styles from "./index.module.css";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../constatnts";
import { useEffect, useState } from "react";

function TVSeriesDetail() {
  const { id } = useParams();
  const [activeSeason, setActiveSeason] = useState(null);
  const { data: tvSeriesData } = useFetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
  );
  const { data: seasonData } = useFetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${activeSeason}?api_key=${API_KEY}`
  );

  const genreMap = tvSeriesData?.genres
    ? tvSeriesData.genres.map((genre: any) => ({
        id: genre.id,
        name: genre.name,
      }))
    : [];

  useEffect(() => {
    if (tvSeriesData?.seasons?.length > 0 && activeSeason === null) {
      setActiveSeason(tvSeriesData.seasons[0].season_number);
    }
  }, [tvSeriesData]);

  return (
    <div>
      <ImageBanner
        src={`https://image.tmdb.org/t/p/original/${tvSeriesData?.backdrop_path}`}
        alt={tvSeriesData?.title}
      />
      <BannerDetail
        title={tvSeriesData?.name}
        overview={tvSeriesData?.overview}
        releaseDate={tvSeriesData?.first_air_date}
        language={tvSeriesData?.original_language}
        genres={genreMap}
      />
      <BannerMask>
        <h1 className={styles.seasonTitle}>Seasons</h1>
        <div className={styles.tabSection}>
          {tvSeriesData?.seasons?.map((seasonItem: any) => (
            <span
              data-active={seasonItem.season_number === activeSeason}
              onClick={() => setActiveSeason(seasonItem.season_number)}
              key={seasonItem.id}
            >
              {seasonItem?.name}
            </span>
          ))}
        </div>
        <div>
          {/* Episodes */}
          {seasonData?.episodes?.map((season: any) => (
            <EpisodeItem
            key={season.id}
              imageUrl={
                season.still_path
                  ? `https://image.tmdb.org/t/p/w500/${season.still_path}`
                  : "https://placehold.co/250x140/png"
              }
              title={season.name ? season.name : "Title not found!"}
              desc={season.overview ? season.overview : "Overview not found!"}
              date={season.air_date}
              episode={season.episode_number}
              season={season.season_number}
              duration={season.runtime ? `${season.runtime}m` : "??"}
            />
          ))}
        </div>
      </BannerMask>
    </div>
  );
}

export default TVSeriesDetail;
