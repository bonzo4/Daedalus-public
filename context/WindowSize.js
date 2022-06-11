import React from 'react';

const { Consumer, Provider } = React.createContext();

class WindowSize extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            innerWidth: 0,
            innerHeight: 0,
        }
    }


    windowSizeInit = () => {
        window.addEventListener("resize", this.setInnerWidthHeight);
    }

    windowSizeUnregister = () => {
        window.removeEventListener("resize", this.setInnerWidthHeight);
    }


    setInnerWidthHeight = () => {
        if (window) {
            this.setState({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        }
    }


    render() {
        return (
            <Provider value={{
                ...this.state,
                windowSizeInit: this.windowSizeInit,
                windowSizeUnregister: this.windowSizeUnregister
            }}>
                {this.props.children}
            </Provider>
        )
    }
}


// eslint-disable-next-line react/display-name
export const withWindowSize = (Component) => (props) => (
    <Consumer>
        {
            (value) => <Component {...props} {...value} />
        }
    </Consumer>
) 

export default WindowSize;