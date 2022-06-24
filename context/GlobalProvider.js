import React from 'react';

const { Provider, Consumer } = React.createContext();


class GlobalProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            portalRouteText: 'Dashboard',
            walletInfo: '',

            //Navigation
            subRoute: '',
            currentRoute: '',
            openDrawer: false,
        }
    }

    setCurrentSubRoute = (text) => {
        this.setState(() => ({
            subRoute: text
        }));
    }

    setCurrentRoute = (text) => {
        this.setState(() => ({
            currentRoute: text
        }))
    }

    setPortalTextRoute = (text) => {
        this.setState(() => ({
            portalRouteText: text
        }))
    }

    setDrawerActivity = () => {
        this.setState(() => ({
            openDrawer: !this.state.openDrawer
        }))
    }

    render() {
        return (
            <Provider 
                value = {{ 
                ...this.state,
                setPortalTextRoute: this.setPortalTextRoute,
                setDrawerActivity: this.setDrawerActivity,
                setCurrentRoute: this.setCurrentRoute,
                setCurrentSubRoute: this.setCurrentSubRoute
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