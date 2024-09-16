import React from 'react';
import Student from './Components/Student/Student';
import StudentReview from './Components/Student/StudentReview';

class MainBody extends React.Component {
  render(){

    const projectName = "TaskOPedia";
    const lectureCount = 3
  
    return(
      <div style={{ minHeight: "70vh" }}>
      <p>Start of my {projectName} project</p>
      <p>Total Lecture - {lectureCount}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/*<div>
        Enter Task :{" "}
        <input maxLength={5} readOnly={false} placeholder='Zak'></input>
      </div>*/}
    <div className='container row'>Students Enrolled </div>
    <Student experience={2} name="Kris Walley"><StudentReview/></Student>
    <Student experience={5} name="Angel Patrice"><StudentReview/></Student>
    <Student experience={7} name="Rene Parker"><StudentReview/></Student>
    </div>
    );
  }
}
export default MainBody;