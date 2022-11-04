const EditPageForm = (props) => {
  return (
    <div className="flex flex-col bg-slate-400 w-4/6 items-center  my-2 mx-auto rounded ">
      <div>
        <h1 className="justify-center text-3xl my-8 hover:text-yellow-400 cursor-pointer bg-slate-600 p-4 rounded">
          Form to modify this item on the website
        </h1>
      </div>
      <form
        action={props.api}
        method="post"
        className="flex flex-col space-y-2 m-4"
      >
        <label htmlFor="shortDescription">Short Description</label>
        <input
          type="text"
          maxLength={150}
          name="shortDescription"
          className="rounded"
          placeholder={props.shortPlaceHolder}
          required
        />

        <label htmlFor="longDescription">Long Description</label>
        <textarea
          rows={10}
          cols={150}
          wrap="hard"
          name="longDescription"
          placeholder={props.longPlaceHolder}
          className="rounded resize-none "
          spellCheck="true"
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder={props.pricePlaceHolder}
          name="itemPrice"
          className="rounded w-3/12"
          required
        />

        <button
          type="submit"
          className="rounded bg-slate-200 hover:bg-slate-600 w-2/12 mx-auto p-4 "
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default EditPageForm;
