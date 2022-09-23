import { useState } from "react";

export default function DropDown() {
  const [isdropdown, setdropdown] = useState(false);
  const dropDownModifier = () => setdropdown(!isdropdown);
  return (
    <div>
      <button
        className="rounded bg-gray-400 text-lg p-2 mt-2"
        onClick={dropDownModifier}
      >
        {" "}
        Options
      </button>
      <div>
        {isdropdown && (
          <div>
            <div className="rounded bg-gray-400 text-lg p-2 mt-2">Home</div>
            <div className="rounded bg-gray-400 text-lg p-2 mt-2">Products</div>
            <div className="rounded bg-gray-400 text-lg p-2 mt-2">About Us</div>
            <div className="rounded bg-gray-400 text-lg p-2 mt-2">
              Contact Us
            </div>
            <div className="rounded bg-gray-400 text-lg p-2 mt-2">
              Your Cart
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
