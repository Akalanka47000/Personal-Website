import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title }: LayoutProps): JSX.Element => {
  const pageTitle = title || 'Akalanka Perera | Personal Website'
  const pageDescription =
    'Hi, my name is Akalanka Perera and I am a nineteen year old, highly motivated undergraduate student fluent in programming as well as designing and adept to quick learning and sharp reconnaissance. Welcome and get to know me better'
  const favIconPath = '/favicon.png'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta name="image" content={favIconPath} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={favIconPath} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-bgWhite text-textBlack font-roboto min-h-screen">{children}</main>
    </>
  )
}

export default Layout
