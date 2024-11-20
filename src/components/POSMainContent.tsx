import { FC } from "react";
import { StepProps } from "./ASMainContent";

const POSMainContent: FC<StepProps> = ({ onContinue, onSkip, onBack }) => {
  return (
    <div className="w-[75%] float-right p-10 pt-7.5 relative  h-full">
      <h1>POS Content</h1>

      <div className="h-[120px] bottom-0 left-0 px-10 items-center flex absolute w-full">
        <div className="w-full flex flex-row justify-end">
          <button
            onClick={onBack}
            type="button"
            className=" group flex text-black items-center text-base bg-white hover:bg-gray-300 rounded-lg px-6 py-3 text-center mr-2.5"
          >
            <svg
              width="18"
              height="9"
              viewBox="0 0 18 9"
              className="mr-2 fill-white "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M4.46875 0.203119C4.78125 -0.109381 5.25 0.0859313 5.25 0.515619L5.25 3.28906L17.2812 3.28906C17.5547 3.28906 17.75 3.48437 17.75 3.75781V5.00781C17.75 5.28124 17.5547 5.47656 17.2812 5.47656L5.25 5.47656L5.25 8.24999C5.25 8.67968 4.78125 8.87499 4.46875 8.60156L0.601563 4.73437C0.40625 4.53906 0.40625 4.22656 0.601562 4.07031L4.46875 0.203119Z"
                fill="#333333"
              ></path>
            </svg>
            Back
          </button>
          <button
            onClick={onContinue}
            type="button"
            className=" group flex text-white items-center text-base bg-blue-700 hover:bg-blue-900 rounded-lg px-6 py-3 text-center border border-blue-700 "
          >
            Continue
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
  );
};

export default POSMainContent;
