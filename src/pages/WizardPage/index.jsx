import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const steps = ["Select Candidate", "Select Company", "Submit Report"];
// const Candidates=[{candidates,setSelectedCandidates]
export default function HorizontalLinearStepper({ candidates, companies }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [data, setData] = React.useState({
    candidateId: undefined,
    candidateName: "",
    companyId: undefined,
    companyName: "",
    interviewDate: "Fri Jan 12 2028 08:39:19 GMT+0100 (CET)",
    phase: "",
    status: "",
    note: "",
  });
  console.log(data);
  const handleSelectCandidate = (e) => {
    setData({
      ...data,
      candidateName: e.target.value,
      candidateId: e.target.id,
    });
  };
  const handleSelectCompanies = (e) => {
    setData({
      ...data,
      companyName: e.target.value,
      companyId: e.target.id,
    });
  };
  const handleSelectStatus = (e) => {
    setData ({
      ...data,
      status: e.target.value
    })
  }
  const handleSelectPhase = (e) => {
    setData ({
      ...data,
      phase: e.target.value
    })}
  const handleInput = (e) => {
    setData({ ...data, note: e.target.value });
    // setData((prevState) => {
    //   return ({ ...prevState, note: e.target.value });
    // });
  };
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("Ne mozete preskociti korak koji je obavezan!");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.o = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {activeStep === 0 &&
              candidates.map((candidate) => (
                <div>
                  {candidate.name}
                  <input
                    onChange={handleSelectCandidate}
                    value={candidate.name}
                    id={candidate.id}
                    type="radio"
                    name="candidate"
                  />
                </div>
              ))}{" "}
            {activeStep === 1 &&
              companies.map((companies) => (
                <div>
                  {companies.name}
                  <input
                    type="radio"
                    name="companies"
                    onChange={handleSelectCompanies}
                    value={companies.name}
                    id={companies.id}
                  />
                </div>
              ))}
            {activeStep === 2 && <h2>SELECT PHASE</h2>}
            {activeStep === 2 &&
              ["hr", "cv", "ti", "interview"].map((phase) => (
                <div>
                  {phase}
                  <input type="radio" name="phase" value={phase} onChange={handleSelectPhase} />
                  <div></div>
                </div>
              ))}
            {activeStep === 2 && <h2>SELECT STATUS</h2>}
            {activeStep === 2 &&
              ["declined", "passed"].map((status) => (
                <div>
                  {status}
                  <input type="radio" name="status" value={status} onChange={handleSelectStatus} />
                </div>
              ))}
            {activeStep === 2 && <h2>NOTES</h2>}
            {activeStep === 2 && (
              <textarea
                onChange={handleInput}
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Notes..."
              ></textarea>
            )}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
