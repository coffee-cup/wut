import React, { Component } from 'react';

import cool from 'cool-ascii-faces';

const unsplashUrl = 'https://source.unsplash.com/random';
const fadeInDelay = 2500;

const face = cool();

class Cover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            face
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                active: true,
                face
            });
        }, fadeInDelay);
    }

    render() {
        return (
            <div className="cover full bg-dark-gray gutter-small pa0 relative center-vertical">
                <div
                    className={[this.state.active ? 'active' : '', 'background', 'absolute'].join(' ')}
                    style={{
                        backgroundImage: 'url(' + unsplashUrl + ')'
                    }}>
                </div>

                <div className="title white tc w-100 vertical-center">
                    <h1 className="f-headline-ns f1 mv0">
                        {this.state.face}
                    </h1>
                </div>
            </div>
        );
    }
}

export default Cover;
