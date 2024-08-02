var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/bfhl", function (req, res, next) {
	res.send({
		operation_code: 1,
	});
});

router.post("/bfhl", function (req, res, next) {
	const data = req.body;
	let numbers = [];
	let alphabets = [];
	let highestAlphabet = "";

	data.data.forEach((string) => {
		if (!isNaN(string)) {
			numbers.push(string);
		} else {
			alphabets.push(string);
			if (string > highestAlphabet) {
				highestAlphabet = string;
			}
		}
	});

	res.send({
		is_success: true,
		user_id: "avani_kalburge_19042003",
		email: "aa8065@srmist.edu.in",
		roll_number: "RA2111032020005",
		numbers,
		alphabets,
		highest_alphabet: highestAlphabet,
	});
});

module.exports = router;

backend