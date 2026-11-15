import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <p >header</p>
      <img className='img' src="https://cdn-icons-png.flaticon.com/512/1804/1804486.png" alt="link image" />
    </div>
  )
}
function Card(){
    return(
        <>
        <p>This is a card </p>
        </>
    )
}
function Card2(){
    return (
        <>
        <p>this is card 2</p>
        </>
    )
}
export default Header
export {
    Card,
    Card2
}
