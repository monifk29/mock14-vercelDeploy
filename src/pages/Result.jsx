import React from 'react'

import styles from "../styles/Result.module.css"

const Result = () => {
    const correct = JSON.parse(localStorage.getItem("m14-correct"))
    const wrong = JSON.parse(localStorage.getItem("m14-incorrect"))
    const total = JSON.parse(localStorage.getItem("mock14"));

    let per = (correct/total.num) * 100
    // console.log(percentage)
  return (
    <div className={styles.container}>
        <h1>{`Number of Correct Answers :  ${correct}` }</h1>
        <br />
        <h1>{`Number of Wrong Answers :  ${wrong}` }</h1>
        <br />
        <h1>{`Total Percentage :  ${per}%`} </h1>
    </div>
  )
}

export default Result