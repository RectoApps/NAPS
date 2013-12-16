var mysql = require('mysql');

framework.database = function (name) {
    // Create a connection to MySql Server and Database
    return new mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: name,
        user: 'root',
        password: 'myPassword'
    });
};


