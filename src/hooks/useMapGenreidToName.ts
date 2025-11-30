interface GenreItem {
  id: number;
  name: string;
}

function useMapGenreidToName(genreId: number[] = [], genres: GenreItem[] = []) {
  const genreMap = genreId?.map((genreId: number) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return {
      name: genre?.name || "",
      id: genre?.id
    };
  });

  return genreMap;
}

export default useMapGenreidToName;
