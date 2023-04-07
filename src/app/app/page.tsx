import { Congregations } from '@/src/components/Congregations'
import Image from 'next/image'

export default function Dashboard() {
  return (
    <>
      {/* @ts-expect-error Async Server Component*/}
      <Congregations  />
      <footer className='text-center mt-4'>
        <h1 className='_text-dark-blue font-semibold text-1xl'>Versão: </h1><span className='mb-4 inline-block text-black text-xs'>1.0.0</span>
        <h1 className='_text-dark-blue font-semibold text-1xl'>Contato: </h1><span className='text-black text-xs'>dev@gmail.com</span>
      </footer>
    </>
  )
}

