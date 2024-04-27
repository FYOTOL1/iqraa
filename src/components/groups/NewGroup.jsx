import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UserAuth from "../../Middlewares/UserAuth";
import { PostGroup, PostTeam } from "../../redux/reducers/GroupsSlice";
import { Link } from "react-router-dom";

export default function NewGroup() {
  const dispatch = useDispatch();
  const [group_name, setGroup_Name] = useState("");

  const AddSuggestion = () => {
    const user_id = localStorage.getItem("id");
    if (user_id)
      if (group_name?.length)
        if (
          dispatch(PostGroup({ group_name })).then((res) => {
            dispatch(
              PostTeam({
                users_id: [res?.payload?.leader_id],
                group_id: res?.payload?.id,
              })
            );
            console.log(res, { users_id: [res?.leader_id], group_id: res.id });
          })
        ) {
          setGroup_Name("");
          location.pathname = "/groups";
        }
  };

  return (
    <>
      {
        <UserAuth type={"user"} showMsg={true}>
          <div className="flex items-center justify-center w-full h-screen">
            <div className="px-4 py-16 sm:px-6 lg:px-8 w-full">
              <div className="mx-auto w-full lg:w-2/3">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                  مجموعة جديد
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                  بمجرد الضغط على اضافة سوف يتم ارسال مجموعتك الى الادارة
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  method="POST"
                  className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 w-full"
                >
                  <div>
                    <div className="relative">
                      <input
                        onChange={(e) => setGroup_Name(e.target.value)}
                        type="text"
                        name="group_name"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="اسم المجموعة"
                        autoComplete="off"
                        maxLength={15}
                      />

                      <p className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-500">
                        {group_name.length + " / " + 15}
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => AddSuggestion()}
                    className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                  >
                    ارسال
                  </button>{" "}
                  <Link
                    className="text-blue-400 block mx-auto text-center w-fit transition-all hover:text-blue-200"
                    to={"/suggestions"}
                  >
                    الرئيسية
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </UserAuth>
      }
    </>
  );
}
