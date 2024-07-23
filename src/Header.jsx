function MainHeader(){
    return(
      <h1 className='heading1'>TaskOPedia</h1>
    )
  }
  
  const subHeaderStyle={
    color:"blueviolet",
    backgroundColor:"lightgray"
  }
  
  function SubHeader(){
    return (<p style={subHeaderStyle}>this is an exciting project</p>)
  }
  
  export default function Header(){
  return(
    <div>
    <MainHeader/>
    <SubHeader/>
    </div>
  )
  }
