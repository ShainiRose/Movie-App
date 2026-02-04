import './App.css'
import MovieCard from './components/MovieCard'
import Home from './components/pages/Home'
function App() {
  //conditional rendering
  //const movieNumber = 1;
 


  return (
    <>
                                      {/*
                                    { movieNumber === 1 ? (
                                      <MovieCard movie={{ title: "Tims Film", release_date: "2024" }} />
                                    ) : (
                                      <MovieCard movie={{ title: "Joes Film", release_date: "2020" }} />
                                    )}
                                    */}

<Home></Home>


    </>
  )
}

export default App
// curl brace = this is a varible [] = object 
//Pass an empty JavaScript object as the movie prop to MovieCard , fist curly braces tells the this is a prop , second curl braces
//is object literal in js