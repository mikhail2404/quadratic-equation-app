import * as React from 'react';
import './input-coefficients.component.css';

export default function InputCoefficients(props) {
    const {onInputCoefficients, onReset, onShowResult} = props;
    function handleSubmitCoefficients(event) {
        event.preventDefault();
        const {a, b, c } = event.target;
        onInputCoefficients(
            {
                a: +a.value,
                b: +b.value,
                c: +c.value
            }
        )
        onShowResult();
    }

    return (
        <form onSubmit={handleSubmitCoefficients} className='form-container' onReset={onReset}>
            <h4>Input coefficients of the equation: </h4>
            <div>
                <label htmlFor="coefficientA">Coefficient <strong>a</strong>: </label>
                <input type="number" id='coefficientA' defaultValue={1} name='a'/>
            </div>
            <div>
                <label htmlFor="coefficientB">Coefficient <strong>b</strong>: </label>
                <input type="number" id='coefficientB' defaultValue={1} name='b'/>
            </div>
            <div>
                <label htmlFor="coefficientC">Coefficient <strong>c</strong>: </label>
                <input type="number" id='coefficientC' defaultValue={1} name='c'/>
            </div>
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
        </form>
    )
}