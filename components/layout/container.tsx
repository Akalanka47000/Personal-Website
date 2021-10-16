interface LayoutProps {
  children: React.ReactNode
}

const Container = ({ children }: LayoutProps): JSX.Element => {
  return <div className="sticky z-30">{children}</div>
}

export default Container
