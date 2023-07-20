import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Punchline from "./punchline.js";

const JokesList = ({jokes, handleDelete}) => {
    
    return ( 
        
        <div className="viewJoke">
            {jokes.map((joke) => (
            <div className="jokePreview" key={joke.id}>
                <h2>{joke.setup}</h2>
                <Router>
                    <Switch>
                        <Route exact path= {`/:${joke.id}`}>
                            <Punchline punchline = {joke.punchline}  />
                        </Route>
                    </Switch>
                    <Link to={`/:${joke.id}`}>
                        <button>{'View punchline!'}</button>
                    </Link>
                </Router>
                <br></br>
                <button onClick={() => handleDelete(joke.id)}>🗑️</button>
            </div>
        ))}
        </div>             
    );
}
 
export default JokesList;