import Image from "next/image";

const Card = (props) => {
  return (
    <div className="min-w-min transform hover:scale-110 h-96 bg-slate-300 m-3 rounded-lg relative">
      <div className="w-64 p-2 ">
        <Image
          src={props.image}
          alt="product image"
          width={250}
          height={220}
          className="rounded"
        />
        <h1> {props.title}</h1>
        <div className="bg-slate-500 max-w-max absolute bottom-1 rounded p-1">
          <p>{props.price} $</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
