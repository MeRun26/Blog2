import { getUsers } from "./get-users";
export const getUser = (loginToFind) => {
    const users = getUsers();
  return users.find(({ login }) => login === loginToFind);
};
