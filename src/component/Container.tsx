interface ContainerProps {
  children: React.ReactNode
  classname?: string
}

export const Container = ({children, classname}: ContainerProps) => {
  return(
    <div className={`${classname && classname} relative bg-gradient-to-b from-orange-500 via-blue-500 to-blue-100/5
    min-w-screen min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12`}>
        {children}
    </div>
  )
}
