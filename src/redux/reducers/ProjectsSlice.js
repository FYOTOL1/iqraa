import { createSlice } from "@reduxjs/toolkit";

const ProjectsSlice = createSlice({
  name: "ProjectsSlice",
  initialState: {
    data: [
      {
        name: "نظام كاشير",
        done: true,
        accepted: false,
        date: "20/2/2024",
        about: "نظام كاشير سريع وسلس",
        type: "تقني",
      },
      {
        name: "بحث عن البحار",
        done: false,
        accepted: true,
        date: "28/6/2024",
        about: "بحث عن الكائنات البحرية وانواعها",
        type: "بيئي",
      },
      {
        name: "نظام امن",
        done: true,
        accepted: false,
        date: "1/9/2023",
        about: "نظام امني قوي",
        type: "تقني",
      },
      {
        name: "نظام مواصلات",
        done: false,
        accepted: false,
        date: "20/2/2024",
        about: "نظام مواصلات متقدم وسهل الاستخدام",
        type: "تقني",
      },
      {
        name: "نظام كاشير",
        done: true,
        accepted: false,
        date: "20/2/2024",
        about: "نظام كاشير سريع وسلس",
        type: "تقني",
      },
      {
        name: "بحث عن البحار",
        done: false,
        accepted: true,
        date: "28/6/2024",
        about: "بحث عن الكائنات البحرية وانواعها",
        type: "بيئي",
      },
      {
        name: "نظام امن",
        done: true,
        accepted: false,
        date: "1/9/2023",
        about: "نظام امني قوي",
        type: "تقني",
      },
      {
        name: "نظام مواصلات",
        done: false,
        accepted: false,
        date: "20/2/2024",
        about: "نظام مواصلات متقدم وسهل الاستخدام",
        type: "تقني",
      },
      {
        name: "نظام كاشير",
        done: true,
        accepted: false,
        date: "20/2/2024",
        about: "نظام كاشير سريع وسلس",
        type: "تقني",
      },
      {
        name: "بحث عن البحار",
        done: false,
        accepted: true,
        date: "28/6/2024",
        about: "بحث عن الكائنات البحرية وانواعها",
        type: "بيئي",
      },
      {
        name: "نظام امن",
        done: true,
        accepted: false,
        date: "1/9/2023",
        about: "نظام امني قوي",
        type: "تقني",
      },
      {
        name: "نظام مواصلات",
        done: false,
        accepted: false,
        date: "20/2/2024",
        about: "نظام مواصلات متقدم وسهل الاستخدام",
        type: "تقني",
      },
    ],
    filter: [],
  },

  reducers: {
    search(state, { payload }) {
      state.filter = state.data.filter((e) =>
        e.name.toLowerCase().includes(payload.toLowerCase())
      );
    },
  },
});

export const { search } = ProjectsSlice.actions;

export default ProjectsSlice.reducer;
