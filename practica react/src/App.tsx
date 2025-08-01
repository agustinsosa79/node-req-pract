import { useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    inputRef.current?.blur();
  }

  return (
    <>
    <h1>aca vas a enfocar tu input</h1>
    <input type="text" ref={inputRef} />
    <button onClick={handleFocus}>enfocar</button>
    <button onClick={handleBlur}>desenfocar</button>
    </>
  )
}

export default App
