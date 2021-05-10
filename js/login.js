const TOKEN = "auth-token";

function login() {
  let options = {
    method: "POST",
  };

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log("INIZIO LOGIN");
  let loginPromise = fetch(
    "http://localhost:8080/login?username=" +
      username +
      "&password=" +
      password,
    options
  );

  loginPromise.then(function (data) {
    console.log("RISPOSTA ARRIVATA");
    console.log(data);
    data.text().then((token) => {
      console.log("TOKEN ARRIVATO:");
      console.log(token);
      //   sessionStorage.setItem(TOKEN, token);
      localStorage.setItem(TOKEN, token);
    });
  });

  console.log("FINE LOGIN");
}

function printToken() {
  //   let token = sessionStorage.getItem(TOKEN);
  let token = localStorage.getItem(TOKEN);
  alert(token);
}

function test() {
  let options = {
    method: "GET",
    headers: {
      "auth-token": localStorage.getItem(TOKEN),
    },
  };

  console.log("INIZIO TEST");
  let userName = null;
  let testPromise = fetch("http://localhost:8080/test", options);

  testPromise.then(function (data) {
    console.log("RISPOSTA ARRIVATA");
    console.log(data);
    data.json().then((user) => {
      console.log("TEST ARRIVATO:");
      console.log(user);
      userName = user["username"];
      document.getElementById("welcome").style = "display: block";
      document.getElementById("dati-utente").innerHTML =
        "NomeUtente: " + userName;
    });
  });

  console.log("FINE TEST");
}
