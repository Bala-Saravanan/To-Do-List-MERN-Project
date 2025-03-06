import React from "react";
import ReactDOM from "react-dom";

const UserInfo = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="relative">
      <>{children}</>
    </div>,
    document.getElementById("user-info")
  );
};
export default UserInfo;
