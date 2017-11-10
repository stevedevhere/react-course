import React from 'react';
import ScrollPos from '../HOC/ScrollPos';

@ScrollPos
export default class FaccTest extends  React.Component {
    render() {
        return (
            <div>
                <div className="spacer"></div> 
                <h1 className="position-info">{this.props.position}</h1>
                <div className="spacer"></div> 
            </div>
        )
    }
}