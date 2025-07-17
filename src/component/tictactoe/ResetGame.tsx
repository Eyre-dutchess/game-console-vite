
interface ResetGameProps {
  onClick: ()=> void
}

export const ResetGame = ({onClick}: ResetGameProps) => {
  return(
    <div className="w-full h-[70vh] fixed z-50 bottom-0 left-0 bg-white/90 transition flex items-center justify-center">
      <button className="rounded-full w-1/2 py-3 text-white bg-blue-400/75 hover:bg-blue-400 hover:text-white hover:shadow-lg shadow-blue-200 cursor-pointer transition" 
      onClick={onClick}>Restart</button>
    </div>
     
  )
}
