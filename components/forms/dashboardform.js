const DashboardForm = () => {
  return (
    <div className="flex bg-slate-400 w-1/6 justify-center rounded ">
      <form
        action="/api/database/additems"
        method="post"
        encType="multipart/form-data"
        className="flex flex-col space-y-2"
      >
        <label htmlFor="shortDescription">Short Description</label>
        <input
          type="text"
          name="shortDescription"
          className="rounded"
          required
        />

        <label htmlFor="longDescription">Long Description</label>
        <input type="text" name="longDescription" className="rounded" />

        <label htmlFor="price">Price</label>
        <input type="number" name="itemPrice" required />

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
