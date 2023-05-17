import { useState } from 'react'
import './App.css'
import MenuBar from "./components/menubar";
import MainBody from "./components/mainbody";

function App() {
  const [currPage, setCurrPage] = useState("");
  const [currUser, setCurrUser] = useState(null);

  return (
    <>
    <MenuBar handleTargetChange={setCurrPage} currUser={currUser}></MenuBar>
    <MainBody />
    </>
  )
}

export default App
