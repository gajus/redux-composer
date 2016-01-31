import React from 'react';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';
import mapActionsToProps from './../mapActionsToProps';

let CalculatorContainer,
    mapStateToProps;

CalculatorContainer = class extends React.Component {
    render () {
        return <div>
            <div>
                <p>Sum: {this.props.sum}</p>
                <button onClick={this.props.CountActionCreator.decrement}>Decrement</button>
                <button onClick={this.props.CountActionCreator.increment}>Increment</button>
            </div>
            <div>
                <p>Current name: {this.props.currentName}</p>
                <input type='text' name='currentName' onChange={(event) => {
                    this.props.NameActionCreator.change(event.target.value);
                }} />
            </div>
        </div>;
    }
};

mapStateToProps = (state) => {
    return {
        sum: state.getIn(['count', 'sum']),
        currentName: state.getIn(['name', 'currentName'])
    };
};

export default connect(mapStateToProps, mapActionsToProps)(CalculatorContainer);
