exports.install = function (framework) {
    framework.route('/', view_homepage);
    framework.route('/2', view_homepage2);
    framework.route('/data1', json_data1);
    framework.route('/data/', json_data);
    framework.route('/add_data', json_add, ['POST']);
};

function view_homepage() {
    var self = this;
    self.view('homepage1');
}

function view_homepage2() {
    var self = this;
    self.view('homepage2');
}

function json_data(id) {

   var self = this;
   var id = self.get.id;

  // var id = self.get.id.parseInt();
 
    if (id === 0) {
       self.view404();
       return;
    }
   // var id =2;
   var connection = self.database('test');

    connection.connect(function(err) {
        connection.query("SELECT * from users where idusers = ?", [id],function (err, rows) {

            if (err) {
                self.view500(err);
                return;
            }
            console.log(rows);
            self.json(rows);

            // Close connection
            connection.end();
        });
    });
}

function json_add() {

    var self = this;
    var connection = self.database('test');

    connection.connect(function(err) {
        connection.query("Insert into users set ?",{Name:'Dana'}, function (err, rows) {
            
            if (err) {
                self.view500(err);
                return;
            }
            console.log(rows);
            self.json(rows);

            // Close connection
            connection.end();
        });
    });
}

function json_data1() {

   var self = this;
   var connection = self.database('test');

    connection.connect(function(err) {
        connection.query("SELECT * from users",function (err, rows) {

            if (err) {
                self.view500(err);
                return;
            }
            console.log(rows);
            self.json(rows);

            // Close connection
            connection.end();
        });
    });
}