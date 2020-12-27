import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/action/user";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    // bad az in ke logout shod karbar hedayat mishe be safhe asli
    history.push("/");
  }, []);
  return null;
};

export default Logout;
