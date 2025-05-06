import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieLister'
import './App.css'

function App() {
  useEffect(()=>{
    
  }, [])
  return (
    <>
      <SearchBar />
      <MovieList />
    </>
  )
}

export default App
