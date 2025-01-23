import '/src/styles/globals.scss';
import Navbar from '/src/components/navbar';
import Footer from '/src/components/footer';

export const metadata = {
  title: "Nova Enterprice",
  description: "desarrollo web y tecnologia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
