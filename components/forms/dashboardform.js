const DashboardForm = () => {
  return (
    <div>
      {/* TODO: coding the api address for this post */}
      <form action="" method="post" encType="multipart/form-data">
        <label htmlFor="shortDescription"></label>
        <input type="shortDescription" />
        <label htmlFor="longDescription"></label>
        <input type="longDescription" />
        <label htmlFor="price"></label>
        <input type="price" />
        <label htmlFor="cardImage"></label>
        <input type="cardImage" />
        <label htmlFor="image1"></label>
        <input type="image1" />
        <label htmlFor="image2"></label>
        <input type="image2" />
        <label htmlFor="image3"></label>
        <input type="image3" />
        <label htmlFor="image4"></label>
        <input type="image4" />
        <label htmlFor="image5"></label>
        <input type="image5" />
      </form>
    </div>
  );
};

export default DashboardForm;
