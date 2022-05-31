import PhonesImage from "../assets/image-mockups.png";

const styles = {
  navLink: "mb-8 cursor-pointer hover:text-teal-400",
};

interface Props {
  showNav: boolean;
}

const PageOne: React.FC<Props> = ({ showNav }) => {
  return (
    <div className="pageOne">
      <div className="pageOne-container md:flex md:flex-row-reverse md:bg-gray-100 md:h-screen relative">
        {showNav && (
          <div className="nav-container absolute z-20 w-full flex justify-center items-center pt-4 md:hidden">
            <div className="bg-white flex flex-col justify-center items-center w-3/4 py-8 rounded-xl">
              <p className={styles.navLink}>Home</p>
              <p className={styles.navLink}>About</p>
              <p className={styles.navLink}>Contact</p>
              <p className={styles.navLink}>Blog</p>
              <p className="cursor-pointer hover:text-teal-400">Careers</p>
            </div>
          </div>
        )}

        <div className="pageOne-img-container bg-cover bg-right-top flex justify-center items-end mb-12 md:w-3/5 md:bg-left">
          <img
            className="sm:w-3/4 md:w-full"
            src={PhonesImage}
            alt="Mock-up"
          />
        </div>

        <div className="pageOne-text-container flex flex-col justify-center items-start px-4 text-center mb-16 md:w-2/5 md:pl-8 lg:pl-24 xl:pl-40 md:pr-10">
          <div className="md:flex md:flex-col md:text-left mb-8">
            <p className="text-4xl font-bold uppercase text-gray-800 mb-6 md:text-5xl lg:text-6xl md:capitalize">
              Next generation digital banking
            </p>

            <p className="text-gray-500 font-medium md:text-xl">
              Take your financial life online. Your Easybank account will be a
              one-stop shop for spending, saving, budgeting, investing and much
              more.
            </p>
          </div>

          <div className="pageOne-button-container flex justify-center items-center w-full md:justify-start">
            <button className="header-button px-8 py-4 rounded-full text-white text-sm md:text-base hover:opacity-80 transition-all">
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
