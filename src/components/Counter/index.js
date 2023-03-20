import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement, setStep} from '../../store/slices/counterSlice';

const Counter = (props) => {
    const {count, step, incrementCb, decrementCb, setStepCb} = props;
    console.log(props)

    return (
        <div>
            <p>Count: {count}</p>
            <label>
                Step: <input type="number" value={step} onChange={setStepCb} />
            </label>
            <button onClick={incrementCb}>Increment</button>
            <button onClick={decrementCb}>Decrement</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.count,
        step: state.step
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCb: () => dispatch(increment()),
        decrementCb: () => dispatch(decrement()),
        setStepCb: ({target: {value}}) => dispatch(setStep(value))
    }
}

// const withState = connect(mapStateToProps);

// const CounterWithState = withState(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
