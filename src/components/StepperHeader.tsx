import React from "react";
import activeStepIcon from "../img/active-step.svg";
import inActiveStepIcon from "../img/inactive-step.svg";
import completedStepIcon from "../img/completed-step.svg";

interface Step {
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface StepperHeaderProps {
  steps: Step[];
  goTo?: (step: number) => void;
}

const StepperHeader: React.FC<StepperHeaderProps> = ({ steps, goTo }) => {


  function handleClick(index: number, step: Step): void {
    goTo(index)
  }

  return (
    <div className="header min-h-20 bg-gray-100 border-b-[1px] border-gray-300 content-center justify-center">
      <div className="flex flex-row justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center ml-2.5">
            {index < steps.length - 1 && (
              <>
                <img
                  src={
                    step.isCompleted
                      ? completedStepIcon
                      : step.isActive
                      ? activeStepIcon
                      : inActiveStepIcon
                  }
                  alt={step.title}
                  className="w-5 h-5"
                />
                <p
                  onClick={() => handleClick(index, step)}
                  className={`text-sm font-medium text-center ml-1.5 cursor-pointer ${
                    step.isCompleted
                      ? "text-emerald-600"
                      : step.isActive
                      ? "text-blue-700"
                      : "text-[#666]"
                  }`}
                >
                  {step.title}
                </p>
              </>
            )}
            {index < steps.length - 2 && (
              <div
                className={`h-[1px] w-16 ml-2 ${
                  step.isCompleted
                    ? "bg-emerald-600"
                    : step.isActive
                    ? "bg-blue-700"
                    : "bg-gray-400"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepperHeader;
