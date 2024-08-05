export const loginApiCall = () => {
  let result = fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "emilys",
      password: "emilyspass",
    }),
  }).then((res) => res.json());

  return result;
};
