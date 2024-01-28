// export default function Home() {
//   return (
//     <div>
//       <h1>ANIMELIST</h1>
//     </div>
//   )
// }
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "Limit=8");
  const recomendedAnime = await getNestedAnimeResponse("recomendations/anime", "entry")
  console.log(recomendedAnime)

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
