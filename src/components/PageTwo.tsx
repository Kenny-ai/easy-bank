import { ReactComponent as IconOnlline } from "../assets/icon-online.svg";
import { ReactComponent as IconOnboarding } from "../assets/icon-onboarding.svg";
import { ReactComponent as IconApi } from "../assets/icon-api.svg";
import { ReactComponent as IconBudgetting } from "../assets/icon-budgeting.svg";

const styles = {
  pageTwoDivs:
    "flex flex-col justify-center items-center w-2/3 text-center mb-10 xl:items-start xl:text-left xl:mr-8",
  pageTwoh3: "text-4xl mb-4 text-gray-800",
  pageTwoP: "text-gray-500 lg:text-lg",
  pageTwoIcon: "flex flex-col justify-center items-center mb-4",
};

const PageTwo = () => {
  return (
    <div className="pageTwo">
      <div className="pageTwo-container bg-gray-200 flex flex-col justify-center items-center py-20 xl:items-start xl:px-40 text">
        <div className={"pageTwo-header xl:items-start " + styles.pageTwoDivs}>
          <h3 className={styles.pageTwoh3}>Why choose Easybank?</h3>
          <p className={styles.pageTwoP}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center xl:flex-row xl:items-start">
          <div className={styles.pageTwoDivs}>
            <div className={styles.pageTwoIcon}>
              <IconOnlline />
            </div>
            <div className="">
              <p className="text-2xl mb-4 text-gray-800">Online Banking</p>
              <p className={styles.pageTwoP}>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>

          <div className={styles.pageTwoDivs}>
            <div className={styles.pageTwoIcon}>
              <IconBudgetting />
            </div>
            <div className="">
              <p className="text-2xl mb-4 text-gray-800">Simple Budgeting</p>
              <p className={styles.pageTwoP}>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
          </div>

          <div className={styles.pageTwoDivs}>
            <div className={styles.pageTwoIcon}>
              <IconOnboarding />
            </div>
            <div className="">
              <p className="text-2xl mb-4 text-gray-800">Fast Onboarding</p>

              <p className={styles.pageTwoP}>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
          </div>

          <div className={styles.pageTwoDivs}>
            <div className={styles.pageTwoIcon}>
              <IconApi />
            </div>
            <div className="">
              <p className="text-2xl mb-4 text-gray-800">Open API</p>
              <p className={styles.pageTwoP}>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
