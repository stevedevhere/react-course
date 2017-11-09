import React from 'react';
import ScrollPos from './facc/ScrollPos';
import './App.scss';

const App = props => (
    <div className="wrapper">
       <div className="spacer"></div> 
        <ScrollPos>
            {
                position => <h1 className="position-info">{position}</h1>
            }
        </ScrollPos>
       <div className="spacer"></div> 
    </div>
) 

export default App;