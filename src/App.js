import logo from "./logo.svg";

import "./App.css";
import Stories from "./components/allstories/allstories";

function App() {
    return (
        <div className="container">
            <Stories />
        </div>
    );
}

export default App;

{
    /* <Stories key={story.id} {...story} />; */
}

/* <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div> */

// const fetchStories = async (API) => {
//   setLoading(true);
//   const { data } = await axios.get(API);
//   console.log(data.results);
//   setStories(data.results);
//   console.log(stories);
//   setLoading(false);
// };
