import './ui/global.css';
import { spacemono, turret } from './ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spacemono.className} atialiased`}>
        {children}
        
        <footer>

          <p className='text-center'>Hecho con amor Noisk8 </p>
        </footer>
        </body>
    </html>
  );
}
