import React, { useState, useEffect } from "react";
import instance from "./axios";
import "./Row.css"

const img_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
        //combines the baseURL from axios.js with the fetchURL value from App.js
      const request = await instance.get(fetchURL); 
      console.log(request);
      //sets movies to whatever data is in the JSON file
      setMovies(request.data.results);
      return request;
    }
    fetchData();

    //fetchURL is a dependacy, runs again on change
  }, [fetchURL]);

  return (
    <div className="movies">
      {/*titles*/}
      <h2>{title}</h2>

      {/* containers for posters */}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster_img"
            src={`${img_base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
