import './globals.css';
import './satoshi.css';
import Navbar from './components/navbar';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>Czoch - Schody i Balustrady na Wymiar | Jakość, Tradycja, Styl</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>

      </head>
      <body>
        <div></div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
