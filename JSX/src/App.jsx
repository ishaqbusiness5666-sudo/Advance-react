import React from 'react'
import Header from './Header'


const App = () => {
    // let heros = ["iron man","spider man","Thore","Lokey"]
    // let name = "Ishaq"  
    // let age = 20
    // function getName() {
    //     return "I am muhammad ishaque"
    // }
    let varble =  <p>this is addition of two number {2+3}</p>
  return (
    <div>
        {/* <h2>Welcome to {name} <br /> {getName() } My App</h2>
     <p>lorem ipsum dolor sit amet </p>
     <p style={age>=20?{backgroundColor:"green",color:"white"}:{backgroundColor:"red",color:"white"
     }} >{age>=20?"you can drive":"you can't drive"}</p>
     <p>{age>=20&& "Congratation"}</p> */}
     {/* {heros.map((items,index)=>{
        return <p key={index} >{items}</p>
     })} */}

     {/* {varble} */}
     {/* <Header title ="ishaque"/>
     <Header title ={varble} /> */}
     {React.createElement('h1',{className:"heading",style:{backgroundColor:"red",}},'this is react element')}
     
    </div>
  )
}

export default App
