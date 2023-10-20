import {useRouter} from 'next/router'
import { getMovie } from '@/data/movies';

const MovieDetailsPage = () => {
    const router = useRouter();
    console.log(router.pathname)
    console.log(router.query)

    const movieId = router.query.movieId;
    const movie = getMovie(parseInt(movieId));
    // const { poster, title, overview } = movie;

    return (
        <div>
            <h1>Filmens information</h1>
            <div>
                <img src={movie.poster}/>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetailsPage;