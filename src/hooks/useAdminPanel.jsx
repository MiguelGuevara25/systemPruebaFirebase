import { useContext } from "react";
import AdminPanelContext from "../context/AdminPanelProvider";

const useAdminPanel = () => {
  return useContext(AdminPanelContext);
};

export default useAdminPanel;
