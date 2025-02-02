import React from "react";
import ReactDOM from "react-dom";

const Edit = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
        {children}
      </div>
    </>,
    document.getElementById("overlays")
  );
};
export default Edit;
