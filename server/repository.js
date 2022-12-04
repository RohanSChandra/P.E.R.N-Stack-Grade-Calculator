const db = require("./db");

module.exports = {
  getGradeScale: async () => {
    try {
      const result = await db.query(
        `SELECT 
        id, level, min_mark AS "minMark",
        max_mark AS "maxMark", grade
        FROM grade_scale 
        ORDER BY
          id
        `
      );
      return result.rows;
    } catch (err) {
      throw Error(err);
    }
  },
};
