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
      <Router basename="/onboard">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/steps" element={<Stepper />} />
        </Routes>
    </Router>
    </>
  );
};

export default OnBoardingPage;
