import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  DeleteTeam,
  GetGroup,
  PostChat,
  PostTeam,
} from "../../redux/reducers/GroupsSlice.js";
import { GetUsers } from "../../redux/reducers/UsersSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { PostNotification } from "../../redux/reducers/NotificationsSlice.js";

export default function Group() {
  const Store = useSelector((state) => state.groups);
  let Store_Users = useSelector((state) => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [ChatMessage, setChatMessage] = useState("");
  const [Add_User_Mode, setAdd_User_Mode] = useState(false);
  const [Selected_Team, setSelected_Team] = useState([]);

  useEffect(() => {
    let interval;

    dispatch(GetGroup({ id: id }));

    if (location.pathname === `/groups/${Store?.group?.id}`) {
      interval = setInterval(() => {
        dispatch(GetGroup({ id: id }));
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [id, location.pathname, Store?.group?.id]);

  const PostMessage = () => {
    if (ChatMessage.length >= 1) {
      dispatch(
        PostChat({
          user_id: localStorage.getItem("id"),
          group_id: Store?.group?.id,
          content: ChatMessage,
        })
      ).then(() => {
        dispatch(GetGroup({ id: id }));
        setChatMessage("");
      });
    }
  };

  const Active_Add_User_Mode = () => {
    dispatch(GetUsers()).then(() => setAdd_User_Mode(true));
  };

  const SelectUser = (event) => {
    const selectedId = event.target.value;

    const userExists = Selected_Team.some((userId) => userId === selectedId);

    if (userExists) {
      const updatedList = Selected_Team.filter(
        (userId) => userId !== selectedId
      );
      setSelected_Team(updatedList);
    } else {
      setSelected_Team([...Selected_Team, selectedId]);
    }
  };

  const Add_To_Team = () => {
    if (Selected_Team.length >= 1) {
      if (
        dispatch(
          PostTeam({ users_id: Selected_Team, group_id: Store?.group?.id })
        )
      ) {
        setAdd_User_Mode(false);
        dispatch(GetGroup({ id: id }));
      }
    }
  };

  const Delete_from_Team = (e) => {
    if (dispatch(DeleteTeam({ id: e?.id }))) {
      dispatch(
        PostNotification({
          from_id: Store?.group?.leader_id,
          to_id: e?.user_id,
          message: `${Store?.group?.group_name} تمت ازالتك من مجموعة`,
          status: 1,
        }).then(() =>
          dispatch(GetGroup({ id: location.pathname.split("/")[2] }))
        )
      );
    }
  };

  return (
    <>
      <div className="my-5 px-3 lg:container mx-auto">
        <Link
          className="flex items-baseline gap-1 bg-gray-100 w-fit px-2 md:px-3 py-[3px] md:py-1 text-sm md:text-base rounded-[4px] transition-all hover:text-gray-600 shadow-sm shadow-gray-200 outline outline-1 outline-gray-100"
          to={"/groups"}
        >
          <i className="fa-solid fa-angles-left"></i>
          <p>رجوع</p>
        </Link>

        <div className="flex items-center justify-between mt-10">
          <h1 className="text-2xl md:text-4xl">{Store?.group?.group_name}</h1>
          <Link
            to={`/groups/${Store?.group?.id}/new`}
            className="flex items-baseline flex-row-reverse gap-1 md:gap-2 px-2 md:px-4 py-[6px] md:py-2 text-[10px] md:text-base bg-blue-500 rounded-[4px] text-white transition-all hover:opacity-85"
          >
            <p>اضافة مشروع</p>
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>

        <hr className="mb-10 mt-1 md:mt-2" />

        <div className="flex justify-between flex-col md:flex-row gap-2 mt-7">
          <div className="w-full md:w-[60%] bg-gray-100 shadow-sm py-3 pt-0 rounded-[4px] outline outline-1 outline-gray-100 overflow-hidden">
            <header className="flex items-center gap-w justify-between outline outline-1 outline-gray-200 w-full py-3 bg-white px-3 overflow-hidden">
              <div className="flex items-center gap-2">
                <p className="px-2 py-1 bg-blue-500 rounded-[4px] text-white">
                  الاعضاء : {Store?.group?.team?.length}
                </p>
                <p className="px-2 py-1 bg-blue-500 rounded-[4px] text-white">
                  المشاريع : {Store?.group?.projects?.length}
                </p>
              </div>
              {!Add_User_Mode ? (
                <button
                  onClick={() => Active_Add_User_Mode()}
                  className="flex items-baseline flex-row-reverse gap-1 px-2 py-1 bg-green-500 text-white rounded-[4px]"
                >
                  <p>اضافة</p>
                  <i className="fa-solid fa-plus"></i>
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAdd_User_Mode(false)}
                    className="flex items-baseline flex-row-reverse gap-1 px-2 py-1 bg-red-500 text-white rounded-[4px]"
                  >
                    <p>الغاء</p>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button
                    onClick={() => Add_To_Team()}
                    className="flex items-baseline flex-row-reverse gap-1 px-2 py-1 bg-blue-500 text-white rounded-[4px]"
                  >
                    <p>اضافة</p>
                  </button>
                </div>
              )}
            </header>

            {/* Users */}
            <div className="flex flex-col gap-2 w-full p-2">
              {Store?.group?.team && !Add_User_Mode
                ? Store?.group?.team?.map((e) => (
                    <div
                      key={e?.id}
                      className="flex justify-between items-center w-full py-2 px-2 bg-white rounded-md shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        {e?.user_data?.avatar ? (
                          <img
                            loading="lazy"
                            className="h-6 w-6 rounded-full"
                            src={`http://localhost/iqraa/avatars/${e?.user_data?.avatar}`}
                            alt="Avatar"
                          />
                        ) : (
                          <i className="fa-solid fa-user flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-xs"></i>
                        )}
                        <p>
                          {e?.username} • {e?.position}
                        </p>
                      </div>

                      {localStorage.getItem("id") == Store?.group?.leader_id ? (
                        <button
                          onClick={(f) => Delete_from_Team(e)}
                          className="bg-red-500 text-white h-6 w-11 rounded-[4px] text-sm transition-all hover:opacity-80"
                        >
                          ازالة
                        </button>
                      ) : null}
                    </div>
                  ))
                : Store_Users?.data?.map((e) => (
                    <div
                      key={e?.id}
                      className={`flex justify-between items-center w-full py-2 px-2 bg-white rounded-md shadow-sm ${
                        Store?.group?.team?.some((f) => f.user_id == e?.id)
                          ? "opacity-80 bg-blue-100"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {e?.avatar ? (
                          <img
                            loading="lazy"
                            className="h-6 w-6 rounded-full"
                            src={`http://localhost/iqraa/avatars/${e?.avatar}`}
                            alt="Avatar"
                          />
                        ) : (
                          <i className="fa-solid fa-user flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-xs"></i>
                        )}
                        <p>{e?.username}</p>
                      </div>
                      <input
                        disabled={Store?.group?.team?.some(
                          (f) => f.user_id == e?.id
                        )}
                        onChange={(f) => SelectUser(f)}
                        type="checkbox"
                        value={e.id}
                      />
                    </div>
                  ))}
            </div>
          </div>
          {/* Chat */}
          <div className="w-full md:w-[40%]">
            <div className="relative flex justify-between flex-col w-full h-[500px] rounded-md outline outline-1 outline-zinc-200 shadow-sm overflow-hidden">
              <div className="flex flex-col-reverse gap-5 h-[90%] w-full bg-white">
                <div className="flex flex-col flex-grow w-full rounded-lg overflow-y-scroll overflow-hidden">
                  <div className="flex flex-col items-end flex-grow p-4">
                    {Store?.chat &&
                      Store?.chat?.map((e) => (
                        <div
                          key={e.id}
                          className={`flex ${
                            localStorage.getItem("id") == e?.user_id
                              ? "flex-row"
                              : "flex-row-reverse"
                          } gap-2 w-full mt-7`}
                        >
                          <div>
                            {e?.user_data?.avatar ? (
                              <img
                                loading="lazy"
                                className="h-7 w-7 rounded-full shadow-sm"
                                src={`http://localhost/iqraa/avatars/${e?.user_data?.avatar}`}
                                alt="Avatar"
                              />
                            ) : (
                              <i className="fa-solid fa-user flex items-center justify-center h-7 w-7 rounded-full bg-gray-100 text-xs shadow-md shadow-gray-100"></i>
                            )}
                          </div>
                          <div>
                            <p
                              className={`text-sm ${
                                localStorage.getItem("id") == e?.user_id
                                  ? "text-start"
                                  : "text-end"
                              }`}
                            >
                              {e.user_data.username}
                            </p>
                            <p
                              className={`text-gray-600 text-sm ${
                                localStorage.getItem("id") == e?.user_id
                                  ? "text-left"
                                  : "text-right"
                              } `}
                            >
                              {e.username}
                            </p>
                            <div
                              className={`${
                                localStorage.getItem("id") == e.user_id
                                  ? "bg-blue-400 text-white"
                                  : "bg-gray-100"
                              } p-2 rounded-r-lg rounded-bl-lg [overflow-wrap:break-word] max-w-44 sm:max-w-64 md:max-w-44 lg:max-w-64 xl:max-w-96 text-[#333]`}
                            >
                              {e.content}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 h-[10%] px-1 py-1">
                <input
                  onChange={(t) => setChatMessage(t.target.value)}
                  dir="rtl"
                  className="h-full w-[75%] rounded-[4px] px-3 outline outline-1 outline-gray-200 shadow-sm text-gray-800 transition-all focus:outline-gray-400"
                  type="text"
                  placeholder="رسالة"
                  value={ChatMessage}
                />
                <button
                  disabled={ChatMessage.length >= 1 ? false : true}
                  onClick={(s) => PostMessage()}
                  className="w-[25%] bg-blue-500 h-full rounded-md text-white transition-all hover:opacity-90"
                >
                  ارسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
