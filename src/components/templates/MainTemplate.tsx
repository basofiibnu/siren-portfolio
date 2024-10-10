import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const MainTemplate = ({ children }: { children: React.ReactNode }) => (
  <div className={poppins.className}>
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(151.17deg, #26C2B9 8.69%, #288BE7 126.06%), url('/assets/background.png')",
      }}>
      <div className="container mx-auto p-4 pt-0">
        <Header />
        <main>{children}</main>
      </div>
    </div>
    <Footer />
  </div>
);

export default MainTemplate;
