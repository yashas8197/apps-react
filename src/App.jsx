import { useState } from "react";

export default function App() {
  const [answer, setAnswer] = useState([]);
  const [formSubmitter, setFormSubmitted] = useState(false);
  const [formSubmission, setFormSubmission] = useState(false);
  const [answer1, setAnswer1] = useState([]);
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

  const questions1 = [
    {
      id: 1,
      question: "Favorite Movie Genre?",
      options: ["Action", "Comedy", "Drama", "Sci-Fi"],
    },
    {
      id: 2,
      question: "Favorite Movie of All Time?",
      options: [
        "The Shawshank Redemption",
        "The Godfather",
        "Pulp Fiction",
        "The Dark Knight",
      ],
    },
  ];
  const clickHandler = (option, questionId) => {
    const updateAnswer = answer.filter((ans) => ans.questionId !== questionId);
    setAnswer([...updateAnswer, { questionId, option }]);
  };

  const formHandler = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const FeedbackApp = () => {
    return (
      <div>
        {!formSubmitter ? (
          <form onSubmit={formHandler}>
            {questions.map((question) => {
              return (
                <div key={question.id}>
                  <h2>{question.question}</h2>
                  <ul>
                    {question.options.map((option, index) => {
                      return (
                        <li key={index}>
                          <input
                            type="radio"
                            value={option}
                            name={question.id}
                            checked={option === true}
                            onChange={(event) =>
                              clickHandler(event.target.value, question.id)
                            }
                          />
                          {option}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h2>Thank you for your Feedback</h2>
            <p>Your Feedback: {answer.map((ans) => ans.option + " ")}</p>
          </div>
        )}
      </div>
    );
  };

  const formHandler1 = (event) => {
    event.preventDefault();
    setFormSubmission(true);
  };

  const onChangeHandler1 = (option, questionId) => {
    const updatedAnswer = answer1.filter(
      (ans) => ans.questionId !== questionId,
    );
    setAnswer1([...updatedAnswer, { questionId, option }]);
  };

  const FavMovieApp = () => {
    return (
      <div>
        {!formSubmission ? (
          <form onSubmit={formHandler1}>
            {questions1.map((question1) => {
              return (
                <div key={question1.id}>
                  <h2>{question1.question}</h2>
                  <ul>
                    {question1.options.map((option, index) => {
                      return (
                        <li key={index}>
                          <input
                            value={option}
                            type="radio"
                            name={question1.id}
                            onChange={(event) =>
                              onChangeHandler1(event.target.value, question1.id)
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
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h2>Thank you for Sharing!</h2>
            <p>{answer1.map((ans) => ans.option + ", ")}</p>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="App">
      <h1>Feedback App</h1>
      <FeedbackApp />
      <br />
      <FavMovieApp />
    </div>
  );
}
