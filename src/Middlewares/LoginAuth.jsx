import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../redux/reducers/UsersSlice";

export default function LoginAuth({ children }) {
  const Store = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [Authed, setAuthed] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      dispatch(GetUser({ id }));
    }
  }, []);

  useEffect(() => {
    if (Store.user.status) {
      setAuthed(true);
      location.pathname = "/";
    } else {
      setAuthed(false);
    }
  });

  console.log(Store.user);

  return !Authed ? children : null;
}
