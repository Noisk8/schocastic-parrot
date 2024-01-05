import Image from 'next/image';
import { lusitana, spacemono, turret } from './ui/fonts';
import styles from './ui/home.module.css' 
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <div className={styles.shape}></div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`  text-xl text-gray-800 md:text-3xl md:leading-normal`}>
         <strong>Dashboard </strong>Hecho en NextJs por  {' '}
            <a href="https://github.com/noisk8" className="text-blue-500">
              noisk8 
            </a>
             . Con la remoral mi niño
          </p>
          <p className={`${spacemono.className}  text-center text-2xl font-bold` }> Another One </p>
          
          <p className={`${turret.className}  text-center text-2xl font-bold` }> Another One </p>
          

          <p className={`${lusitana.className}  text-center text-2xl font-bold` }> Otra Fuente maybe? </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> 
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        
 
        {/* PARA QUE CUANDO LA SEA MOBIL CAMBIE DE IAMAGEN SEE CLASNAME  DE IMAGE*/}

    <Image
 src="/hero-desktop.png"
 width={1000}
 height={760}
 alt="meravuelta" 
 className='hidden md:block'/>

<Image
 src="/hero-mobile.png"
 width={560}
 height={620}
 alt="meravuelta" 
 className='block md:hidden'/>

        </div>


      </div>
    </main>
  );
}
