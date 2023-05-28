import React, { useState } from "react";
import "../styles/App.css";
import star from "../star.png";
const App = () => {
    const [count, setCount] = useState(300);

    return (
        <div id="main">
            <img
                src={star}
                height={`${count}px`}
                width={`${count}px`}
                onClick={() => setCount(count + 2)}
            />
        </div>
    );
};

export default App;
