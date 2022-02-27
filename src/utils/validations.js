export function isEmailValid(email) {
  const emailValid =
    /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailValid.test(String(email).toLowerCase());
}
/* 
export function isEmailValid(email) {
  // eslint-disable-next-line no-useless-escape
  const emailValid =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailValid.test(String(email).toLowerCase());
}
   */