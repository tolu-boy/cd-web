import Navbar from "./Navbar";

interface HeaderProps {
  children: any;
}

const Layout: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
