import axios from "axios";
export const useLogin = async () => {
  let response = await axios.post("/login", {
    firstName: "Finn",
    lastName: "Williams",
  });

  return {
    id: 4,
    username: "bob",
    email: "bob@bob.com",
    token: "123434343",
  };
};

export const storeUser = (userData: any) => {
  let data = localStorage.setItem("tweeter", JSON.stringify(userData));
  console.log("dtaa");
};
export const getUserData = () => {
  let data: any = localStorage.getItem("tweeter");
  return JSON.parse(data);
};
export const getUserToken = () => {
  let data: any = localStorage.getItem("tweeter");
  if (data) {
    data = JSON.parse(data);
    console.log(data.token);
    return data.token;
  }
  return null;
};
export const isLoggedIn = () => {
  let data: any = getUserToken();
  let loginUrl = window.location.href.split("/");
  console.log(loginUrl[loginUrl.length - 1]);

  if (!data && loginUrl[loginUrl.length - 1] !== "login") {
    window.location.href = "/login";
    return false;
  } else if (data && loginUrl[loginUrl.length - 1] === "login") {
    window.location.href = "/profile";
    return true;
  }
};

export const logOut = () => {
  localStorage.removeItem("tweeter");
  window.location.reload();
};
