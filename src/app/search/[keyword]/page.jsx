import AnimeList from "../../../components/AnimeList";
import Header from "../../../components/AnimeList/Header";
import { getAnimeResponse } from "../../../libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;

  const decodeKeyword = decodeURI(keyword);

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  // );
  // const searchAnime = await response.json();

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
