import React from "react"
import Welcome from "./components/welcome/Welcome"
import ContentsPage from "./components/contents/menu-contents/ContentsPage"


export default function App() {

  const [showPage, setShowPage] = React.useState(<Welcome handle={goToContents} />)

  function goToContents() {
    setShowPage(<ContentsPage />)
  }

  return (
    
    <div className="page">
      {showPage}
    </div>

  )
}