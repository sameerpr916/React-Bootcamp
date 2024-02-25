import { useState, useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password , setpassword] = useState("")
  const passwordRef= useRef(null)


  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if (characterAllowed) str+= "%$#@!*&(){}[]+-*/"


    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

    
  }, [length,numberAllowed,characterAllowed,setpassword])

  const copypasswordtoclipboard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setselectionrange(0,3);
    window.navigator.clipboard.writeText(password)}, [password])

  useEffect(()=>{passwordgenerator()},[length,numberAllowed,characterAllowed,passwordgenerator] )

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white my-3'> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}/>
        <button 
        onClick={copypasswordtoclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={100}
          value= {length}
          className='cursor-pointer'
          onChange={(e)=> {
            setlength(e.target.value)}}
          />
          <label> length: {length}</label>
        </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberinput'
            onChange={()=>{
              setnumberAllowed((prev)=> !prev);
            }} />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={characterAllowed}
            id='characterinput'
            onChange={()=>{
              setcharacterAllowed((prev)=> !prev);
            }} />
            <label htmlFor="characterinput">Characters</label>
          </div>
        </div>
      </div>
   </ > 
  )
}

export default App
