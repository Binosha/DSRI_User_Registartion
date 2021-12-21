var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123"
});

//connect with the database
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Insert into
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO `dsri_users`.`dsri_user_details` (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

module.exports = {
  test_db_insert: function (name) {
     alert(name)
  },
};