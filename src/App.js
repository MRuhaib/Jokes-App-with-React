import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import JokesList from "./jokesList.js";

function App() {

  const [jokes, setJokes] = useState([]);

  const [isPending, setIsPending] = useState('');

  const newJoke = async () => {
    setIsPending(1)
    try{
      const response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
      if (response.status === 200) {
          console.log('all good da, The data has been successively fetched')
      } else {
          alert("Uh oh, looks like we couldn't get the joke :(")
      }
      const data = await response.json();
      //'spread' syntax?
      setJokes((prevJokes) => [...prevJokes, data]);
    } catch(err) {
        console.error(err);
      };
  }
  
  useEffect(() =>{
    setIsPending('');
    console.log('activated')
  },[jokes]);

  const handleDelete = (id) => {
    const newJoke = jokes.filter(joke => joke.id !== id);
    setJokes(newJoke);
  }

  return (
    
      <div className="App">
        <div className="addJoke">
          <h1>You can get new jokes here:</h1>
          <Link to=''>
          <button onClick={newJoke}>Click here to get a new joke!</button>
          </Link>
          <h1>You can view the jokes here:</h1>
        </div>
        <JokesList jokes = {jokes} handleDelete = {handleDelete}/>
        {isPending && <div><em>Fetching your joke...</em></div>}
      </div>
  );
}

export default App;
