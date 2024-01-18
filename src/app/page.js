// export default function Home() {
//   return (
//     <div>
//       <h1>ANIMELIST</h1>
//     </div>
//   )
// }
import AnimeList from "@/app/components/AnimeList"

const home = () => {

  

  return (
    <div>
      <h1>Paling Populer</h1>
      <AnimeList/>
    </div>
  )
}

export default home