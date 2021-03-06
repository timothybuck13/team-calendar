import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// views
import Main from "./views/Main";
import SignUp from "./views/Signup";

const styles = {
    appWrapper: {
        // display: "flex",
    },
    view: {
        // padding: "20px",
    }
};

const Test = () => (<h1>This is a test view</h1>)

const App = () => {
    return (
        <Router>
            <div style={styles.appWrapper}>
                <div style={styles.view}>
                    <Route path="/" component={SignUp} />
                    <Route exact path="/app" component={Main} />
                    <Route path="/test" component={Test} />
                </div>
            </div>
        </Router>
    );
}

export default App;