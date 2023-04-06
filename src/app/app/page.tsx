import Image from 'next/image'

export default function Dashboard() {
  return (
    <>
      <footer className='text-center'>
        <h1 className='_text-blue font-semibold text-2xl'>Versão: </h1><span className='text-black text-xs'>1.0.0</span>
        <h1 className='_text-blue font-semibold text-2xl'>Contato: </h1><span className='text-black text-xs'>dev@gmail.com</span>
      </footer>
    </>
  )
}

