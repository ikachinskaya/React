import queryString from "query-string";
// export const getUsers = (options = {}) => {
//   //чтобы не писать много параметров, а только нужные, добавлять их в объект

//   const defaultOptions = {
//     page: 1,
//     results: 10,
//     seed: "fd2021-1",
//     inc: ["name", "login", "nat"],
//   };

//   const finalOptions = { ...defaultOptions, ...options };

//   return fetch(
//     `https://randomuser.me/api/?page=${finalOptions.page}&results=${
//       finalOptions.results
//     }&seed=${finalOptions.seed}&inc=${finalOptions.inc.join(",")}`
//   ).then((response) => response.json());
// };

export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: "fd2021-1",
    format: "json",
    inc: ["name", "login", "nat"],
  };
  const finalOptions = { ...defaultOptions, ...options };
  const query = queryString.stringify(finalOptions, { arrayFormat: "comma" });
  return fetch(`https://randomuser.me/api/?${query}`).then((response) =>
    response.json()
  );
};
