import '../App.js';
import Hero from "../components/hero.js";
import { Link } from 'react-router-dom';
import Section from '../components/section.js';
import Movies from '../data/movies.json';
import Genres from '../data/genres.json';

function Popular(){
  const moviesData = Movies;
  const elData = moviesData.map((data,i) => {
    return (
      <div id='popular' className='group w-[49.2%] lg:w-[19.3%] h-[350px] bg-[#333] mb-4 text-[white] overflow-hidden rounded-lg relative cursor-pointer' key={i}>
        <div className='absolute transition-all bg-[#B22222] w-full h-full top-[100%] flex justify-center items-center group-hover:top-0'>
          <div>
            <p className='mb-4 w-[100%] mx-auto font-bold'>{data.Title}</p>
            <a href={data.Trailer} target='_blank' rel="noreferrer">
              <button className='bg-[#333] rounded py-2 px-9 hover:bg-[white] hover:text-[#333]'>Trailer</button>
            </a>
            <br></br>
            <Link to={'/movies/'+data.imdbID}>
              <button className='border border-[#fff] mt-2 rounded py-2 px-9'>More...</button>
            </Link>
          </div>
        </div>
        <img src={data.Poster} alt={data.Title} className='h-[70%] object-cover w-full' />
        <div className='py-3'>
          <h3 className='text-[19px] font-bold h-[60px] overflow-hidden w-[80%] mx-auto'>{data.Title}</h3>
          <p className='text-[12px]'>({data.Year})</p>
        </div>
      </div>
    )
  });
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between flex-wrap mt-[20px]'>
      {elData}
    </div>
  )
}

function Categories() {
  const genresData = Genres;
  const elData = genresData.map((data, i) => {
    return (
      <div key={i} className='min-w-[200px] text-center justify-center py-4 bg-[maroon] text-[14px] text-[white] flex items-center px-4 rounded-lg hover:bg-[black] cursor-pointer'>
        {data}
      </div>
    )
  });

  return(
    <div className='overflow-y-hidden overflow-x-scroll max-w-[1200px] w-full mx-auto'>
      <div className='w-[auto] flex mt-[20px] gap-2'>
        {elData}
      </div>
    </div>
  )
}

function App() {
  
  const popularSection = Popular();
  const exploreSection = Categories();
  return (
    <div className="App">
      <Hero />
      <main className='bg-[#222]'>
        <Section Title="Explore" Children={exploreSection}>
        </Section>
        <Section Title="Popular Movies" Children={popularSection}>
        </Section>
      </main>
    </div>
  );
}

export default App;
