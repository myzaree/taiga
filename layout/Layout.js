import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <img src="/img/kover.png" className="w-full" />
    </>
  );
};