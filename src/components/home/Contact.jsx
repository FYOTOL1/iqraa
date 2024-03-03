import React from "react";

export default function Contact() {
  return (
    <>
      <section dir="rtl" className="bg-white mt-20">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
            تواصل معنا
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            هل لديك مشكلة فنية؟ هل تريد إرسال تعليقات حول ميزة تجريبية؟ هل تحتاج
            إلى تفاصيل حول خطة أعمالنا؟ اسمحوا لنا أن نعرف.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                بريدك الالكتروني
              </label>
              <input
                type="email"
                id="email"
                className="shadow-md outline outline-1 outline-gray-400 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white placeholder:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-md"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black"
              >
                الموضوع
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-black  rounded-lg shadow-md outline outline-1 outline-gray-400 focus:ring-primary-500 focus:border-primary-500 bg-white placeholder:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-md"
                placeholder="اخبرنا كيف يمكننا مساعدتك"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black"
              >
                رسالتك
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-black  rounded-lg shadow-md outline outline-1 outline-gray-400 focus:ring-primary-500 focus:border-primary-500 bg-white placeholder:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="اترك لنا تعليقا"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              ارسل رسالتك
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
