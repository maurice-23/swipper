import { useState } from "react";
function Score() {
  const [score, setScore] = useState("0");
  const [comment, setComment] = useState("No comment");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Ooooh! shit");
    }else{
        alert('Well done')
    }

    setComment("")
    setScore("10")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ width: "15rem" }}>
          <div>
            <label htmlFor="score">Score:{score}⭐</label> <br />
            <input
              type="number"
              name="score"
              style={{ outline: "none" }}
              onChange={(e) => setScore(e.target.value)}
            />
            <br />
            <input
              type="range"
              min={0}
              max={10}
              style={{ outline: "none" }}
              value={score}
            />
          </div>
          <div>
            <label htmlFor="comm">Comment</label>
            <br />
            <textarea name="comm" id="comm" cols="30" rows="10"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            >
            </textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Score;
