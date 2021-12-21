var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123"
});




module.exports = {
    user_insert: function (userObj) {
        //connect with the database
        con.connect(function (err) {
            if (err) throw err;
            console.log(userObj.name)
            console.log("Connected!");
            var sql = "INSERT INTO dsri_users.dsri_user_details ("
                + "name,"
                + "username,"
                + "email,"
                + "faculty,"
                + "organization,"
                + "project_type,"
                + "project_name,"
                + "project_description,"
                + "github_url,"
                + "docker,"
                + "gpu_access,"
                + "exp_date,"
                + "shared,"
                + "users,"
                + "known,"
                + "data,"
                + "reg_date,"
                + "condition_val)"
                + "VALUES ("
                + "\'" + userObj.name + "\',"
                + "\'" + userObj.username + "\',"
                + "\'" + userObj.email + "\',"
                + "\'" + userObj.faculty + "\',"
                + "\'" + userObj.organization + "\',"
                + "\'" + userObj.projtype + "\',"
                + "\'" + userObj.projname + "\',"
                + "\'" + userObj.projdes + "\',"
                + "\'" + userObj.repo + "\',"
                + "\'" + userObj.docker + "\',"
                + "\'" + userObj.gpu + "\',"
                + "\'" + userObj.expdate + "\',"
                + "\'" + userObj.shared + "\',"
                + "\'" + userObj.nouser + "\',"
                + "\'" + userObj.known + "\',"
                + "\'" + userObj.data + "\',"
                + "\'" + userObj.reg_date + "\',"
                + "\'" + userObj.condition + "\'"
                + ")";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
        });
    },
};