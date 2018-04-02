exports.listSysTables = function (ibmdb, connString) {
	return function (req, res) {


		ibmdb.open(connString, function (err, conn) {
			console.log("Inspect query params", req.query);
			let queryParams = [req.query.mrt, req.query.market, , req.query.food, , req.query.clinic, 10];
			if (err) {
				res.json({ err: "error occurred " + err.message });
			}
			else {
				let q = `SELECT FIRST_NAME, LAST_NAME, EMAIL, WORK_PHONE from GOSALESHR.employee FETCH FIRST 10 ROWS ONLY`
				conn.query(q, queryParams, function (err, tables, moreResultSets) {


					if (!err) {
						res.json({ result: "Query result " + JSON.stringify(tables) });


					} else {
						res.json({ err: "error occurred " + err.message });
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