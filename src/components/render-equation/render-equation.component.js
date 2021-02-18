import './render-equation.component.css';

const RenderEquation = ({coefficients}) => {

    return (
        <h2 className='equation'>
            {coefficients ? coefficients.a : 'a'}x<span className='power'>2</span> {coefficients && coefficients.b < 0 ? '-' : '+'} 
            {coefficients ? Math.abs(coefficients.b) : 'b'}x {coefficients && coefficients.c < 0 ? '-' : '+'} {coefficients ? Math.abs(coefficients.c) : 'c'} = 0
        </h2>
    )
}

export default RenderEquation;

