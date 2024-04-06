import { useState } from "react";

const FeedbackApp = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const questions = [
    {
      id: 1,
      question: "Rate the overall experience:",
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    {
      id: 2,
      question: "How likely are you to recommend us to a friend or colleague?",
      options: ["Very Likely", "Likely", "Unlikely", "Very Unlikely"],
    },
  ];

  const onChangeHandler = (value, objId) => {
    setSelectedAnswers((prev) => {
      const updateObj = prev.filter((obj) => obj.id !== objId);
      return [...updateObj, { id: objId, value: value }];
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {!formSubmitted ? (
        <form onSubmit={formHandler}>
          {questions.map((question) => {
            return (
              <div key={question.id}>
                <p>
                  <strong>{question.question}</strong>
                </p>
                <ul>
                  {question.options.map((option, index) => {
                    return (
                      <li key={index}>
                        <input
                          type="radio"
                          value={option}
                          name={question.id}
                          onChange={(e) =>
                            onChangeHandler(e.target.value, question.id)
                          }
                        />{" "}
                        {option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <button>Submit</button>
        </form>
      ) : (
        <>
          <h2>Thank You for Your Feedback!</h2>
          <p>
            Your Answers: {selectedAnswers.map((obj) => obj.value).join(", ")}
          </p>
        </>
      )}
    </div>
  );
};

export default FeedbackApp;
