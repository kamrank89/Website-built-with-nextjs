const DashboardForm = () => {
  return (
    <div className="flex flex-col bg-slate-400 w-4/6 items-center  my-2 mx-auto rounded ">
      <div>
        <h1 className="justify-center text-3xl my-8 hover:text-yellow-400 cursor-pointer bg-slate-600 p-4 rounded">
          Form to add products to the website
        </h1>
      </div>
      <form
        action="/api/database/additems"
        method="post"
        encType="multipart/form-data"
        className="flex flex-col space-y-2 "
      >
        <label htmlFor="shortDescription">Short Description</label>
        <input
          type="text"
          maxLength={150}
          name="shortDescription"
          className="rounded"
          required
        />

        <label htmlFor="longDescription">Long Description</label>
        <textarea
          rows={10}
          cols={150}
          wrap="hard"
          name="longDescription"
          placeholder="write somethiong usefull"
          className="rounded resize-none "
          spellCheck="true"
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Negative values are not allowed"
          name="itemPrice"
          className="rounded w-3/12"
          required
        />

        <label htmlFor="cardImage">Main Image</label>
        <input type="file" name="cardImage" className="rounded" required />

        <label htmlFor="image1">Image 1</label>
        <input type="file" name="images" className="rounded" />

        <label htmlFor="image2">Image 2</label>
        <input type="file" name="images" className="rounded" />

        <label htmlFor="image3">Image 3</label>
        <input type="file" name="images" className="rounded" />

        <label htmlFor="image4">Image 4</label>
        <input type="file" name="images" className="rounded" />

        <label htmlFor="image5">Image 5</label>
        <input type="file" name="images" className="rounded" />
        <button
          type="submit"
          className="rounded bg-slate-200 hover:bg-slate-500"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default DashboardForm;
