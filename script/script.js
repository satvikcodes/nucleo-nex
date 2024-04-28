    <script type="module">
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
      import {
        getDatabase,
        child,
        get,
        ref,
      } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
      import {
        getAuth,
        signInWithEmailAndPassword,
      } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

      const firebaseConfig = {
        apiKey: "AIzaSyBA7RX-6tZ1AjmwohEeMfg2FLKsFkEMDOc",
        authDomain: "login-example-36b81.firebaseapp.com",
        projectId: "login-example-36b81",
        storageBucket: "login-example-36b81.appspot.com",
        messagingSenderId: "865732121075",
        appId: "1:865732121075:web:958a2ecdc7a54517200286",
      };

      const app = initializeApp(firebaseConfig);
      const db = getDatabase();
      const auth = getAuth(app);
      const dbref = ref(db);

      let EmailIn = document.getElementById("email");
      let PasswordIn = document.getElementById("pass");
      let MainForm = document.getElementById("form");

      let SignInUser = (evt) => {
        evt.preventDefault();

        signInWithEmailAndPassword(auth, EmailIn.value, PasswordIn.value)
          .then((credentials) => {
            get(child(dbref, "UsersAuthList/" + credentials.user.uid)).then((snapshot) => {
              if (snapshot.exists) {
                sessionStorage.setItem(
                  "user-info",
                  JSON.stringify({
                    firstname: snapshot.val().firstname,
                    lastname: snapshot.val().lastname,
                  })
                );
                sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                document.location.href = "home.html";
              }
            });
          })
          .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
          });
      };
      MainForm.addEventListener("submit", SignInUser);
    </script>