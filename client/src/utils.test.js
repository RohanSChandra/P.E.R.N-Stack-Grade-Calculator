import { getLetterGrade } from "./utils";

const gradeScale = [
  {
    level: "Level 5",
    minMark: 90,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 5",
    minMark: 85,
    maxMark: 89,
    grade: "A",
  },
  {
    level: "Level 5",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 5",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 5",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 5",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 5",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 5",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 5",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 5",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 5",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
  {
    level: "Level 6",
    minMark: 92,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 6",
    minMark: 85,
    maxMark: 91,
    grade: "A",
  },
  {
    level: "Level 6",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 6",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 6",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 6",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 6",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 6",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 6",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 6",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 6",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
];

describe.each([
  {
    level: "Level 5",
    actualMark: 100,
    expectedGrade: "A+",
  },
  {
    level: "Level 5",
    actualMark: 90,
    expectedGrade: "A+",
  },
  {
    level: "Level 5",
    actualMark: 88,
    expectedGrade: "A",
  },
  {
    level: "Level 5",
    actualMark: 86,
    expectedGrade: "A",
  },
  {
    level: "Level 5",
    actualMark: 83,
    expectedGrade: "A-",
  },
  {
    level: "Level 5",
    actualMark: 81,
    expectedGrade: "A-",
  },
  {
    level: "Level 5",
    actualMark: 78,
    expectedGrade: "B+",
  },
  {
    level: "Level 5",
    actualMark: 76,
    expectedGrade: "B+",
  },
  {
    level: "Level 5",
    actualMark: 73,
    expectedGrade: "B",
  },
  {
    level: "Level 5",
    actualMark: 71,
    expectedGrade: "B",
  },
  {
    level: "Level 5",
    actualMark: 68,
    expectedGrade: "B-",
  },
  {
    level: "Level 5",
    actualMark: 66,
    expectedGrade: "B-",
  },
  {
    level: "Level 5",
    actualMark: 63,
    expectedGrade: "C+",
  },
  {
    level: "Level 5",
    actualMark: 61,
    expectedGrade: "C+",
  },
  {
    level: "Level 5",
    actualMark: 58,
    expectedGrade: "C",
  },
  {
    level: "Level 5",
    actualMark: 56,
    expectedGrade: "C",
  },
  {
    level: "Level 5",
    actualMark: 53,
    expectedGrade: "C-",
  },
  {
    level: "Level 5",
    actualMark: 51,
    expectedGrade: "C-",
  },
  {
    level: "Level 5",
    actualMark: 48,
    expectedGrade: "D",
  },
  {
    level: "Level 5",
    actualMark: 41,
    expectedGrade: "D",
  },
  {
    level: "Level 5",
    actualMark: 38,
    expectedGrade: "E",
  },
  {
    level: "Level 6",
    actualMark: 92,
    expectedGrade: "A+",
  },
  {
    level: "Level 6",
    actualMark: 91,
    expectedGrade: "A",
  },
  {
    level: "Level 6",
    actualMark: 87,
    expectedGrade: "A",
  },
  {
    level: "Level 6",
    actualMark: 83,
    expectedGrade: "A-",
  },
  {
    level: "Level 6",
    actualMark: 81,
    expectedGrade: "A-",
  },
  {
    level: "Level 6",
    actualMark: 78,
    expectedGrade: "B+",
  },
  {
    level: "Level 6",
    actualMark: 76,
    expectedGrade: "B+",
  },
  {
    level: "Level 6",
    actualMark: 73,
    expectedGrade: "B",
  },
  {
    level: "Level 6",
    actualMark: 71,
    expectedGrade: "B",
  },
  {
    level: "Level 6",
    actualMark: 68,
    expectedGrade: "B-",
  },
  {
    level: "Level 6",
    actualMark: 66,
    expectedGrade: "B-",
  },
  {
    level: "Level 6",
    actualMark: 63,
    expectedGrade: "C+",
  },
  {
    level: "Level 6",
    actualMark: 61,
    expectedGrade: "C+",
  },
  {
    level: "Level 6",
    actualMark: 58,
    expectedGrade: "C",
  },
  {
    level: "Level 6",
    actualMark: 56,
    expectedGrade: "C",
  },
  {
    level: "Level 6",
    actualMark: 53,
    expectedGrade: "C-",
  },
  {
    level: "Level 6",
    actualMark: 51,
    expectedGrade: "C-",
  },
  {
    level: "Level 6",
    actualMark: 48,
    expectedGrade: "D",
  },
  {
    level: "Level 6",
    actualMark: 41,
    expectedGrade: "D",
  },
  {
    level: "Level 6",
    actualMark: 32,
    expectedGrade: "E",
  },
])("getLetterGrade happy path", ({ level, actualMark, expectedGrade }) => {
  test(`Should return ${expectedGrade} when the level is ${level} and the mark is ${actualMark}  `, () => {
    expect(getLetterGrade(gradeScale, actualMark, level)).toEqual(
      expectedGrade
    );
  });
});

describe("getLetterGrade negative path", () => {
  test("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });
  test("Throws an error if the user selects another level other than level 5 or level 6", () => {
    const mark = 100;
    const level = "Level 3";
    expect(() => getLetterGrade(gradeScale, mark, level)).toThrow(
      "Please select a valid Level"
    );
  });
});
describe.each([
  {
    level: "Level 5",
    actualMark: "Hello World",
    expectedMessage: "Please input a number between 0 and 100",
  },
  {
    level: "Level 6",
    actualMark: "Test Place Holder",
    expectedMessage: "Please input a number between 0 and 100",
  },
  {
    level: "Level 5",
    actualMark: 152,
    expectedMessage: "Please input a number between 0 and 100",
  },
  {
    level: "Level 6",
    actualMark: 203,
    expectedMessage: "Please input a number between 0 and 100",
  },
  {
    level: "Level 5",
    actualMark: -52,
    expectedMessage: "Please input a number between 0 and 100",
  },
  {
    level: "Level 6",
    actualMark: -67,
    expectedMessage: "Please input a number between 0 and 100",
  },
])(
  "getLetterGrade unhappy path for error message",
  ({ level, actualMark, expectedMessage }) => {
    test(`Should return ${expectedMessage} when the level is ${level} and mark is ${actualMark}`, () =>
      expect(() => getLetterGrade(gradeScale, actualMark, level)).toThrow(
        expectedMessage
      ));
  }
);
