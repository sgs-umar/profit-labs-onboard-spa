import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [isTermsAgreed, setTermsAgreed] = useState<Boolean>(false);
  function termsChanged(e: React.ChangeEvent<HTMLInputElement>): void {
    setTermsAgreed(e.target.checked);
  }

  const handleWelcomeProceed = () => {
    console.log("Welcome Proceed");
    navigate("/steps");
  };

  const handleSkipSetup = () => {
    console.log("Skip Setup");
    navigate("/home");
  };

  return (
    <div className="w-full bg-white bg-[url('img/welcome-bg.jpg')] bg-no-repeat bg-cover">
      <div className=" p-[100px] w-4/5 mx-auto">
        <p className="w-full text-4xl text-center text-[#333] font-medium">
          Welcome to Profit AI.
        </p>
        <div className="w-full text-xl text-center text-[#333] pt-6 font-light">
          Your Smart Solution for Data-Driven Profit Growth
        </div>
        <div className="flex justify-center content-center mt-16">
          <div className="w-4/12 ">
            <div className="w-[90%] bg-[url('img/Welcome-icon.svg')] bg-no-repeat bg-contain h-full"></div>
          </div>
          <div className="w-8/12 text-lg">
            <div className="font-light mb-6">
              We’re excited to have you onboard! Profit AI will empower your
              business with actionable insights, helping you make smarter
              decisions, streamline operations, and drive sustainable growth.
            </div>
            <div className="font-light mb-6">
              Follow our easy onboarding steps to customise Profit AI for your
              business. In just a few minutes, you'll be ready to harness the
              power of AI and take your business to the next level.
            </div>
            <div className="">Start your journey to higher profits now!</div>
            <div className="flex w-full items-center mt-6 ">
              <input
                onChange={(e) => termsChanged(e)}
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-base text-gray-800"
              >
                I agree to the{" "}
                <a className="underline text-blue-700 hover:no-underline">
                  Terms and Condition
                </a>
              </label>
            </div>
          </div>
        </div>

        <div className="border border-b-[1px] border-gray-200 mt-14 mb-14"></div>

        <div className="items-center flex w-full">
          <div className="w-full flex flex-row justify-between content-center">
            <div className="flex items-center">
              <button
                disabled={!isTermsAgreed}
                onClick={handleSkipSetup}
                type="submit"
                className=" group flex text-blue-700 items-center text-base bg-white hover:bg-blue-700 hover:text-white hover:fill-white rounded-lg px-6 py-3 text-center border border-blue-700 disabled:cursor-not-allowed"
              >
                Skip setup
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 fill-blue-700 group-hover:fill-white"
                  preserveAspectRatio="none"
                >
                  <path d="M13.6719 5.33047C14.082 5.68594 14.082 6.31484 13.6719 6.67031L8.42188 11.0453C7.84766 11.5102 7 11.1273 7 10.3617V1.61172C7 0.873436 7.84766 0.490623 8.42188 0.955467L13.6719 5.33047ZM6.67188 5.33047C7.08203 5.68594 7.08203 6.31484 6.67188 6.67031L1.42188 11.0453C0.847656 11.5102 0 11.1273 0 10.3617V1.61172C0 0.873436 0.847656 0.490623 1.42188 0.955467L6.67188 5.33047Z"></path>
                </svg>
              </button>
              <div className="w-5/12 text-sm text-gray-600 ml-5">
                But if you’d rather explore on your own, you can skip the
                onboarding and complete it later.
              </div>
            </div>

            <button
              disabled={!isTermsAgreed}
              onClick={handleWelcomeProceed}
              type="submit"
              className="flex text-white items-center bg-blue-700 hover:bg-blue-900 rounded-lg text-base px-6 py-3 text-center border border-blue-700 disabled:cursor-not-allowed"
            >
              Proceed with setup
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                className="ml-2 fill-white "
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path d="M13.2812 9.18552C12.9688 9.49802 12.5 9.30271 12.5 8.87302V6.09958H0.46875C0.195312 6.09958 0 5.90427 0 5.63083V4.38083C0 4.10739 0.195312 3.91208 0.46875 3.91208H12.5V1.13864C12.5 0.708956 12.9688 0.513644 13.2812 0.787081L17.1484 4.65427C17.3438 4.84958 17.3438 5.16208 17.1484 5.31833L13.2812 9.18552Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
