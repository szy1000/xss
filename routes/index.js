var express = require('express');
var router = new express.Router();

var comments = {};


function html_encoude(str){
	var s = '';
	if(str.length == 0) return "";

	s = str.replace(/&/g,"&gt;");
	s = s.replace(/</g,"&lt;");
	s = s.replace(/>/g,"&gt;");
	s = s.replace(/\s/g,"&nbsp;");
	s = s.replace(/\'/g,"&#39;");
	s = s.replace(/\"/g,"&quto;");
	s = s.replace(/\n/g,"<br>");
	return s;
}
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };
router.get('/', function(req,res,next){
	res.render('index', { title: 'Express' })
})

router.get('/comment', function(req,res,next){
	comments.v = html_encode(req.query.comment);
});

router.get('/getComment', function(req,res,next){
	res.json({
		comment:comments.v,
	})
});

module.exports = router;

// module.exports = function(req,res){
// 	res.send("respond with a resource");
// }