import { useState } from 'react'
import './App.css'
import MenuBar from "./components/menubar";
import MainBody from "./components/mainbody";
import ApieMus from "./components/apiemus";
import Paslaugos from "./components/paslaugos";
import Working from "./components/working";
import Projects from "./components/projects";
import Cart from "./components/cart";

function App() {
  const [currPage, setCurrPage] = useState("");
  const [currUser, setCurrUser] = useState(null);

  return (
    <>
    <MenuBar handleTargetChange={setCurrPage} currUser={currUser}></MenuBar>
    {currPage === "" && <MainBody handleButtonClick={setCurrPage}></MainBody>}
    {currPage === "Apie mus" && (<ApieMus handleOrderClick={setCurrPage}></ApieMus>)}
    {currPage === "Paslaugos" && (<Paslaugos handleButtonClick={setCurrPage}></Paslaugos>)}
    {currPage === "Kaip tai veikia?" && (<Working handleOrderClick={setCurrPage}></Working>)}
    {currPage === "Įgyvendinti projektai" && (<Projects handleButtonClick={setCurrPage}></Projects>)}
    {currPage === "Cart" && <Cart></Cart>}
    </>
  )
}

export default App
