import Image from "next/image"
import Logo from '../../../public/imgs/logo-ccb-light.png'

interface AppLayout {
  children: React.ReactNode
}

export default function AppLayout({
  children,
}: AppLayout) {
  return (
    <div>
        <div className="flex items-center justify-center py-4">
            <Image src={Logo} alt='a' height={100}/>
        </div>
        {children}
    </div>
  )
}
