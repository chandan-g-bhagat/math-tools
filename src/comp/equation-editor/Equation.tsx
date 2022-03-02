import EquationEditor from "equation-editor-react";
import React, { CSSProperties, useState } from "react";
import { EditableMathField } from "react-mathquill";
import NormalEquationSolver from "./NormalEquationSolver";

const equationWrapperStyle: CSSProperties = {
  fontSize: "48px",
  position: "relative",
  display: "table",

  marginTop: "5%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const equationOutputStyle: CSSProperties = {
  fontSize: "16px",
  color: "rgb(232, 62, 140)",
  textAlign: "center",
};

const placeholderOutputStyle: CSSProperties = {
  fontSize: "20px",
  display: "table",

  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
};

function Equation() {
  function handleSubmit(event: any) {
    event.preventDefault();
    setEqn(TextEqn);
    console.log(TextEqn);
    console.log("eqn => " + Eqn);
  }

  const [TextEqn, setTextEqn] = useState("");
  const [Result, setResult] = useState("");
  const [ResultNew, setResultNew] = useState("");
  const [Eqn, setEqn] = useState("y=x");
  return (
    <div className="container-fluid">
      <div className="row"></div>
      <div className="row" style={placeholderOutputStyle}>
        Type the equation here
      </div>
      <div id="eq" style={equationWrapperStyle}>
        <EquationEditor
          value={Eqn}
          onChange={setEqn}
          autoCommands="bar overline sqrt sum prod int alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omikron pi rho sigma tau upsilon phi chi psi omega Alpha Beta Gamma Aelta Epsilon Zeta Eta Theta Iota Kappa Lambda Mu Nu Xi Omikron Pi Rho Sigma Tau Upsilon Phi Chi Psi Omega rangle langle otimes neq leq ll geq gg approx dagger angle in"
          autoOperatorNames="sin cos tan"
        />
        <p style={equationOutputStyle}>
        
          <span>latex: </span>
          <strong>
            <code>{Eqn}</code>
          </strong>
        </p>
      </div>
      <button onClick={Solve} className="btn btn-outline-primary">Solve</button>
      <div className="row" style={placeholderOutputStyle}>
      {/* <EquationEditor
          value={Result}
          onChange={setResultNew}
          autoCommands="bar overline sqrt sum prod int alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omikron pi rho sigma tau upsilon phi chi psi omega Alpha Beta Gamma Aelta Epsilon Zeta Eta Theta Iota Kappa Lambda Mu Nu Xi Omikron Pi Rho Sigma Tau Upsilon Phi Chi Psi Omega rangle langle otimes neq leq ll geq gg approx dagger angle in"
          autoOperatorNames="sin cos tan"
        /> */}
        <EditableMathField
          latex={Result}
          contentEditable="false"
         />
        <div className="row">

     
        </div>
        </div>
    </div>
  );

  function Solve() {
    var equate=new NormalEquationSolver();
    var solved=equate.Solve(Eqn);
    console.log(solved);
    setResult(solved);
  }
  
}


export default Equation;
