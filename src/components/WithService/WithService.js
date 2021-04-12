import React from 'react';
import ServiceContext from '../ServiceContext/ServiceContext';

const WithService = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceContext.Consumer>
                {
                    (Service) => {
                        return <Wrapped {...props} service={Service}/>
                    }
                }
            </ServiceContext.Consumer>
        )
    };
};

export default WithService;