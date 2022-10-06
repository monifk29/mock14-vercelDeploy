import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio, RadioGroup, VStack, Button } from "@chakra-ui/react";
import { getData } from "../redux/action";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const ques = useSelector((state) => state.ques.results);
  const [value, setValue] = React.useState("1");

  const [count,setCount] = useState(1)
  const [inCount,setIncount] = useState(1)

  const dispatch = useDispatch();

  const nav = useNavigate()

  console.log(ques);

  var localData = JSON.parse(localStorage.getItem("mock14"));

  console.log(localData);

  const [num, setNum] = useState(1);

  const handleClick = () => {


    if(value == ques[0].correct_answer)
    {
        alert("Congrats,Your Ans is CORRECT")
        setCount(count+1)
        localStorage.setItem("m14-correct",JSON.stringify(count))
    }
    else{
        alert("YOUR ANSWER IS INCORRECT")
        setIncount(inCount + 1)
        localStorage.setItem("m14-incorrect",JSON.stringify(count))

    }



    setNum(num + 1);
    if (num < localData.num) {
      dispatch(getData(localData.cat, localData.dif));
    } else {
      var x = document.getElementById("sub");
      x.innerHTML = "Submit";
      x.addEventListener("click",handleSubmit)
    }
  };


const handleSubmit = () => {
  nav("/results")
}


  return (
    <div>
      {ques?.map((e) => (
        <div>
          <h2 style={{ fontSize: "x-large" }}>{e.category}</h2>
          <p
            style={{
              marginTop: "15px",
              marginBottom: "40px",
              fontSize: "large",
              fontWeight: "600",
            }}
          >
            Question : {e.question}
          </p>

          <div style={{ fontSize: "medium", fontWeight: "400" }}>
            <RadioGroup onChange={setValue} value={value}>
              <VStack>
                <Radio value={e.incorrect_answers[0]}>{e.incorrect_answers[0]}</Radio>
                <Radio value={e.incorrect_answers[1]}>{e.incorrect_answers[1]}</Radio>
                <Radio value={e.correct_answer}>{e.correct_answer}</Radio>
                <Radio value={e.incorrect_answers[2]}>{e.incorrect_answers[2]}</Radio>
              </VStack>
            </RadioGroup>
          </div>
        </div>
      ))}

      <Button marginTop="25px" variant="outline" padding = {"20px"}  id="sub" onClick={handleClick}>
        Next
      </Button>
    </div>
  );
};

export default Quiz;
