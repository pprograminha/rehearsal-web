import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head> 
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>CCB - Congragação Cristã no Brasil</title>
      </head>
      <body>
        <div id="next" className='max-w-6xl mx-auto px-4'>
          {children}  
        </div>
      </body>
    </html>
  )
}
