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
      <body style={{ display: 'grid', minHeight: '100dvh', gridTemplateRows: 'auto 1fr auto' }}>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
