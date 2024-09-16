import logo from "../images/react.png"

function MainHeader(){
    return(
      <div className="pt-2 py-1 pl-2" style={{backgroundColor:"black"}}>
        <img src={logo} alt="react logo" style={{height:"35px", verticalAlign:"top"}}></img>
        <span className="h2 pt-4 text-white-50">TaskOPedia</span>
      </div>
    )
  }
  
  const subHeaderStyle={
    color:"blueviolet",
    backgroundColor:"lightgray"
  }
  
  function SubHeader(){
    return (<p style={subHeaderStyle} className="text-center">this is an exciting project</p>)
  }
  
 const Header = () => {
  return(
    <div>
    <MainHeader/>
    <SubHeader/>
    </div>
  )
  }
export default Header;