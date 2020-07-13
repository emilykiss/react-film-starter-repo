import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {
    const handleFilterClick = filter => {
      console.log(`Setting filter to ${filter}`)
    }

    const allFilms = this.props.films.map((film, i) => <FilmRow film={film} key={`filmRow-${i}`} />)

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className="film-list-filter">
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
          </div>
      </div>
  
      {allFilms}
    </div>
    );
  }
}

export default FilmListing;