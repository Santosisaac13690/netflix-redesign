import React, { useState } from "react";

const Faq = ({title, body}) => {
    const [isAnswerVisible, setAnswerVisible] = useState(false);
    console.log(title)
  return (
    <div className="faq-container">
      <div className="faq-header"
      onClick={() => {
        setAnswerVisible(!isAnswerVisible);
      }}>
        <h3>{title}</h3>
        <h3>&#10011;</h3>
      </div>
      {isAnswerVisible && (
          <div className="faq-body">
          {body}
          </div>
      )}
    </div>
  );
};

export default Faq;
