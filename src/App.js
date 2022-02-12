import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
       title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}isLargeRow/>
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies}isLargeRow/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies}isLargeRow/>
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies}isLargeRow/>
      <Row title="Romance Movies" fetchUrl={requests.fetchTopRomanceMovies}isLargeRow/>
      <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries}isLargeRow/>
    </div>
  );
}

export default App;
