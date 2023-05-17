import { useState } from 'react'
import './App.css'
import MenuBar from "./components/menubar";
import MainBody from "./components/mainbody";
import ApieMus from "./components/apiemus";
import Paslaugos from "./components/paslaugos";
import Working from "./components/working";

function App() {
  const [currPage, setCurrPage] = useState("");
  const [currUser, setCurrUser] = useState(null);

  return (
    <>
    <MenuBar handleTargetChange={setCurrPage} currUser={currUser}></MenuBar>
    {currPage === "" && <MainBody handleButtonClick={setCurrPage}></MainBody>}
    {currPage === "Apie mus" && (<ApieMus handleOrderClick={setCurrPage}></ApieMus>)}
    {currPage === "Paslaugos" && (<Paslaugos handleOrderClick={setCurrPage}></Paslaugos>)}
    {currPage === "Kaip tai veikia?" && (<Working handleOrderClick={setCurrPage}></Working>)}
    </>
  )
}

export default App
