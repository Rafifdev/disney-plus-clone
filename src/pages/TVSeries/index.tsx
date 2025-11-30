import { useNavigate } from "react-router-dom";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/Imagebanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/SectionItem";
import useFetch from "../../hooks/useFetch";
import useGenres from "../../hooks/useGenre";
import { API_KEY } from "../../constatnts";
import useMapGenreidToName from "../../hooks/useMapGenreidToName";

function TvSeries() {
  const navigate = useNavigate();
  const { loading, data } = useFetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
  );
  const firstContent = data?.results?.[0] || {};
  const { genres } = useGenres();
  const genreNames = useMapGenreidToName(firstContent.genre_ids, genres)

  return (
    <div>
      <ImageBanner
        src={
          "https://image.tmdb.org/t/p/original/" + firstContent.backdrop_path
        }
        alt={firstContent.title || firstContent.name}
      />
      <BannerDetail
        title={firstContent.title || firstContent.name}
        overview={firstContent.overview}
        releaseDate={firstContent.release_date || firstContent.first_air_date}
        language={firstContent.original_language}
        genres={genreNames}
      />
      <BannerMask>
        <ScrollableSection title="Trending">
          {!loading &&
            data &&
            data.results.map((content: any) => (
              <SectionItem key={content.id}>
                <ContentCard
                  onClick={() => navigate(`/tvseries/${content.id}`)}
                  title={content.name}
                  description={content.overview}
                  posterImage={
                    "https://image.tmdb.org/t/p/w500/" + content.poster_path
                  }
                  bannerImage={
                    "https://image.tmdb.org/t/p/w500/" + content.backdrop_path
                  }
                />
              </SectionItem>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
}

export default TvSeries;
