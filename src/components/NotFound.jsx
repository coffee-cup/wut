import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="not-found bg-dark-gray center-vertical full w-100">
                <div className="tc animated fadeIn w-100">
                    <h1 className="f-headline-ns f1 mv0 white mono">
                        {'¯\_(ツ)_/¯'}
                    </h1>
                    <h2 className="f2 mb0 white">
                        404. <a className="hover-red" href="/"> Go home.</a>
                    </h2>
                </div>
            </div>
        );
    }
}

export default App;

