import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UserAuth from "../../Middlewares/UserAuth";
import { PostSuggestion } from "../../redux/reducers/SuggestionsSlice";
import { Link } from "react-router-dom";

export default function NewSuggestion() {
  const dispatch = useDispatch();
  const [suggs_name, setSuggs_name] = useState("");
  const [content, setContent] = useState("");

  const AddSuggestion = () => {
    const user_id = localStorage.getItem("id");
    if (user_id)
      if (suggs_name.length && content.length)
        if (dispatch(PostSuggestion({ user_id, suggs_name, content }))) {
          location.pathname = "/suggestions";
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
                  اقتراح جديد
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                  بمجرد الضغط على اضافة سوف يتم ارسال اقتراحك الى الادارة
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  method="POST"
                  className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 w-full"
                >
                  <div>
                    <div className="relative">
                      <input
                        onChange={(e) => setSuggs_name(e.target.value)}
                        type="text"
                        name="suggs_name"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="موضوع الاقتراح"
                        autoComplete="off"
                        maxLength={15}
                      />

                      <p className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-500">
                        {suggs_name.length + " / " + 15}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        name="content"
                        className="w-full rounded-lg border-gray-200 p-4 pe-16 text-sm shadow-sm"
                        placeholder="وصف الاقتراح"
                        autoComplete="off"
                        maxLength={40}
                      />

                      <p className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-500">
                        {content.length + " / " + 40}
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
