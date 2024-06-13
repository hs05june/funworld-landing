import axios from "axios";
import { useRouter } from "next/navigation";

const verifyCredentials = async (email, password) => {
  const router = useRouter();

  try {
    const res = await axios.post(
      "https://api2.fwblr.apistack.net/api/auth/admin",
      {
        email: email,
        password: password,
      }
    );

    if (!res.data.token) {
      window.alert("Error verifying Credentials");
      return;
    }

    window.localStorage.setItem("funworldLogin", res.data.token);
    router.replace("/admin");
  } catch (e) {
    console.error("Error occurred:", e);
    window.alert(e);
  }
};

export default verifyCredentials;
