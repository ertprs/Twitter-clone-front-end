import axios from "axios";
import { notify } from "../hooks/useNotification";
import Swal from "sweetalert2";
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
    localStorage.setItem("userlogingImage", data.user.profilePic);
    return data.token;
  }
  return null;
};
export const isLoggedIn = () => {
  let data: any = getUserToken();
  let loginUrl = window.location.href.split("/");
  console.log(loginUrl[loginUrl.length - 1]);

  if (
    !data &&
    loginUrl[loginUrl.length - 1] !== "login" &&
    loginUrl[loginUrl.length - 1] !== "signup"
  ) {
    window.location.href = "/login";
    return false;
  } else if (data && loginUrl[loginUrl.length - 1] === "login") {
    window.location.href = "/";
    return true;
  }
};

export const logOut = () => {
  localStorage.removeItem("tweeter");
  Swal.fire({
    icon: "success",
    title: "Signing Out Account",
    showConfirmButton: false,
    timer: 1500,
  });
  // notify("success", "Signing Out Account", true);
  window.location.reload();
};
