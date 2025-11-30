import { useNavigate, useParams } from "react-router-dom";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/Imagebanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/SectionItem";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../constatnts";

function MovieDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  const { data: similarMoviesData } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
  );

  const genreMap = data?.genres
    ? data.genres.map((genre: any) => ({
        id: genre.id,
        name: genre.name,
      }))
    : [];

  return (
    <div>
      <ImageBanner
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
        alt={data?.title}
      />
      <BannerDetail
        title={data?.title}
        overview={data?.overview}
        releaseDate={data?.release_date}
        language={data?.original_language}
        genres={genreMap}
      />
      <BannerMask>
        <ScrollableSection title="Similar Movies">
          {similarMoviesData?.results?.length > 0 &&
            similarMoviesData?.results?.map((item: any) => (
              <SectionItem key={item.id}>
                <ContentCard
                onClick={() => navigate(`/movie/${item.id}`)}
                  title={item.title || "Title Not Found!"}
                  description={item.overview}
                  posterImage={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                      : "https://placehold.co/400x600/png"
                  }
                  bannerImage={
                    item.backdrop_path ?
                    `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                    : "https://placehold.co/700x400/png"
                  }
                />
              </SectionItem>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
}

export default MovieDetail;
