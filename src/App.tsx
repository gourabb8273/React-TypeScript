import './App.css';

function App() {

  // //adding basic type typescript
  // let firstValue : string = 'Manny'
  // let firstNumber : number = 14;
  // let firstBoolean : boolean = true;
  // let firstNumberArray : number[] = [2,3,4];
  // let firstArrayNum : Array<number> = [ 2,4,5];
  // let firstArrayString : Array<string> = [ '22','44','55'];

  //adding tuple array having more data type like [string, number]
  let aTuple : [string, number] = ["Manny",30];

  // enum
  enum Codes { first =1, second =2 };

  // any (use rarely)
  // let firstName :any = "Manny";
    let firstName :any = 14;

  //void as return type of funtion if it doesnt return
  const warning = () : void =>{
  console.log("Warning");
  }



  return (
    <div className="App">
      <header className="App-header">    
         Hello World

        {/* //adding basic type */}
         {/* <h3> the value {firstValue} is of {typeof(firstValue)} type</h3>
         <h3> the value {firstNumber} is of {typeof(firstNumber)} type</h3>
         <h3> the value {firstBoolean} is of {typeof(firstBoolean)} type</h3>
         <h3> the value {firstNumberArray} is of {typeof(firstNumberArray)} type</h3>
         <h3> the value {firstArrayNum} is of {typeof(firstArrayNum)} type</h3>
         <h3> the value {firstArrayString} is of {typeof(firstArrayString)} type</h3> */}

         {/* //adding tuple */}
        <h3> the value {aTuple[0]} is of {typeof(aTuple[0])} type</h3>
        <h3> the value {aTuple[1]} is of {typeof(aTuple[1])} type</h3>

        
         {/* //adding any */}
         <h3> the value {firstName} is of {typeof(firstName)} type</h3>     
  

      </header>
    </div>
  );
}

export default App;
