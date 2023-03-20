import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement, setStep} from '../../store/slices/counterSlice';

const Counter = (props) => {
    const {count, step, increment, decrement, setStep} = props;
    console.log(props)

    return (
        <div>
            <p>Count: {count}</p>
            <label>
                Step: <input type="number" value={step} onChange={({target: {value}}) => setStep(value)} />
            </label>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.count,
        step: state.step
    };
}

// v1
// function mapDispatchToProps(dispatch) {
//     return {
//         incrementCb: () => dispatch(increment()),
//         decrementCb: () => dispatch(decrement()),
//         setStepCb: ({target: {value}}) => dispatch(setStep(value))
//     }
// }

//v2
const mapDispatchToProps = {
    increment,
    decrement,
    setStep
}

// const withState = connect(mapStateToProps);

// const CounterWithState = withState(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
