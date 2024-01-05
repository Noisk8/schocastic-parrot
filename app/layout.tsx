import './ui/global.css';
import { montserrat, turret } from './ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${turret.className} atialiased`}>
        {children}
        
        <footer>

          <p className='text-center'>Hecho con amor Noisk8 </p>
        </footer>
        </body>
    </html>
  );
}
