import { useState } from 'react'
import './App.css'
import Ejercicio1 from './ejercicios/ejercicios_1/ejercicios_1'
import Ejercicio2 from './ejercicios/ejercicios_2/ejercicios_2'
import Ejercicio3 from './ejercicios/ejercicios_3/ejercicios_3'
import Ejercicio4 from './ejercicios/ejercicios_4/ejercicios_4'
import Ejercicio5 from './ejercicios/ejercicios_5/ejercicios_5'
import Ejercicio6 from './ejercicios/ejercicios_6/ejercicios_6'

function App() {
  const [currentExercise, setCurrentExercise] = useState(null)

  const renderExercise = () => {
    switch (currentExercise) {
      case 1:
        return <Ejercicio1 />
      case 2:
        return <Ejercicio2 />
      case 3:
        return <Ejercicio3 />
      case 4:
        return <Ejercicio4 />
      case 5:
        return <Ejercicio5 />
      case 6:
        return <Ejercicio6 />
      case 7:
        return <div><h2>Ejercicio 7</h2><p>Pendiente de implementación.</p></div>
      case 8:
        return <div><h2>Ejercicio 8</h2><p>Pendiente de implementación.</p></div>
      case 9:
        return <div><h2>Ejercicio 9</h2><p>Pendiente de implementación.</p></div>
      default:
        return <div><h2>Selecciona un ejercicio</h2><p>Haz clic en un botón arriba para ver el ejercicio correspondiente.</p></div>
    }
  }

  return (
    <div className="app">
      <h1>Ejercicios React</h1>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <button key={num} onClick={() => setCurrentExercise(num)}>
            Ejercicio {num}
          </button>
        ))}
      </div>
      <div className="exercise-container">
        {renderExercise()}
      </div>
    </div>
  )
}

export default App
