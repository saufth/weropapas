import Image from 'next/image'

export default function Home () {
  return (
    <main
      className='w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url(/images/pictures/hero.jpg)' }}
    >
      <div className='w-full h-full px-11% grid place-content-center gap-y-2 bg-white/30'>
        <Image
          src='/images/logo/logotype.png'
          alt='Papas'
          className='w-xs h-auto'
          width={499}
          height={720}
        />
        <span className='font-black text-xl text-primary text-center'>
          En construcción
        </span>
      </div>
    </main>
  )
}
