const login = (userCredentials) => {
  // login function
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredentials),
  }).then((data) => data.json());
};

const logout = (userCredentials) => {
  localStorage.removeItem("token");
  // TODO: Maybe need to inform backend.
  // But this moment just remove localstorage enough
};
