import React from 'react';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';
import {
    countActionCreator
} from './../actionCreators';

let CalculatorContainer,
    mapStateToProps,
    mapDispatchToActions;

CalculatorContainer = class extends React.Component {
    render () {
        return <div>
            <p>Sum {this.props.sum}</p>
            <button onClick={this.props.countAction.decrement}>Decrement</button>
            <button onClick={this.props.countAction.increment}>Increment</button>
        </div>;
    }
};

mapStateToProps = (state) => {
    return {
        sum: state.getIn(['count', 'sum'])
    };
};

mapDispatchToActions = (dispatch) => {
    return {
        countAction: bindActionCreators(countActionCreator, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToActions)(CalculatorContainer);
