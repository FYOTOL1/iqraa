/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MessagePage from "../pages/MessagePage";
import { GetUser } from "../redux/reducers/UsersSlice";

export default function CheckAccount({
  children,
  showMsg = false,
  type,
  pathName,
  path,
  msg,
}) {
  const Store = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [Authed, setAuthed] = useState(null);
  const [User_id, setUser_id] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let id = localStorage.getItem("id");
    if (id && !User_id) {
      dispatch(GetUser({ id }));
      setUser_id(id);
    }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (Store.user.status) {
      setAuthed(true);
    }
  });


  return (
    <>
      {Authed && User_id ? (
        children
      ) : type == "user" && !User_id && showMsg == true ? (
        <MessagePage
          msg={msg ?? "Can't Access This Page"}
          path={path ?? "/"}
          pathName={pathName ?? "الرئيسية"}
          color={"gray"}
        />
      ) : null}
    </>
  );
}
