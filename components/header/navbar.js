import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className="space-x-6">
        <ui className="rounded bg-gray-400 text-lg p-2 ">
          <Link href="/"> Home </Link>
        </ui>
        <ui className="rounded bg-gray-400 text-lg p-2">
          <Link href="/products"> Products </Link>
        </ui>
        <ui className="rounded bg-gray-400 text-lg p-2">
          <Link href="/about">About Us </Link>
        </ui>
        <ui className="rounded bg-gray-400 text-lg p-2">
          <Link href="/contact">Contact Us</Link>
        </ui>
        <ui className="rounded bg-gray-400 text-lg p-2">
          <Link href="/cart">Your Cart </Link>
        </ui>
      </ul>
    </div>
  );
}
