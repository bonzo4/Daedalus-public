import React from 'react';


const { Provider, Consumer } = new React.createContext();


class ModalProvider extends React.Component {
    constructor (props) {
        super(props);
        this.state = [];
    }

    render() {
        return (
            <Provider value = {{ ...this.state }}>
                { this.props.children }
            </Provider>   
        )
    }
}


export default ModalProvider

