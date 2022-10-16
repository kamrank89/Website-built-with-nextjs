import Image from "next/image";

const Card = (props) => {
  return (
    <div className="min-w-min h-96 bg-slate-300 m-3 rounded-lg">
      <div className="w-64 p-2">
        <Image
          src={props.image}
          alt="product image"
          width={250}
          height={220}
          className="rounded"
        />
        <h1> {props.title}</h1>
        <h1> {props.body}</h1>
      </div>
    </div>
  );
};

export default Card;
