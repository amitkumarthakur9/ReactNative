import { AddGoal } from "../../api/services/endpoints/goalEndpoints";

export const Addgoalitem = async (goaldata) => {
  try {
    const result = await AddGoal(goaldata);
    return result.data;
  } catch (e) {
    console.log("failed", e);
  }
};
