import React from 'react';
import ScrollPos from '../facc/ScrollPos';

export default class FaccTest extends  React.Component {
    render() {
        return (
            <div>
                <div className="spacer"></div> 
                <ScrollPos>
                    {
                        position => <h1 className="position-info">{position}</h1>
                    }
                </ScrollPos>
                <div className="spacer"></div> 
            </div>
        )
    }
}