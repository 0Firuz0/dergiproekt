
import './App.css'
import TicTacToe from './components/TicTacToe'
import


  function App() {



    return (

      <div>
        <TicTacToe></TicTacToe>
        <router> <nav>
          <link>HOME</link>
          <link>HOME</link>
          <link>ABOUT</link>
          <link>CONTACT </link>
        </nav>

          <ROUTERES>
            <route element={
              <home to="/"></home>

            }></route>
            <route element={
              <about></about>

            }></route>
            <route element={
              <contact ></contact>

            }></route>
          </ROUTERES></router>
      </div>

    )

  }

export default App
