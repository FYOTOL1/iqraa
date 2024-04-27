import { useDispatch } from "react-redux";
import { search } from "../../redux/reducers/GroupsSlice";
import { Link } from "react-router-dom";
import UserAuth from "../../Middlewares/UserAuth";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <header className="flex items-center justify-between gap-3 w-full py-1 px-1 sm:px-4 md:px-5">
        {/* Search */}
        <div className="relative w-full sm:w-2/3 max-w-[80%] h-full">
          <label
            htmlFor="search"
            className="absolute left-3 top-[50%] translate-y-[-50%] text-gray-700 text-xs sm:text-lg"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            onChange={(e) => dispatch(search(e.target.value))}
            id="search"
            className="h-full w-full rounded-md shadow-sm ps-9 py-[2px] sm:py-[8px] outline outline-1 outline-gray-100 text-[#333] transition-all focus:outline-blue-300 placeholder:text-[10px] sm:placeholder:text-xs"
            type="text"
            placeholder="بحث عن مجموعات"
          />
        </div>
        <UserAuth type={"user"} showMsg={false}>
          <Link
            className="px-3 py-2 rounded-[4px] bg-blue-500 text-white transition-all hover:opacity-80"
            to={"/groups/new"}
          >
            انشاء مجموعة
          </Link>
        </UserAuth>
      </header>
    </>
  );
}
