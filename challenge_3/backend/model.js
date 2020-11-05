const db = require('./connection.js');

const logToDB = (input, callback) => {
  // console.log(`'${input.firstName}', '${input.lastName}', '${input.email}', '${input.password}', '${input.address}', '${input.address2}', '${input.city}', '${input.state}', '${input.phone}', '${input.CC}', ${Number(input.month)}, ${Number(input.year)}, ${Number(input.cvv)})`);
  console.log('logToDB received', input);
  db.connection.query(`INSERT INTO customers (firstName, lastName, email, password, address, address2, city, state, phone, CC, month, year, cvv ) VALUES ('${input.firstName}', '${input.lastName}', '${input.email}', '${input.password}', '${input.address}', '${input.address2}', '${input.city}', '${input.state}', '${input.phone}', '${input.CC}', '${input.month}', ${Number(input.year)}, ${Number(input.cvv)})`, (err) => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  })
}

module.exports.logToDB = logToDB;

