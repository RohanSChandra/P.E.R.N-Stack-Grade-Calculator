import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { getLetterGrade } from "../utils";
import styles from "./GradeConverterForm.module.css";

const GradeConverterForm = ({ gradeScale }) => {
  const [level, setLevel] = useState("Level 5");
  const [mark, setMark] = useState(0);
  const [grade, setGrade] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const letterGrade = getLetterGrade(gradeScale, mark, level);
      setGrade(letterGrade);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {grade && (
        <p className={styles.responseMessage}>
          The grade for mark {mark} at {level} is {grade}.
        </p>
      )}
      <form className={styles.mainForm} onSubmit={handleSubmit}>
        <div className={styles.firstLabel}>
          <label className={styles.labelName} htmlFor="level">
            Level
          </label>
          <select
            className={styles.mainFormSelect}
            id="level"
            value={level}
            onChange={(e) => {
              setGrade("");
              setLevel(e.target.value);
            }}
          >
            <option value="Level 5">Level 5</option>
            <option value="Level 6">Level 6</option>
          </select>
        </div>
        <div className={styles.secondLabel}>
          <label className={styles.markName} htmlFor="mark">
            Mark
          </label>
          <input
            className={styles.mainFormNumber}
            id="mark"
            type="number"
            value={mark}
            onChange={(e) => {
              setGrade("");
              setMark(Number(e.target.value));
            }}
          />
        </div>
        <button className={styles.mainFormButton}>Get Grade</button>
      </form>
    </>
  );
};

export default GradeConverterForm;
