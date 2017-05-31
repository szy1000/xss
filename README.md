# xss
Cross Site Scripting

反射型

	发送请求时， xss代码会出现在url中，作为输入提交到服务器端。服务器端解析后响应，xss代码随内容一起穿回给浏览器，最后浏览器端执行xss代码。整个过程像一次反射，故叫反射型xss。


存储型
	
	存储型xss和反射型的区别在于， 提交的代码会存储在服务器（数据库，内存，文件系统等），下次请求目标页面的时候不用再提交xss代码
	
	
	
xss防御措施

	1.编码
		<  &lt;   > &gt;
	2.过滤
		移除用户写的DOM属性  如onerror等
		移除用户上传的style script iframe节点
	3.校正
		避免直接对html entity 解码
		使用DOM Parse准换，校正不配对的DOM标签