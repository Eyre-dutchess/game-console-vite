import { Link } from "react-router-dom"

interface ConsoleBoxProps {
  title: string
  src: string
  link: string
}

export const ConsoleBox = ({ src, title, link}: ConsoleBoxProps) => {
  return(
    <Link to={link}>
      <div className="box">
          <h6 className="truncate text-xl md:text-sm">{title}</h6>
          <div className="w-[60%] h-[85px]  rounded-r-full overflow-hidden ">
            <img src={src} alt="game img" className="w-full h-full object-cover object-center" />
          </div>
      </div>
    </Link>
  )
}
