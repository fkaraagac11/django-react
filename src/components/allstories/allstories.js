import React, { useState, useEffect } from "react";
import "./allstories.css";
import logo from "../../logo.svg";

import axios from "axios";

function AllStories() {
    const FEATURED_API = "http://127.0.0.1:8000/";
    const [stories, setStories] = useState([]);

    const fetchStories = (API) => {
        axios
            .get(API)
            .then((res) => {
                setStories(res.data.files);
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchStories(FEATURED_API);
    }, []);

    return (
        <div className="cards">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            {stories.map((item) => {
                return (
                    <div className="container">
                        <div>
                            <img
                                className="photo"
                                src={item.photo}
                                // style={{
                                //     width: "80px",
                                //     height: "100px",
                                //     padding: "2px",
                                //     borderRadius: "10px",
                                // }}
                            />
                        </div>
                        {/* <div className="party">
                            <h2>Party: {item.party}</h2>
                        </div> */}
                        {/* <div className="billid">
                            <h5>BillID:{item.billid}</h5>
                        </div> */}
                        <div className="headline">
                            <h3>{item.headline}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AllStories;

// <div className="App">
// <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//         Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//         Learn React
//     </a>
// </header>
// </div>
