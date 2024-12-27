import Header from "./components/Header.jsx";
import {GameBoardContainer} from "./components/GameBoardContainer.jsx";

function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col items-center h-screen justify-center">
        <GameBoardContainer />
      </div>
    </>
  )
}

export default App
