const DashboardForm = () => {
  return (
    <div className="flex bg-slate-400 w-1/6 justify-center rounded ">
      {/* TODO: coding the api address for this post */}
      <form
        action=""
        method="post"
        encType="multipart/form-data"
        className="flex flex-col "
      >
        <label htmlFor="shortDescription">shortDescription</label>
        <input type="shortDescription" className="rounded" />
        <label htmlFor="longDescription">longDescription</label>
        <input type="longDescription" className="rounded" />
        <label htmlFor="price">price</label>
        <input type="price" />
        <label htmlFor="cardImage">cardImage</label>
        <input type="cardImage" className="rounded" />
        <label htmlFor="image1">image1</label>
        <input type="image1" className="rounded" />
        <label htmlFor="image2">image2</label>
        <input type="image2" className="rounded" />
        <label htmlFor="image3">image3</label>
        <input type="image3" className="rounded" />
        <label htmlFor="image4">image4</label>
        <input type="image4" className="rounded" />
        <label htmlFor="image5">image5</label>
        <input type="image5" className="rounded" />
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
