import React, { useState } from "react";

const ButtonTap = ({number}) => {
  const [toggleState, setToggleState] = useState(number);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const buttons = [
    {
      btnName: "Participent",
      path: "RegistrationPage",
    },
    {
      btnName: "Sponser",
      path: "ExhibitorsPage",
    },
    {
      btnName: "Workshop",
      path: "PostConferencePage",
    },
  ];
  return (
    <div>
      <div className="tab text-center text-lg-end " aria-label="Basic example">
        {buttons.map((btn, index) => (
          <a href={btn.path}   onClick={() => toggleTab(index)} key={index}  className={
            toggleState === index
              ? "program__btn program__btn1"
              : "program__btn program__btn2"
          }>
            {btn.btnName}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ButtonTap;
