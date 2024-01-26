import { useState } from "react";

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0)
  let [materiaB, setMateriaB] = useState(0)
  let [materiaC, setMateriaC] = useState(0)

  const retornaMedia = (materiaA, materiaB, materiaC) => {
    const result = (materiaA + materiaB + materiaC) / 3;
    if(result < 7){
      return(
        <p>Sua média foi {Math.round(result)}, você está reprovado!</p>
      )
    }
    return(
      <p>Sua média foi {result.toFixed(2)}, você foi Aprovado!</p>
    )
  }
  return(
    <form>
      <input type="number" placeholder="Máteria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
      <input type="number" placeholder="Máteria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
      <input type="number" placeholder="Máteria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />      
      <br />
      <div>
        {retornaMedia(materiaA, materiaB, materiaC)}
      </div>
    </form>
  )
}

export default Formulario;