import React from 'react';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';
import mapStoreActions from './../mapStoreActions';

let CalculatorContainer,
    mapStateToProps;

CalculatorContainer = class extends React.Component {
    render () {
        return <div>
            <p>Sum {this.props.sum}</p>
            <button onClick={this.props.CountActionCreator.decrement}>Decrement</button>
            <button onClick={this.props.CountActionCreator.increment}>Increment</button>
        </div>;
    }
};

mapStateToProps = (state) => {
    return {
        sum: state.getIn(['count', 'sum'])
    };
};

export default connect(mapStateToProps, mapStoreActions)(CalculatorContainer);
