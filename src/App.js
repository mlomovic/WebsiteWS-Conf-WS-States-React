import { useState, useEffect } from 'react';
import Pretraga from './Components/Pretraga/Pretraga';
import Filmovi from './Components/Filmovi/Filmovi';
import Odabrani from './Components/Odabrani/Odabrani';

const App = () => {

  const [searchString, setSearchString] = useState('');
  const [film, setFilm] = useState([]);
  const [odabraniFilm, setOdabraniFilm] = useState([]);
  const [strana, setStrana] = useState(1);


  useEffect(() => {
    getData();
    // console.log(film);
  }, [searchString, odabraniFilm]);


  const getData = () => {
    if (searchString !== '') {

      fetch(`http://www.omdbapi.com/?apikey=e46964fb&s=${searchString}&page=${strana}`)
        .then((res) => res.json())
        .then((data) => {
          setFilm(data.Search);

        })
        .catch(err => console.log(err));

    }
    else {
      setFilm([]);
    }
  }


  return (
    <>
      <Pretraga setSearchString={setSearchString} />

      <hr />

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">

            <Filmovi film={film} odabraniFilm={odabraniFilm} setOdabraniFilm={setOdabraniFilm} />

          </div>

          <div class="col-md-4">

            <Odabrani odabraniFilm={odabraniFilm} setOdabraniFilm={setOdabraniFilm} />

          </div>

        </div>
      </div>


    </>
  );
}

export default App;


