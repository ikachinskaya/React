import { createContext } from "react";
export const UserContext = createContext();
export const ThemeContext = createContext();

//можно делать так, но есть ли смысл..
// export const UserContext = createContext({
//   id: 1,
//   fullName: "Test Testovich",
//   userImg:
//     "https://toppng.com//public/uploads/preview/vu-thi-ha-user-pro-icon-115534024853ae3gswzwd.png",
// });
