var username = window.localStorage.getItem("username");
var password = window.localStorage.getItem("password");

if (username == "Lynn Brehm") {
	if (password == "8092") {
		window.location.replace("customers/93845.html");
	}
}

if (username == "Melissa Grzywa") {
	if (password == "4763") {
		window.location.replace("customers/42544.html");
	}
}

if (username == "Jill Budler") {
	if (password == "9027") {
		window.location.replace("customers/39875.html");
	}
}

if (username == "Barbara Ivancicts") {
	if (password == "8212") {
		window.location.replace("customers/72093.html");
	}
}

if (username == "template") {
	if (password == "template") {
		window.location.replace("customers/template.html");
	}
}

if (username == "Jason Schendt") {
	if (password == "5655") {
		window.location.replace("customers/28546.html");
	}
}

setTimeout(
  function() 
  {
    window.location.href = "./index.html"
  }, 1000);