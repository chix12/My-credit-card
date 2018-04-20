import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const renderCardNumber = number => {
  let str = number.toString();
  let newStr = "";
  for (let i = 0; i < str.length; i += 4) newStr += str.slice(i, i + 4) + " ";
  return newStr.trim();
};

const renderDate = number => {
  let str = number.toString();
  return str.substring(0, 2) + "/" + str.substring(2, 4);
};

const CreditCard = props => {
  return (
    <div className="my-credit-card">
      <h1 className="credit-card-title" style={{ textAlign: "right" }}>
        {" "}
        Credit Card{" "}
      </h1>
      <div className="my-card-body">
        <div>
          <p style={{ textAlign: "left" }}>
            {" "}
            {renderCardNumber(props.cardNumber)}{" "}
          </p>
          <p style={{ textAlign: "right" }}> {renderDate(props.validThru)} </p>
          <p style={{ textAlign: "left" }}>
            {" "}
            {props.cardHolder.toUpperCase()}{" "}
          </p>
        </div>
        <div className="my-card-company">
          <img src={props.companyLogo} width={80} />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <CreditCard
      cardNumber={7253325678951245}
      validThru={1105}
      cardHolder={"cardholder"}
      companyLogo={"https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
