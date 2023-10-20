import { getAllMovies } from "@/data/movies";
import Link from "next/link";


const Moviepage = () => {
    const movies = getAllMovies();
    console.log(movies)

    const movie = movies.map((movie) => (
        <div key={movie.id}>
        <Link href={`/movies/${movie.id}`}>
            <img src={movie.poster} />
            <h3>{movie.title}</h3>
        </Link>
        </div>
        
    ))
    
    return (
        <div>
        <h1>Populära filmer</h1>
        {movie}
        </div>
    )
}

/*När vi klickar på en bild av filmen, vill vi komma
till en detalj sida, alltså ID för filmen- Den sidan

med titel igen, bild och lite text om filmen. */
export default Moviepage;