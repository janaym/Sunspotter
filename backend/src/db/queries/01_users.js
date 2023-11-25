const db = require('../index');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then(data => {
      return data.rows;
    });
};

const getUserByID = (id) => {
  return db.query(`SELECT * FROM USERS WHERE id = $1;`, [id])
    .then(data => {
      return data.rows;
    });
};

const getVisitsByUser = (userID) => {
  query = `SELECT spots.name as spot_name, visits.id as id, visits.time_stamp as date, visits.image_url as image_url, spots.lat, spots.lng 
    FROM visits 
    JOIN spots ON spots.id = visits.spot_id
    WHERE visits.user_id = $1`

  return db.query(query, [userID])
    .then(data => data.rows)
    .catch(error => {
      console.error("Error querying the database: ", error)
      throw error});
};

const getSavesByUser = function(userID) {
  const query = `SELECT SPOTS.id, SPOTS.lat AS lat, SPOTS.lng AS lng, SPOTS.name AS spotName, SPOTS.city AS city, SPOTS.province AS province, SPOTS.country AS country 
                            FROM SPOTS
                            JOIN SAVES ON SPOTS.id = SAVES.spot_id
                            JOIN VISITS ON SPOTS.id = VISITS.spot_id
                            WHERE SAVES.user_id = $1 GROUP BY spots.id;`;
  return db.query(query, [userID]).then((data) => data.rows);
};


module.exports = { getUsers, getUserByID, getVisitsByUser, getSavesByUser };
