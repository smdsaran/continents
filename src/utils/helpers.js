export const isValidPassword = (password) => {
  const minLength = /.{8,}/;
  const hasUppercase = /[A-Z]/;
  const hasNumber = /[0-9]/;
  const hasSymbol = /[^A-Za-z0-9]/;

  if (!minLength.test(password)) {
    return "Password must be at least 8 characters long.";
  }
  if (!hasUppercase.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!hasNumber.test(password)) {
    return "Password must contain at least one number.";
  }
  if (!hasSymbol.test(password)) {
    return "Password must contain at least one symbol.";
  }

  return 'Valid';
}
