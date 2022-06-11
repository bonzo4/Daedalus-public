import React from 'react';
import Button from '@/components/shared/Button';

class ErrorBoundary extends React.Component<any, any> {
    constructor(props:any) {
        super(props);

        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error:any) {
        return { 
            hasError: true,
            error
        }
    }

    render() {
        if (this.state.hasError) 
        {
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <Button
                        click={() => this.setState({ hasError: false })}>
                        Try again?
                    </Button>
              </div>
            )
        } else {
            return ( 
                <>
                    { this.props.children }
                </>
            )
        }
    }

}

export default ErrorBoundary;