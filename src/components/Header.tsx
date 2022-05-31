import { ReactComponent as DesktopLogo } from "../assets/logo2.svg";
import { ReactComponent as MobileLogo } from "../assets/logo.svg";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";
import { ReactComponent as Hamburger } from "../assets/icon-hamburger.svg";

const styles = {
  headerContainer: "w-1/3 flex justify-center items-center",
  headerText: "",
  headerButton:
    "px-8 py-2 rounded-full text-white text-sm lg:text-base hover:opacity-80 transition-all",
  headerTextDiv:
    "py-6 hover:border-b-4 rounded-b-sm hover:border-b-green-400 hover:text-black cursor-pointer",
};

interface Props {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ showNav, setShowNav }) => {
  return (
    <div className="header z-10 relative">
      <div className="mobile-header-container flex bg-white justify-between items-center p-6 md:hidden">

        <MobileLogo />

        <div
          className="icon-container cursor-pointer"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          {showNav && <IconClose />}
          {!showNav && <Hamburger />}
        </div>
      </div>

      <div className="desktop-header-container hidden md:flex items-center border-b bg-white">
        <div className={"logo " + styles.headerContainer}>
          <DesktopLogo />
        </div>
        <div className="w-1/3 flex h-full justify-between items-center text-gray-500 text-sm lg:text-base">
          <div className={styles.headerTextDiv}>
            <p className={styles.headerText}>Home</p>
          </div>
          <div className={styles.headerTextDiv}>
            <p className={styles.headerText}>About</p>
          </div>
          <div className={styles.headerTextDiv}>
            <p className={styles.headerText}>Contact</p>
          </div>
          <div className={styles.headerTextDiv}>
            <p className={styles.headerText}>Blog</p>
          </div>
          <div className={styles.headerTextDiv}>
            <p className={styles.headerText}>Careers</p>
          </div>
        </div>
        <div className={styles.headerContainer}>
          <button className={"header-button " + styles.headerButton}>
            Request Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
