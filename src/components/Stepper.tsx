import { useState } from "react";
import StepperHeader from "./StepperHeader";
import POSHelperContent from "./POSHelperContent";
import LocationHelperContent from "./LocationHelperContent";
import UserHelperContent from "./UserHelperContent";
import ASHelperContent from "./ASHelperContent";
import LocationMainContent from "./LocationMainContent";
import UserMainContent from "./UserMainContent";
import ASMainContent from "./ASMainContent";
import POSMainContent from "./POSMainContent";
import EndSummaryHelperContent from "./EndSummaryHelperContent";
import EndSummaryMainContent from "./EndSummaryMainContent";
const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onSkip = () => {
    // Handle skip action
  };

  const onContinue = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const onBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  const steps = [
    {
      title: "Add Locations",
      isActive: currentStep === 0,
      isCompleted: currentStep > 0,
      helperContent: <LocationHelperContent />,
      mainContent: (
        <LocationMainContent onContinue={onContinue} onSkip={onSkip} />
      ),
    },
    {
      title: "Add Users",
      isActive: currentStep === 1,
      isCompleted: currentStep > 1,
      helperContent: <UserHelperContent />,
      mainContent: (
        <UserMainContent
          onContinue={onContinue}
          onSkip={onSkip}
          onBack={onBack}
        />
      ),
    },
    {
      title: "Connect to Accounting System",
      isActive: currentStep === 2,
      isCompleted: currentStep > 2,
      helperContent: <ASHelperContent />,
      mainContent: (
        <ASMainContent
          onContinue={onContinue}
          onSkip={onSkip}
          onBack={onBack}
        />
      ),
    },
    {
      title: "Connect to POS",
      isActive: currentStep === 3,
      isCompleted: currentStep > 3,
      helperContent: <POSHelperContent />,
      mainContent: (
        <POSMainContent
          onContinue={onContinue}
          onSkip={onSkip}
          onBack={onBack}
        />
      ),
    },
    {
      title: "",
      isActive: currentStep === 4,
      isCompleted: currentStep > 4,
      helperContent: <EndSummaryHelperContent />,
      mainContent: <EndSummaryMainContent />,
    },
  ];

  function changeStep(step: number): void {
    setCurrentStep(step);
  }

  return (
    // <div
    //   className="relative z-10"
    //   aria-labelledby="modal-title"
    //   role="dialog"
    //   aria-modal="true"
    // >
    //   <div
    //     className="fixed inset-0 transition-opacity bg-opacity-75 bg-black/60"
    //     aria-hidden="true"
    //   ></div>

    //   <div className="fixed inset-0 z-10 w-screen">
    //     <div className="parent lex w-4/5 h-5/6 mx-auto mt-[5%]">
    //       <div className="relative w-full overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
    //         <div className="bg-white ">
    //           {/* <!-- Header Stepper --> */}
    //           <StepperHeader steps={steps} />

    //           <div className="flex flex-row items-stretch ">
    //             {/* <!-- Help Content Section --> */}
    //             {steps[currentStep].helperContent}
    //             {/* <!-- Main Content --> */}
    //             {steps[currentStep].mainContent}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white h-screen">
      {/* <!-- Header Stepper --> */}
      <div className="h-full">
        <div className="w-full absolute z-10">
          <StepperHeader steps={steps} goTo={changeStep} />
        </div>
        <div className="w-full h-full pt-[70px]">
          {/* <!-- Help Content Section --> */}
          {/* <div className=" w-1/4 float-left bg-gradient-to-b from-[#2662E4] to-[#497FF4] h-full relative" >
                <div className=" p-10">
                    <p className="text-lg font-medium text-left text-white">Set Up Your Accounting System</p>
                    <div className="flex flex-col justify-center items-start w-full relative gap-5 p-5 rounded-[15px] bg-white mt-[30px]">
                        <div className="w-full h-[113px]">
                            <img src="./img/help-location-01.jpg" className="w-full h-[113px]  left-[19.5px] top-[19.5px] rounded-[15px] object-none"/>
                        </div>
                        <div className="flex flex-col justify-start items-start w-full relative gap-[15px]">
                            <p className="text-base font-medium text-left text-[#333]">
                                Steps to Connect Your Accounting System
                            </p>
                            <p className="w-[280px] text-sm text-left text-[#333]">
                                <span className="self-stretch w-[280px] text-sm font-medium text-left text-[#333]">1. Select Your Accounting Software:</span>
                                <span className="self-stretch w-[280px] text-sm text-left text-[#333]">Choose from our list of supported accounting systems.</span>
                            </p>
                            <p className="w-[280px] text-sm text-left text-[#333]">
                                <span className="self-stretch w-[280px] text-sm font-medium text-left text-[#333]">2. Enter Credentials: </span>
                                <span className="self-stretch w-[280px] text-sm text-left text-[#333]">Provide your accounting system login details for a secure connection.</span>
                            </p>
                            <p className="w-[280px] text-sm text-left text-[#333]">
                                <span className="self-stretch w-[280px] text-sm font-medium text-left text-[#333]">3. Sync Data: </span>
                                <span className="self-stretch w-[280px] text-sm text-left text-[#333]">Follow the instructions <br /> link your accounting data with <br />Profit AI.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mb-10">
                        <svg width="10" height="10" viewBox="0 0 10 10" className="mx-1.5" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                            <circle cx="5" cy="5" r="5" fill="#fff"></circle>
                        </svg>
                        <svg width="10" height="10" viewBox="0 0 10 10" className="mx-1.5" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                            <circle cx="5" cy="5" r="5" fill="#474747"></circle>
                        </svg>
                        <svg width="10" height="10" viewBox="0 0 10 10" className="mx-1.5" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                            <circle cx="5" cy="5" r="5" fill="#474747"></circle>
                        </svg>
                    </div>
                </div>

                <div className="w-full flex items-center h-[119px] bg-black/10 rounded-bl-2xl border-t-[1px] border-[#ffffff]/20 bottom-0 absolute">
                    <svg  width="46" height="41" fill="none" className="top-10 left-8 absolute" preserveAspectRatio="none" viewBox="0 0 46 41"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.71" d="M1.488 5.574l21.76 8.955 21.759-8.955M23.247 32.44v7.463M9.4 30.948v5.97m27.694-5.97v5.97M1.488 21.994V4.08c0-1.649 1.77-2.985 3.956-2.985H41.05c2.185 0 3.956 1.336 3.956 2.985v17.912c0 1.648-1.771 2.985-3.956 2.985H5.444c-2.185 0-3.956-1.337-3.956-2.985z"/></svg>
                    <p className="text-sm text-left text-[#fff] pl-24 pr-5">
                        <span className="font-medium">Need help?</span>
                        Reach out to <a href="mailto:support@profitlabsinc.com" className="underline hover:no-underline">support@profitlabsinc.com</a> for any questions or assistance
                    </p>
                </div>

            </div> */}
          {steps[currentStep].helperContent}

          {/* <!-- Main Content --> */}
          {/* <div className="w-[75%] float-right p-10 pt-7.5 relative  h-full">
                <div className="flex flex-row justify-start pb-5">
                    <div className="flex items-center w-4/12 border-t-[3px] pt-1.5 border-emerald-600">
                        <i className="fa-sharp fa-solid fa-circle-check text-sm text-emerald-600"></i>
                        <p className="text-sm font-medium text-center text-emerald-600 ml-1.5">Connecting QuickBooks</p>
                    </div>
                    <div className="flex items-center ml-1 w-4/12 border-t-[3px] pt-1.5 border-blue-600">
                        <i className="fa-sharp fa-solid fa-circle-dot text-sm text-blue-600"></i>
                        <p className="text-sm font-medium text-center ml-1.5 text-blue-600">Setup Your GL Accounts</p>
                    </div>
                    <div className="flex items-center ml-1 w-4/12 border-t-[3px] pt-1.5 border-slate-300">
                        <i className="fa-sharp fa-solid fa-circle-dot text-sm text-slate-300"></i>
                        <p className="text-sm font-medium text-center text-slate-600 ml-1.5">Connect to POS</p>
                    </div>
                </div>

                <div>
                    <p className="text-2xl text-left text-gray-700 mb-2.5">Set up your GL accounts</p>
                    <p className="w-full text-sm text-left text-[#333] mb-7">
                        To ensure your financial data is accurately tracked and managed, connect your accounting system with Profit AI. This integration will streamline your financial processes and provide you with comprehensive insights.
                    </p>

                    <div className="w-64">
                        <label htmlFor="email" className="block mb-2 text-base text-left text-[#111928] w-full">
                            Select your GL Setup
                        </label>
                        <select id="countries" className="bg-white border border-gray-300  border-white-900  text-gray-900 pr-[10px] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Select</option>
                            <option value="US">Create GL based on the Profit AI Standard GL</option>
                            <option value="CA">Select and Import from QuickBooks Account</option>
                        </select>
                    </div>

                    <hr className="border-gray-200 w-full mt-8 mb-8" />

                    <!-- Create GL based on the Profit AI Standard GL -->
                    <div>
                        <p className="text-base font-medium text-left text-gray-700">Select and Import GL accounts from my QuickBooks.</p>
                        <p className="w-full text-sm text-left text-[#333] mt-2">
                            You can choose to select and import GLs directly from your QuickBooks account using the options
                            provided below.
                        </p>
                        <button type="submit" className="mt-5 group flex text-white items-center text-base bg-blue-700 hover:bg-blue-900 rounded-lg px-6 py-3 text-center border border-blue-700 ">
                            Import GL
                            <i className="fa-solid fa-cloud-arrow-down ml-2"></i>
                        </button>
                    </div>        
                </div>
                
                <div className="h-[120px] bottom-0 left-0 px-10 items-center flex absolute w-full">
                    <div className="w-full flex flex-row justify-end">
                        <button type="submit" className=" group flex text-black items-center text-base bg-white hover:bg-gray-300 rounded-lg px-6 py-3 text-center mr-2.5">
                            <svg width="18" height="9" viewBox="0 0 18 9" className="mr-2 fill-white " fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M4.46875 0.203119C4.78125 -0.109381 5.25 0.0859313 5.25 0.515619L5.25 3.28906L17.2812 3.28906C17.5547 3.28906 17.75 3.48437 17.75 3.75781V5.00781C17.75 5.28124 17.5547 5.47656 17.2812 5.47656L5.25 5.47656L5.25 8.24999C5.25 8.67968 4.78125 8.87499 4.46875 8.60156L0.601563 4.73437C0.40625 4.53906 0.40625 4.22656 0.601562 4.07031L4.46875 0.203119Z" fill="#333333"></path>
                            </svg>
                            Back
                        </button>
                        <button type="submit" className=" group flex text-white items-center text-base bg-blue-700 hover:bg-blue-900 rounded-lg px-6 py-3 text-center border border-blue-700 ">
                            Continue
                            <svg width="18" height="10" viewBox="0 0 18 10" className="ml-2 fill-white " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M13.2812 9.18552C12.9688 9.49802 12.5 9.30271 12.5 8.87302V6.09958H0.46875C0.195312 6.09958 0 5.90427 0 5.63083V4.38083C0 4.10739 0.195312 3.91208 0.46875 3.91208H12.5V1.13864C12.5 0.708956 12.9688 0.513644 13.2812 0.787081L17.1484 4.65427C17.3438 4.84958 17.3438 5.16208 17.1484 5.31833L13.2812 9.18552Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div> */}
          {steps[currentStep].mainContent}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
