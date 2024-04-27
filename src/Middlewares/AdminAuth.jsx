import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetUser } from "../redux/reducers/UsersSlice";
import MessagePage from "../pages/MessagePage";

// eslint-disable-next-line react/prop-types
export default function AdminAuth({ children }) {
  const Store = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [Authed, setAuthed] = useState(null);
  const [User_id, setUser_id] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function Check() {
    let id = localStorage.getItem("id");

    if (id && User_id == null) {
      dispatch(GetUser({ id })).then(() => {
        setUser_id(id);
      });
    }
  }

  useEffect(() => {
    Check();
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (Store.user.status == "4" || Store.user.status == "3") {
      setAuthed(true);
    } else if (Store.user.status == "1" || Store.user.status == "2") {
      setAuthed(false);
    }
  });

  return (
    <>
      {Authed ? (
        children
      ) : User_id ? (
        <MessagePage
          msg={"لا يمكنك الوصول الى هذه الصفحة تحتاج الى صلاحيات من الادراة"}
          color={"text-red-500"}
          path="/"
          pathName="الرئيسية"
        />
      ) : (
        <MessagePage
          msg={"عليك تسجيل الدخول اولا للوصول الى هذه الصفحة"}
          color={"text-red-500"}
          path="/login"
          pathName="تسجيل الدخول"
        />
      )}
    </>
  );
}
