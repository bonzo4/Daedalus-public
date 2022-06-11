import React from 'react';


const { Provider, Consumer } = React.createContext();


class GlobalProvider extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider value = {{ ...this.state }}>
                { this.props.children }
            </Provider>  
        )
    }
}



export default GlobalProvider;