import React, {useState} from "react"

export default function App(){
  const [number, setNumber] = useState("");
  const handleChange = (e) => {
    setNumber(e.target.value);
    console.log("value: ", e.target.value);
  }

  function olah (){
    const hargaA = 4550
    const qty = 13
    if( number > qty ){
      const hasilA = hargaA * number
      const hasilB = number * 231
      const hitung = hasilA - hasilB
      console.log(hasilA)
      console.log(hasilB)
      console.log(hitung)
    }else{
      const hasilA = hargaA * number
      console.log(hasilA)
    }
    // return setNumber(number * 2)
  }
  function olahA(){
    const hargaB = 5330
    const qtyA = 7
    if(number > qtyA){
      const hasilpartA = hargaB * number
      const hasilpartB = 23/100 * number
      const hasilpartC = hasilpartA - hasilpartB
      console.log(hasilpartA)
      console.log(hasilpartB)
      console.log(hasilpartC)
    }else{
      const hasilA = hargaB * number
      console.log(hasilA)
    }
  }

  function olahC (){
    const hargaC = 8653
    const hasilhargaC = number * hargaC
    console.log(hasilhargaC)
  }
  return(
    <div>
      <input type="number" value={number} onChange={handleChange} ></input>
      <button onClick={olah}>hasil A</button>
      <input type="number" value={number} onChange={handleChange}></input>
      <button onClick={olahA}>hasil B</button>
      <input type="number" value={number} onChange={handleChange} ></input>      
      <button type="number" onClick={olahC} >hasil C</button>

    </div>
  )
}