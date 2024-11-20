import Stepper from "./Stepper";
import Welcome from "./Welcome";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
const OnBoardingPage = () => {

  return (
    <>
      {/* <Welcome onProceed={handleWelcomeProceed} onSkip={handleSkipSetup} /> */}
      <Router>
        <Routes>
          <Route path="/onboard" element={<Welcome />} />
          <Route path="/onboard/steps" element={<Stepper />} />
        </Routes>
    </Router>
    </>
  );
};

export default OnBoardingPage;
