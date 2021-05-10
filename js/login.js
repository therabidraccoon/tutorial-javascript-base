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
    });
  });

  console.log("FINE LOGIN");
}
