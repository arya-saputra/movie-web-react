import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieJSON from '../../data/movies.json';

function youtube_parser(link){
    if (!link) {
        return false;
    }

    const youtubeIdRegex =
        /^(?:(?:https|http):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be).*?(?:\/|v\/|u\/|embed\/|shorts\/|watch\?v=|(?<username>user\/))(?<id>[\w\-]{11})(?:\?|&|$)/;

    const match = link.match(youtubeIdRegex);

    // checks if 'user/' is located right before expected id, in which case it would return username instead
    if (match?.groups?.username || !match?.groups?.id) {
        return false;
    }

    return `https://www.youtube.com/embed/${match.groups.id}`;
    // return (match&&match[7].length==11)? `https://www.youtube.com/embed/${match[7]}` : false;
}

const Detail = () => {
    const { id } = useParams();
    const [ movie, setMovie ] = useState({});
    const movieData = movieJSON;

    useEffect(() => {
        const data = movieData.filter(item => item.imdbID === id)
        setMovie(data[0]);
    },[id]);
    // console.log(movie.Trailer);
    return(
        <div className='min-h-[89vh] bg-[#222]'>
            <div className='hero-section h-[65vh] relative overflow-hidden flex'>
                <div className='relative w-1/2 z-[120] p-3 flex items-center justify-center'>
                    <iframe className='w-[95%] h-[80%]' src={youtube_parser(movie.Trailer)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='relative w-1/2 z-[120] text-left text-white flex items-center justify-center'>
                    <div className='w-[60%]'>
                        <h3 className='text-[46px] font-[800]'>{movie.Title}</h3>
                        <h4 className='text-[12px] mt-[-3px]'>{movie.Year} | {movie.Genre}</h4>
                        <p className='mt-[4%] leading-[2em] w-[80%]'>{movie.Plot}</p>
                        <h4 className='text-[16px] font-bold mt-4'>{movie.Director}</h4>
                    </div>
                </div>
                <div className='bg-grad-1 h-full absolute z-[100] w-full top-0 right-0 flex items-center justify-end px-4 '>
                    
                </div>
                <img src={movie.Poster} alt={movie.Title} className='w-3/4 absolute left-0 top-0 z-[1]' />
            </div>
            <div className='detail-section py-[5%] text-white'>
                <h3 className='text-[32px] font-bold'>Movie Details</h3>

                <div className='flex mx-auto w-full max-w-[1200px] mt-[3%] gap-3'>
                    <div className='w-1/2'>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Director
                                        </th>
                                        <td class="px-6 py-4">
                                            {movie.Director}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Writer
                                        </th>
                                        <td class="px-6 py-4">
                                            {movie.Writer}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Casts
                                        </th>
                                        <td class="px-6 py-4">
                                            {movie.Actors}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Genre
                                        </th>
                                        <td class="px-6 py-4">
                                            {movie.Genre}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Year
                                        </th>
                                        <td class="px-6 py-4">
                                            {movie.Year}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Country
                                        </th>
                                        <td class="px-6 py-4">
                                            {movie.Country}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Language
                                        </th>
                                        <td class="px-6 py-4">
                                            {movie.Language}
                                        </td>
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Rating
                                        </th>
                                        <td class="px-6 py-4 flex items-center">
                                            <svg class="w-6 h-6 text-gray-800 dark:text-[gold]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                            </svg>
                                            <span className='ml-2'>{movie.imdbRating}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='w-3/4 flex overflow-x-scroll rounded'>
                        {
                            movie.Images? (
                                movie.Images.map((item) => {
                                    return (
                                        <img src={item} alt={movie.Title} className='w-[100%] object-cover'/>
                                    )
                                })
                            ):('')
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;