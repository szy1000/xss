var express = require('express');
var router = express.Router();

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

/* GET home page. */
router.get('/', function(req, res, next) {
	res.set('X-XSS-Protection',0);   //关闭XSS攻击
  res.render('index', { title: 'Express',xss: req.query.xss });
});

router.get('/xss', function(req, res, next) {
  res.render('xss', { title: 'Express' });
});


router.get('/comment', function(req,res,next){
	comments.v = html_encode(req.query.comment);
})

router.get('/getComment', function(req,res,next){
	res.json({
		comment:comments.v,
		
	})
})

module.exports = router;
