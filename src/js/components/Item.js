import React from 'react';
import {connect} from 'react-redux';

import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return { data: state.data.find((item, i) => Number(ownProps.match.params.id) - 1 == i) };
}

class Item extends React.Component {
    
    constructor(props) {
        super(props);

        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // static defaultProps = {
    //     data: { title: "Default", descr: "default", complete: true }
    // }

    handleComplete() {
        this.props.complete(this.props.index);
    }

    handleDelete() {
        this.props.delete(this.props.index);
    }

    componentWillReceiveProps() {
        console.log(this.props);
    }
    

    render() {
        //  console.log(this.props);
        let {data} = this.props;
        return (
            <div className="item">
                <h3>{data.title}</h3>
                <p>{data.descr}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Item);

// function connect(mapStateToProps, mapDispatchToProps) {
    
//     return function(WrappedComponent) {
//         // return class
//     }
// }

// console.log(<Item/>);