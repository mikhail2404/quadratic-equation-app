import * as React from 'react';
import RenderEquation from './components/render-equation/render-equation.component';
import InputCoefficients from './components/input-coefficients/input-coefficients.component';
import SolveEquation from './components/solve-equation/solve-equation.component';
import './App.css';

function App() {
  const [coefficients, setCoefficients] = React.useState(null);
  const [showResult, setShowResult] = React.useState(false);

  const handleReset = () => {setCoefficients(null)}
  
  return (
    <div className="App">
      <InputCoefficients 
        onInputCoefficients = {
          coefficients => {
            setCoefficients(coefficients);
          }
        }
        onReset = {handleReset}
        onShowResult={()=>{setShowResult(false)}}
      />
      <RenderEquation coefficients = {coefficients}/>
      {coefficients && <SolveEquation coefficients = {coefficients} showResult={showResult} onShowResult={()=>{setShowResult(true)}}/>}
    </div>
  );
}

export default App;
