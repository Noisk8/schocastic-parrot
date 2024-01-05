import Image from 'next/image';
import { lusitana, spacemono, turret } from './ui/fonts';
import styles from './ui/home.module.css' 
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-rose-100 p-4 md:h-52">
        {/* <AcmeLogo /> */}
      
       <h1 className={ `${spacemono.className} text-center text-4xl font-bold sm:text-4xl md:text-6xl md:leading-normal `}>Pagos del 🐫</h1>
        {/* <div className={styles.shape}></div> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row ">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-rose-100 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`  text-xl text-gray-800 md:text-3xl md:leading-normal`}>
         <strong>CamelloPago  </strong>paga a tus empleados con cripto de forma sencilla y segura.<br></br>
            {/* <a href="https://github.com/noisk8" className="text-green-800">
              noisk8 
            </a>
             . Con la remoral mi niño */}
          </p>
          <p className={`${spacemono.className}  text-center text-2xl font-bold ` }>  🐫PAGO </p>
          
          {/* <p className={`${turret.className}  text-center text-2xl font-bold` }> Another One </p>
           */}

          {/* <p className={`${lusitana.className}  text-center text-2xl font-bold` }> Otra Fuente maybe? </p>
           */}
          <div className='flex justify-center items-center space-x-4'> 
          <Link
            href="/login"
            className="flex items-center gap-5 justify-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-800 md:text-base"
          >
            <span>Log in</span> 

          </Link>
          <Link
            href="/dashboard"
            target='blank'
            className="flex items-center gap-5 justify-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-800 md:text-base"
          >
            <span>Dashboard</span> 
            
          </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        
 
        {/* PARA QUE CUANDO LA SEA MOBIL CAMBIE DE IAMAGEN SEE CLASNAME  DE IMAGE*/}

    <Image
 src="/camello-desktop.jpg"
 width={1000}
 height={760}
 alt="meravuelta" 
 className='hidden md:block'/>

<Image
 src="/camello-mobile.jpg"
 width={460}
 height={520}
 alt="meravuelta" 
 className='block md:hidden'/>

        </div>


      </div>
    </main>
  );
}
