import Currency from "../assets/image-currency.jpg";
import Restaurant from "../assets/image-restaurant.jpg";
import Plane from "../assets/image-plane.jpg";
import Confetti from "../assets/image-confetti.jpg";


const styles = {
  imageCard: "image-card bg-blue-300 sm:w-2/3 rounded-xl",
  imageCardImg: "object-cover h-full w-full rounded-t-xl",
  imageCardText: "image-card-text py-8 px-4 bg-white rounded-b-xl",
};

const PageThree = () => {
  return (
    <div className="pageThree">
      <div className="pageThree-container bg-gray-100 px-8 py-16 2xl:px-40">
        <div className="pageThree-header text-center text-4xl text-gray-800 mb-16">
          <h3 className="">Latest Articles</h3>
        </div>

        <div className="pageThree-content flex flex-col justify-center items-center">
          <div className={styles.imageCard}>
            <div className="">
              <img
                className={styles.imageCardImg}
                src={Currency}
                alt="img-currency"
              />
            </div>

            <div className={styles.imageCardText}>
              <p className="image-card-author text-xs text-gray-400 mb-2">
                By Claire Robinson
              </p>
              <p className="image-card-header text-gray-800 text-xl mb-2 hover:text-teal-400 cursor-pointer transition-all">
                Receive money in any currency with no fees
              </p>
              <p className="image-card-text text-gray-400 text-sm">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>

          <div className={styles.imageCard}>
            <div className="image-card-img">
              <img
                className={styles.imageCardImg}
                src={Restaurant}
                alt="img-currency"
              />
            </div>

            <div className={styles.imageCardText}>
              <p className="image-card-author text-xs text-gray-400 mb-2">
                By Wilson Hutton
              </p>
              <p className="image-card-header text-gray-800 text-xl mb-2 hover:text-teal-400 cursor-pointer transition-all">
                Treat yourself without worrying about money
              </p>
              <p className="image-card-text text-gray-400 text-sm">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>

          <div className={styles.imageCard}>
            <div className="image-card-img">
              <img
                className={styles.imageCardImg}
                src={Plane}
                alt="img-currency"
              />
            </div>

            <div className={styles.imageCardText}>
              <p className="image-card-author text-xs text-gray-400 mb-2">
                By Wilson Hutton
              </p>
              <p className="image-card-header text-gray-800 text-xl mb-2 hover:text-teal-400 cursor-pointer transition-all">
                Take your Easybank card wherever you go
              </p>
              <p className="image-card-text text-gray-400 text-sm">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>

          <div className={"last-image-card " + styles.imageCard}>
            <div className="image-card-img">
              <img
                className={styles.imageCardImg}
                src={Confetti}
                alt="img-currency"
              />
            </div>

            <div className={styles.imageCardText}>
              <p className="image-card-author text-xs text-gray-400 mb-2">
                By Claire Robinson
              </p>
              <p className="image-card-header text-gray-800 text-xl mb-2 hover:text-teal-400 cursor-pointer transition-all">
                Our invite-only Beta accounts are now live!
              </p>
              <p className="image-card-text text-gray-400 text-sm">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
