import React, { useState } from "react";

import { Input, Box, VStack,Heading } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const ques = useSelector((state) => state);
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [cat, setCat] = useState();
  const [dif, setDif] = useState();
  const [num, setNum] = useState();

  const mock14local = {
    name,
    cat,
    dif,
    num,
  };

  const handleSubmit = async () => {
    // console.log(name,cat,dif,num);


    await dispatch(getData(cat, dif));

    localStorage.setItem("mock14",JSON.stringify(mock14local));
    nav("/quiz");
  };

  // console.log(ques)

  return (
    <div>
      <Box width="60%" margin="auto" marginTop="50px" padding = "50px">

      <Heading color="teal" size = 'lg'>Set Up Your Quiz</Heading>
      <br/>
        <VStack spacing="20px">
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <Select
            placeholder="Select Category"
            onChange={(e) => {
              setCat(e.target.value);
            }}
          >
            <option value="9">General Knowledge</option>
            <option value="22">Geography</option>
            <option value="21">Sports</option>
          </Select>

          <Select
            placeholder="Select Difficulty"
            onChange={(e) => {
              setDif(e.target.value);
            }}
          >
            <option value="hard">Hard</option>
            <option value="easy">Easy</option>
          </Select>

          <Input
            type="number"
            placeholder="No. of questions"
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />

          <Button onClick={handleSubmit} colorScheme="teal">
            Start Quiz
          </Button>
        </VStack>
      </Box>
    </div>
  );
};

export default Home;
