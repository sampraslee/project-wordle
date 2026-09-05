import React from "react";

function GuessInput() {
  const [userGuess, setUserGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(userGuess);
        // select the input by the ID and reset the value
        document.querySelector("#guess-input").value = "";
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={userGuess}
        pattern="^[a-zA-Z]{5}$"
        maxLength={5}
        onChange={(event) => {
          setUserGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
