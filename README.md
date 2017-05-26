# xss
Cross Site Scripting

反射型

	发送请求时， xss代码会出现在url中，作为输入提交到服务器端。服务器端解析后响应，xss代码随内容一起穿回给浏览器，最后浏览器端执行xss代码。整个过程像一次反射，故叫反射型xss。