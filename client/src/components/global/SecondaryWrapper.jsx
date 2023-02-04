import Footer from "./Footer";
import Header from "./Header";

const SecondaryWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default SecondaryWrapper;
