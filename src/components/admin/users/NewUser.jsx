import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { PostUser } from "../../../redux/reducers/UsersSlice";

export default function NewUser() {
  const dispatch = useDispatch();

  let formRef = useRef();
  let imgRef = useRef();
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Msg, setMsg] = useState("");

  const Avatar_Handler = () => {
    const data = new FormData(formRef.current);
    const src = URL.createObjectURL(data.get("avatar"));
    imgRef.current.src = src;
  };

  const Signup_Handler = (e) => {
    e.preventDefault();
    if (avatar && username && email && password) {
      let formData = new FormData();

      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", avatar);

      dispatch(PostUser(formData));
    } else {
      setMsg("يرجى تعبئة جميع الحقول");

      setTimeout(() => {
        setMsg("");
      }, 5000);
    }
  };

  return (
    <>
      {/* Popup */}
      {Msg.length ? (
        <div className="absolute top-0 right-0 left-0 bg-red-500 py-3 text-center font-bold text-gray-100 text-lg">
          {Msg}
        </div>
      ) : null}

      <div className="flex items-center justify-center w-full h-screen">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              مستخدم جديد
            </h1>

            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              بمجرد الضغط على اضافة سوف يتم اضافة المستخدم الى النظام
            </p>

            <form
              onSubmit={(e) => Signup_Handler(e)}
              ref={formRef}
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              encType="multipart/form-data"
            >
              <div>
                <label htmlFor="avatar">
                  <img
                    loading="lazy"
                    ref={imgRef}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-md cursor-pointer transition-all hover:opacity-75"
                    src="https://i.pinimg.com/564x/2e/60/80/2e60808c2b288e393128ebed7ee988b6.jpg"
                    alt="Avatar"
                  />
                </label>
                <input
                  onChange={(e) => {
                    Avatar_Handler();
                    setAvatar(e.target.files[0]);
                  }}
                  id="avatar"
                  name="avatar"
                  className="hidden"
                  type="file"
                />
              </div>

              <p className="text-center text-lg font-medium">
                اضف بيانات المستخدم
              </p>

              <div>
                <label htmlFor="username" className="sr-only">
                  اسم المستخدم
                </label>

                <div className="relative">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="username"
                    name="username"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="اسم المستخدم"
                    autoComplete="off"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/1000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  البريد الالكتروني
                </label>

                <div className="relative">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="البريد الالكتروني"
                    autoComplete="off"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  كلمة المرور
                </label>

                <div className="relative">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="كلمة المرور"
                    autoComplete="off"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                اضافة
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
