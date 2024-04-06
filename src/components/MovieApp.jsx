import { useState } from "react";

const MovieApp = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const questions = [
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

  const onChangeHandler = (value, objId) => {
    setSelectedAnswers((prev) => {
      const updatedObj = prev.filter((obj) => obj.id !== objId);
      return [...updatedObj, { id: objId, answer: value }];
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
          <h1>Favorite Movie App</h1>
          {questions.map((question) => {
            return (
              <div key={question.id}>
                <p>{question.question}</p>
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
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Thank you for sharing your Favortes!</h3>
          <p>{selectedAnswers.map((obj) => obj.answer).join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default MovieApp;
