import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import cx from 'classnames';
import {increment, decrement, setStep} from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import styles from './Counter.module.scss'
import CONSTANTS from '../../constants';

const {LANGUAGE: {EN_US, UA_UA, DE_DE}, LANGUAGE, THEMES} = CONSTANTS;

const translations = new Map([
    [
        EN_US.VALUE,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement'
        }
    ],
    [
        UA_UA.VALUE,
        {
            countText: 'Рахунок',
            stepText: 'Крок',
            incrementText: 'Інкремент',
            decrementText: 'Декремент'
        }
    ],
    [
        DE_DE.VALUE,
        {
            countText: 'Punktzahl',
            stepText: 'Schritt',
            incrementText: 'Zuwachs',
            decrementText: 'Dekrementieren'
        }
    ]
])

const Counter = (props) => {
    // const {count, step, language, theme, increment, decrement, setStep, setLang} = props;
    const language = useSelector((state) => state.lang);
    const theme = useSelector((state) => state.theme);
    const {count, step} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const actionCreators = bindActionCreators(
        {setLang, setStep, increment, decrement},
        dispatch)

    console.log(props)

    const translation = translations.get(language);
    const {countText, stepText, incrementText, decrementText} = translation;

    const className = cx({
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    })

    return (
        <div className={className}>
            <select value={language} onChange={({target: {value}}) => actionCreators.setLang(value)} >
                {Object.values(LANGUAGE).map((langObj) => 
                    <option key={langObj.VALUE} value={langObj.VALUE}>{langObj.OPTION_TEXT}</option>
                )}
            </select>
            <p>{countText}: {count}</p>
            <label>
                {stepText}: <input type="number" value={step} onChange={({target: {value}}) => actionCreators.setStep(value)} />
            </label>
            <button onClick={() => actionCreators.increment()}>{incrementText}</button>
            <button onClick={() => actionCreators.decrement()}>{decrementText}</button>
        </div>
    );
}

// function mapStateToProps(state) {
//     return {
//         ...state.counter,
//         language: state.lang,
//         theme: state.theme
//     };
// }

// v1
// function mapDispatchToProps(dispatch) {
//     return {
//         incrementCb: () => dispatch(increment()),
//         decrementCb: () => dispatch(decrement()),
//         setStepCb: ({target: {value}}) => dispatch(setStep(value))
//     }
// }

//v2
// const mapDispatchToProps = {
//     increment,
//     decrement,
//     setStep,
//     setLang
// }

// const withState = connect(mapStateToProps);

// const CounterWithState = withState(Counter);

export default Counter;
