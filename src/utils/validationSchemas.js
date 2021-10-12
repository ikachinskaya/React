import * as yup from "yup";
export const SIGN_IN_SHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/
    )
    .required(),
  remember: yup.string(),
});
