import './App.css';

function App() {

  //adding typescript
  let firstValue : string = 'Manny'
  let firstNumber : number = 14;
  let firstBoolean : boolean = true;
  let firstNumberArray : number[] = [2,3,4];
  let firstArrayNum : Array<number> = [ 2,4,5];
  let firstArrayString : Array<string> = [ '22','44','55'];

  return (
    <div className="App">
      <header className="App-header">    
         Hello World
         <h3> the value {firstValue} is of {typeof(firstValue)} type</h3>
         <h3> the value {firstNumber} is of {typeof(firstNumber)} type</h3>
         <h3> the value {firstBoolean} is of {typeof(firstBoolean)} type</h3>
         <h3> the value {firstNumberArray} is of {typeof(firstNumberArray)} type</h3>
         <h3> the value {firstArrayNum} is of {typeof(firstArrayNum)} type</h3>
         <h3> the value {firstArrayString} is of {typeof(firstArrayString)} type</h3>
      </header>
    </div>
  );
}

export default App;
