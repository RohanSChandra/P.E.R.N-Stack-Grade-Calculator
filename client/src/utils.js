const getLetterGrade = (gradeScale, mark, level) => {
  const markValidation = typeof mark !== "number" || mark > 100 || mark < 0;
  const levelValidation = !(level === "Level 5" || level === "Level 6");
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  if (markValidation) {
    throw new Error("Please input a number between 0 and 100");
  }
  if (levelValidation) {
    throw new Error("Please select a valid Level");
  }

  const finalGrade = gradeScale.find((grade) => {
    return (
      grade.level === level && mark >= grade.minMark && mark <= grade.maxMark
    );
  });
  return finalGrade.grade;
};

module.exports = { getLetterGrade };
