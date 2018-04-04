exports.listSysTables = function (ibmdb, connString) {
	return function (req, res) {

		ibmdb.open(connString, function (err, conn) {
			if (err) {
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify({err:"error occurred " + err.message}));
			}
			else {

				var q = "SELECT * FROM DASH14989.HDB_Summary";
				conn.query(q, function (err, tables, moreResultSets) {

					var result = {rows:tables};
					if (!err) {
						res.setHeader('Content-Type', 'application/json');
						res.send(JSON.stringify(tables));
						// res.render('tablelist', {
						// 	"tablelist" : tables,
						// 	"tableName" : "10 rows from the GOSALESHR.EMPLOYEE table",
						// 	"message": "Congratulations. Your connection to dashDB is successful."

						//  });


					} else {
						res.setHeader('Content-Type', 'application/json');
						res.send(JSON.stringify({err:"error occurred " + err.message}));
					}

					/*
						Close the connection to the database
						param 1: The callback function to execute on completion of close function.
					*/
					conn.close(function () {
						console.log("Connection Closed");
					});
				});
			}
		});

	}
}