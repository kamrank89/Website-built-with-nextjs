import Image from "next/image";

export default function Logo() {
  const imageSource = "/Logo.png";
  return (
    <div className="ml-8 mt-8">
      <Image
        src={imageSource}
        alt=""
        width={200}
        height={70}
        className="rounded-3xl"
      />
    </div>
  );
}
