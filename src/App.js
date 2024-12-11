import './App.css';
import { Routes, Route } from 'react-router-dom';
import Default from './layouts/default';
import Home from './pages/home';
import MovieDetail from './pages/movies/detail';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Default />}>
              <Route index path="/" element={<Home />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
            </Route>
         </Routes>
      </>
   );
};
 
export default App;