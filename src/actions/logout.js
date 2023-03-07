import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({ key: "userName" });
  // delete budgets
  deleteItem({ key: "budgets" });
  // delete expenses
  deleteItem({ key: "expenses" });
  toast.success("You've deleted your account!");
  return redirect("/");
}
