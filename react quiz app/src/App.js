import { useState } from "react"
import QuestionAnswer from "./components/QuestionAnswer";
import { quizData } from "./data";
function App() {


  const [questionNum, setQuestionNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(0);
  const [counter, setCounter] = useState(15);

  const pyramidData = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 300 },
    { id: 4, amount: 400 },
    { id: 5, amount: 500 },
    { id: 6, amount: 600 },
    { id: 7, amount: 700 },
    { id: 8, amount: 800 },
    { id: 9, amount: 900 },
    { id: 10, amount: 1000 },
    { id: 11, amount: 1100 },
    { id: 12, amount: 1200 },
    { id: 13, amount: 1300 },
    { id: 14, amount: 1400 },
    { id: 15, amount: 1500 },
    { id: 16, amount: 1600 },
    { id: 17, amount: 1700 },
    { id: 18, amount: 1800 },



  ].reverse();



  return (
    <div className="app">
      <div className="main">
        {stop ? (<div className="earned">
          <h1 >You won :$ {earned}</h1>
        </div>) : (
          <>
            <div className="top">
              <div className="timer">{counter}</div>


            </div>
            <div className="bottom"><QuestionAnswer quizData={quizData} questionNum={questionNum}
              setQuestionNum={setQuestionNum} setStop={setStop} pyramidData={pyramidData}
              setEarned={setEarned} setCounter={setCounter} counter={counter}/></div>


          </>)}
      </div>


      <div className="pyramid">

        <ul className="moneyList">

          {pyramidData.map((data) => (

            <li className={questionNum=== data.id ? "moneyItem active" : "moneyItem"} >
              <span className="moneyItemNumber">{data.id}</span>
              <span className="moneyItemAmount">{data.amount}</span>
            </li>

          ))}













        </ul>

      </div>

    </div>
  );
}

export default App;
