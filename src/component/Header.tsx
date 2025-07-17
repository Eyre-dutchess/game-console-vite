interface HeaderProps {
  title?: string
  subTitle?: string
}

export const Header = ({title, subTitle}: HeaderProps) => {
  return(
    <div>
        <h1>{title}</h1>
        <h6>{subTitle}</h6>
    </div>
  )
}
