import * as yup from "yup";
export const SIGN_IN_SHEMA = yup.object({
  email: yup.string().email("Некорректный email").required("Введите email"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      "Пароль должен содержать 8-32 символов, заглавную, строчную буквы, число и специальные символы"
    )
    .required(),
  remember: yup.string(),
});
