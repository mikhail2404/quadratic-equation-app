import React from 'react';

export default function SolveEquation({coefficients, showResult, onShowResult}) {
    const [solutions, setSolutions] = React.useState(null);

    const solveEquation = () => {
        const {a, b, c} = coefficients;
        const d = b*b - 4*a*c;
        if (d === 0) {
            setSolutions(
                {
                    descriminant: d, 
                    x1: -b/2*a, 
                    x2:null
                }
            )
        } else if (d > 0) {
            setSolutions(
                {
                    descriminant: d,
                    x1: (-b+Math.sqrt(d))/2*a,
                    x2: (-b-Math.sqrt(d))/2*a
                }
            )  
        } else { setSolutions({descriminant: d}) }
        onShowResult();
    } 

    return (
        <>
            <button onClick={solveEquation}>Solve this quadratic equation</button>
            {(solutions && showResult) && <h2>Solutions: {
                solutions.descriminant < 0 
                ? 'there is no solution...' 
                : solutions.descriminant === 0 
                    ? `x = ${solutions.x1}` 
                    : `x1= ${solutions.x1}, x2= ${solutions.x2}`
                }</h2>
            }
        </>
    )
} 
      