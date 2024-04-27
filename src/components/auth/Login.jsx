import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/reducers/UsersSlice";

export default function Login() {
  const Store = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Msg, setMsg] = useState(false);

  const dispatch = useDispatch();

  const loginFunc = () => {
    dispatch(LoginUser({ email: email, password: password })).then(() => {
      if (Store.error.length) {
        setMsg(true);
        console.log("13");
      }
    });

    if (!Store.error.length) {
      setMsg(false);
    }
  };

  useEffect(() => {
    if (Store.logined) {
      location.pathname = "/";
    }
  });

  return (
    <>
      {Msg == true && (
        <button
          onClick={(e) => setMsg(false)}
          className="absolute top-0 right-0 left-0 h-10 p-2 bg-gray-200 shadow-sm"
        >
          <p className="text-center text-[] font-bold text-[#363063]">
            {Store.error}
          </p>
        </button>
      )}

      <div
        dir="rtl"
        className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-screen flex items-center"
      >
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            انظم الينا
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            بمجرد تسجيل دخولك سيسمح لك باستخدام و التفاعل مع الخدمات المتاحة في
            الموقع
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              تسجيل الدخول الى حسابك
            </p>

            <div>
              <div className="relative">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  className={`w-full rounded-lg  border-gray-200 p-4 pe-12 text-sm shadow-sm outline outline-1 outline-gray-100 transition-all ${
                    !Msg ? "focus:outline-gray-500" : "focus:outline-red-500"
                  }`}
                  placeholder="بريدك الالكتروني"
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
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  className={`w-full rounded-lg  border-gray-200 p-4 pe-12 text-sm shadow-sm outline outline-1 outline-gray-100 transition-all ${
                    !Msg ? "focus:outline-gray-500" : "focus:outline-red-500"
                  }`}
                  placeholder="كلمة المرور"
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
              type="button"
              onClick={() => loginFunc()}
              className="block w-full rounded-lg bg-blue-600 transition-all hover:bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              تسجيل الدخول
            </button>

            <p className="text-center text-sm text-gray-500">
              في حال عدم امتلاك حساب يرجى التواصل مع الادارة
              <br />
              <Link
                className="block text-blue-500 mt-2 transition-all hover:text-blue-400"
                to="/"
              >
                الرئيسية
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
