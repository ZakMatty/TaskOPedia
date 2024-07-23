import ReactDOM from 'react-dom/client';
import "./CSS/style.css"
import Header from './Header';
import Student from './Student';

const root = ReactDOM.createRoot(document.getElementById('root'));



function MainBody(){

  const projectName = "TaskOPedia";
  const lectureCount = 3

  return(
    <div>
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
  </div>
  );
}



function Footer(){
  return(
    <p style={{color:'gray', backgroundColor:'black'}}>Coding is fun</p>
  )
}

root.render(
  <div className='container'>
    <Header/>
    <MainBody/>
    <div className='row'>Students Enrolled </div>
    <Student experience={2} name="Kris Walley" />
    <Student experience={5} name="Angel Patrice" />
    <Student experience={7} name="Rene Parker" />
    <Footer />
  </div>
  
);
