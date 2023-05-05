import { useEffect } from "react";
import { useState } from "react";
import useSound from "use-sound";
import play from "../resource/play.mp3";
import wait from "../resource/wait.mp3";
import wrong from "../resource/wrong.mp3";
import correct from "../resource/correct.mp3";


function QuestionAnswer({ quizData, questionNum, setQuestionNum, setStop, pyramidData, setEarned, setCounter, counter }) {

  const [question, setQuestion] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [classname, setClassname] = useState("answer")
  const [letsPlay] = useSound(play);
  const [correctAns] = useSound(correct);
  const [letswait] = useSound(wait);
  const [wrongAns] = useSound(wrong);







  useEffect(() => {
    if (counter === 0) {
      wrongAns();
      console.log(counter)
      setStop(true)

    };

    setQuestion(quizData[questionNum - 1])

    const timeout = setInterval(() => {
      
      setCounter((prev) => prev - 1)
      letswait();
    }, 1000)

    return () => {
      clearInterval(timeout)
    };


  }, [quizData, questionNum, counter])


  const timer = (delay, callback) => {
    setTimeout(() => { callback() }, delay);
  }













  const handleClick = (quiz) => {
    setSelectedQuestion(quiz.ans);
    timer(1000, () =>
      setClassname(quiz.correct ?
        "answer correct" : "answer wrong"));
    timer(2000, () => {
      if (quiz.correct) {
        correctAns();
      }
      else {

        wrongAns();
      }

    })
    timer(8000, () => {
      if (quiz.correct) {
     
        setQuestionNum(prev => prev + 1);

        setEarned(prev => prev + (pyramidData[pyramidData.length - questionNum].amount))

        setCounter(15)
        setSelectedQuestion(null)
      } else {
        setStop(true)
      }

    }


    );






  }

  return (
    <div className="qa">
      <div className="questions">{question?.questionIs}</div>
      <div className="answers">
        {question?.answers.map((quiz) => (
          <div onClick={() => handleClick(quiz)} className={selectedQuestion === quiz.ans ?
            classname : "answer"}>{quiz.ans}</div>)
        )}
      </div>

    </div>
  )
}

export default QuestionAnswer
