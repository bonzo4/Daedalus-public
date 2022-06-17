import React from 'react';


const { Provider, Consumer } = React.createContext();


class GlobalProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            portalRouteText: 'Dashboard',
            walletInfo: ''
        }
    }

    setPortalTextRoute = (text) => {
        this.setState(() => ({
            portalRouteText: text
        }))
    }

    render() {
        return (
            <Provider 
                value = {{ 
                ...this.state,
                setPortalTextRoute: this.setPortalTextRoute
             }}>
                { this.props.children }
            </Provider>  
        )
    }
}

// eslint-disable-next-line react/display-name
export const withGlobalProvider = (Component) => (props) => (
    <Consumer>
        {
            (value) => <Component {...props} {...value} />
        }
    </Consumer>
) 

export default GlobalProvider;