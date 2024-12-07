


const StarVisual = ({symbolID}:{
  symbolID: number;
}) => {
  

  return (
    <div>
      { symbolID == 0 ? <div className="bg-white/45 h-2 w-2 rotate-12" /> 
      : symbolID == 1 ? <div className="bg-white/65 h-3 w-3 rotate-[33deg]" /> 
      : symbolID == 2 ? <div className="bg-white/70 h-3 w-3 rotate-[70deg]" /> 
      : symbolID == 3 ? <div className="bg-white/30 h-2 w-2 rotate-[53deg]" /> 
      :                 <div className="bg-white/40 h-2 w-2 rotate-[7deg]" /> 
      }
      
    </div>
  )
}

export default StarVisual;