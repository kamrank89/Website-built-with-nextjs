import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function DropDown() {
  const [isdropdown, setdropdown] = useState(false);
  const dropDownModifier = () => setdropdown(!isdropdown);
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="absolute -right-6 z-10">
        <button
          className="rounded bg-gray-400 w-28 text-lg p-2 mt-2 z-10 "
          onClick={dropDownModifier}
        >
          Options
        </button>
        <div>
          {isdropdown && (
            <div className="text-center z-10">
              <div className="rounded hover:bg-gray-800 hover:text-white bg-gray-400 text-lg p-2 mt-2">
                <Link href="/"> Home </Link>
              </div>
              <div className="rounded hover:bg-gray-800 hover:text-white bg-gray-400 text-lg p-2 mt-2">
                <Link href="/products"> Products </Link>
              </div>

              <div className="rounded hover:bg-gray-800 hover:text-white bg-gray-400 text-lg p-2 mt-2">
                <Link href="/contact">Contact Us</Link>
              </div>
              <div className="rounded bg-gray-400 text-lg p-2 mt-2 hover:bg-gray-800 hover:text-white">
                <Link href="/cart">Your Cart </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="absolute -right-6 z-10">
      <button
        className="rounded bg-gray-400 w-28 text-lg p-2 mt-2 "
        onClick={dropDownModifier}
      >
        Options
      </button>
      <div>
        {isdropdown && (
          <div className="text-center ">
            <div className="rounded hover:bg-gray-800 hover:text-white bg-gray-400 text-lg p-2 mt-2">
              <Link href="/"> Home </Link>
            </div>
            <div className="rounded hover:bg-gray-800 hover:text-white bg-gray-400 text-lg p-2 mt-2">
              <Link href="/products"> Products </Link>
            </div>

            <div className="rounded hover:bg-gray-800 hover:text-white bg-gray-400 text-lg p-2 mt-2">
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
