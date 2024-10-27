import Navbar from "./components/Navbar"

const App = () => {
    const data ={
        appname : "Hello"
    }

    const logodata = "mylogo"
    const test= "hello world"
  return (
   <>
     <p className ="text-pink-900">{test}</p>
      <Navbar appdata={data}  logo={logodata}/>

    </> 
  )
}

export default App