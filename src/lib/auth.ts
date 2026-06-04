export const AUTH_USERNAME = "admin";
export const AUTH_PASSWORD = "admin123";

export const login = (
  username: string,
  password: string
) => {
  if (
    username === AUTH_USERNAME &&
    password === AUTH_PASSWORD
  ) {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }

  return false;
};

export const logout = () => {
  localStorage.removeItem("isAuthenticated");
};

export const isAuthenticated = () => {
  return (
    localStorage.getItem("isAuthenticated") ===
    "true"
  );
};