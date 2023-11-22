const db = require('../index');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then(data => {
      return data.rows;
    });
};

const getVisitsByUser = (userID) => {
  query = `SELECT * FROM visits WHERE visits.user_id = $1`

  return db.query(query, [userID])
    .then(data => data.rows)
    .catch(error => {
      console.error("Error querying the database: ", error)
      throw error});
}


module.exports = { getUsers, getVisitsByUser };