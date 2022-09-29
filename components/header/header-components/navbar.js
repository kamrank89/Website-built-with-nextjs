import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <ul className="space-x-4 flex">
          <li className="rounded bg-gray-400 text-lg p-2 w-28 text-center  hover:bg-gray-800 hover:text-white">
            <Link href="/"> Home </Link>
          </li>
          <li className="rounded bg-gray-400 text-lg p-2 w-28  text-center hover:bg-gray-800 hover:text-white">
            <Link href="/products"> Products </Link>
          </li>

          <li className="rounded bg-gray-400 text-lg p-2 w-28 text-center  hover:bg-gray-800 hover:text-white">
            <Link href="/contact">Contact Us</Link>
          </li>

          <li className="rounded bg-gray-400 text-lg p-2 w-28  text-center hover:bg-gray-800 hover:text-white">
            <Link href="/cart">Your Cart </Link>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <ul className="space-x-6 flex">
        <li className="rounded bg-gray-400 text-center text-lg w-28 p-2 hover:bg-gray-800 hover:text-white">
          <Link href="/"> Home </Link>
        </li>
        <li className="rounded bg-gray-400 text-center text-lg w-28 p-2 hover:bg-gray-800 hover:text-white">
          <Link href="/products"> Products </Link>
        </li>

        <li className="rounded bg-gray-400 text-center text-lg w-28 p-2 hover:bg-gray-800 hover:text-white">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
