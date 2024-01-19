// export default function Home() {
//   return (
//     <div>
//       <h1>ANIMELIST</h1>
//     </div>
//   )
// }
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      <section>
        <Header
          title={`Paling Populer`}
          linkHref={`Lihat Semua`}
          linkTitle={`/populer`}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
