
import {useState, useEffect} from 'react';

function App() {
  const variablesX = [];
  const variablesY = [];
  const [degree, setDegree] = useState();
  const [x0, setX0] = useState();
  const [x1, setX1] = useState();
  const [x2, setX2] = useState();
  const [x3, setX3] = useState();
  const [y0, setY0] = useState();
  const [y1, setY1] = useState();
  const [y2, setY2] = useState();
  const [y3, setY3] = useState();
  const [fx, setFx] = useState();
  const [answer, setAnswer] = useState('0');
  const [equation, setEquation] = useState('');
  
  useEffect(() => {}, [degree])
  useEffect(() => {}, [answer])
    
  const sDegree = (e) => {
    e.preventDefault()
    setDegree(e.target.value)
    if(degree === "Linear") {generateL()}
    if(degree === "Quadratic") {generateQ()}
    if(degree === "Cubic") {generateC()}
  }

  
  const generateL = () => {
    if(degree === "Linear"){
      return(
        <>
        <form onSubmit={calculateL}>
        <label>x0: </label>
        <input type='float' step="any" required value={x0} onChange={(e) => setX0(parseFloat(e.target.value))}></input>
        <label>y0: </label>
        <input type='float' step="any" required value={y0} onChange={(e) => setY0(parseFloat(e.target.value))}></input>
        <br /><label>x1: </label>
        <input type='number' step="any" required value={x1} onChange={(e) => setX1(parseFloat(e.target.value))}></input>
        <label>y1: </label>
        <input type='number' step="any" required value={y1} onChange={(e) => setY1(parseFloat(e.target.value))}></input>
        <br /><label>F(?):</label>
        <input type='number' step="any" required value={fx} onChange={(e) => setFx(parseFloat(e.target.value))}></input>
        <button>Calculate</button>
        </form>
        </>
      )
    }
  }

  const calculateL = (e) => {
    e.preventDefault()
    const equationL = 'f(x0) + (f(x0,x1)*(x-x0)'
    setEquation(equationL)
    const fill = fx;
    console.log('fx: ' + fill.toString())
    console.log('y0: ' + y0.toString())
    console.log('y1: ' + y1.toString())
    console.log('x0: ' + x0.toString())
    console.log('x1: ' + x1.toString())
    const fx0x1 = ((y1 - y0)/(x1 - x0))
    console.log('fx0x1: '+fx0x1.toString())
    const answerL = (y0 + ((fx0x1)*(fill-x0)))
    setAnswer(answerL)
  }

  const generateQ = () => {
    if(degree === "Quadratic"){
      return(
        <>
        <form onSubmit={calculateQ}>
        <label>x0: </label>
        <input type='number' required value={x0} onChange={(e) => setX0(parseFloat(e.target.value))}></input>
        <label>y0: </label>
        <input type='number' required value={y0} onChange={(e) => setY0(parseFloat(e.target.value))}></input>
        <br /><label>x1: </label>
        <input type='number' required value={x1} onChange={(e) => setX1(parseFloat(e.target.value))}></input>
        <label>y1: </label>
        <input type='number' required value={y1} onChange={(e) => setY1(parseFloat(e.target.value))}></input>
        <br /><label>x2: </label>
        <input type='number' required value={x2} onChange={(e) => setX2(parseFloat(e.target.value))}></input>
        <label>y2: </label>
        <input type='number' required value={y2} onChange={(e) => setY2(parseFloat(e.target.value))}></input>
        <br /><label>F(?):</label>
        <input type='number' required value={fx} onChange={(e) => setFx(parseFloat(e.target.value))}></input>
        <br /><button>Calculate</button>
        </form>
        </>
      )
    }
  }

  const calculateQ = (e) => {
    e.preventDefault()
    const fill = fx
    const fx0x1 = ((y1 - y0 )/(x1 - x0))
    const fx1x2 = ((y2 - y1)/(x2 -x1))
    const fx0x1x2 = ((fx1x2 - fx0x1) / (x2 - x0))
    const answerQ = (y0 + ((fx0x1)*(fill-x0)) + ((fx0x1x2)*(fill-x0)*(fill-x1)))
    const equationQ = 'f(x0) + (f(x0,x1)*(x-x0) + (f(x0,x1,x2)*(x-x0)*(x-x1))'
    setEquation(equationQ)
    setAnswer(answerQ)
  }

  const generateC = () => {
    if(degree === "Cubic"){
      return(
      <>
        <form onSubmit={calculateC}></form>
        <label>x0: </label>
        <input type='text' required value={x0} onChange={(e) => setX0(e.target.value)}></input>
        <label>y0: </label>
        <input type='text' required value={y0} onChange={(e) => setY0(e.target.value)}></input>
        <br /><label>x1: </label>
        <input type='text' required value={x1} onChange={(e) => setX1(e.target.value)}></input>
        <label>y1: </label>
        <input type='text' required value={y1} onChange={(e) => setY1(e.target.value)}></input>
        <br /><label>x2: </label>
        <input type='text' required value={x2} onChange={(e) => setX2(e.target.value)}></input>
        <label>y2: </label>
        <input type='text' required value={y2} onChange={(e) => setY2(e.target.value)}></input>
        <br /><label>x3: </label>
        <input type='text' required value={x3} onChange={(e) => setX3(e.target.value)}></input>
        <label>y3: </label>
        <input type='text' required value={y3} onChange={(e) => setY3(e.target.value)}></input>
        <br /><label>F(?):</label>
        <input type='number' required value={fx} onChange={(e) => setFx(parseFloat(e.target.value))}></input>
        <br /><button>Calculate</button>
        </>
      )
    }
  }

  const calculateC = (e) => {
    e.preventDefault()
    const fill = fx
    const fx0x1 = ((y1 - y0)/(x1 - x0))
    const fx1x2 = ((y2 - y1)/(x2 - x1))
    const fx2x3 = ((y3 - y2)/(x3 - x2))
    const fx0x1x2 = ((fx1x2 - fx0x1) / (x2 - x0))
    const fx1x2x3 = ((fx2x3 - fx1x2) / (x3 - x1))
    const fx0x1x2x3 = ((fx1x2x3 - fx0x1x2)/(x3 - x0))
    const answerC = (y0 + (fx0x1*(fill-x0)) + (fx0x1x2*(fill-x0)*(fill-x1)) + (fx0x1x2x3*(fill-x0)*(fill-x1)*(fill-x2)))
    const equationC = 'f(x0) + (f(x0,x1)*(x-x0)) + (f(x0,x1,x2)*(x-x0)*(x-x1))+ (f(x0,x1,x2,x3)*(x-x0)*(x-x1)*(x-x2))'
    setEquation(equationC)
    setAnswer(answerC)
  }
  return (
    <>
    <label>Netwon Divided Difference Interpolation</label>
    <br /><label>Degree: </label>
    <select onChange={sDegree}>
      <option>Select an Option...</option>
      <option>Linear</option>
      <option>Quadratic</option>
      <option>Cubic</option>
    </select><br />
      <div>{degree ? generateC() : ""}</div>
      <div>{degree ? generateQ() : ""}</div>
      <div>{degree ? generateL() : ""}</div>
      The equation for the {degree} formula is {equation}.
      <br />The answer of f({fx}) is {answer}.
    </>
  );
}
export default App;
