/** @format */

import { UserDetails } from "../../types";
import api from "./api";
const listUser = (config: any): Promise<UserDetails[]> => {
  return api.get("users", config).then((res) => res.data);
};

const userDetails = (id: string, config: any) => {
  return api.get(`users/${id}`, config).then((res) => res.data);
};
export { listUser, userDetails };
