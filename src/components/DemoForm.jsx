import React, { useState } from "react";

//categories
const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Camera",
  "Attrie",
  "SmartPhones",
  "Electronics",
  "Cloths",
  "Mens Cloths",
];

const DemoForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [changeCategoryTitle, setChangeCategoryTitle] = useState(
    "Open this to select Category"
  );
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const fileInputChangeHandler = async (e) => {
    if (e.target.name === "iputImage") {
      console.log("input");
    }
    const files = Array.from(e.target.files);
    setImages([]);
    setPreviewImages([]);

    // for (let i = 0; i < files.length; i++) {
    //   let formData = new formData();
    //   formData.append("file", files[i]);
    //   formData.append("upload_preset", "productsImage");
    //   formData.append("cloud_name", "dkdvjpnfz");
    //   const data = await fetch(
    //     "https://api.cloudinary.com/v1_1/dkdvjpnfz/image/upload",
    //     {
    //       method: "POST",
    //       body: formData,
    //     }
    //   ).then((r) => r.json());
    //   console.log(data.secure_url);

    //   // imagesLinks.push({
    //   //   public_id: result.public_id,
    //   //   url: result.secure_url,
    //   // });
    //   // console.log(files[i]);
    // }
    // console.log(files.length);

    // for (let i = 0; i < files.length; i++) {

    //    files[i];

    // }
    const formData = new FormData();
    files.forEach((file) => {
      //   console.log(file);
      formData.append("file", file);
    });
    // for (const file of files) {
    //   formData.append("file", file);
    //   // formData.append("image", image);
    // }
    formData.append("upload_preset", "productsImage");
    formData.append("cloud_name", "dkdvjpnfz");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dkdvjpnfz/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    // console.log(data);
    console.log(data.secure_url);
    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     // setAvatarPreview(reader.result);
    //     // setAvatar(reader.result);
    //     console.log(file);
    //     console.log(reader.result);
    //   }
    // };
    // reader.readAsDataURL(e.target.files[0]);

    // fileObj.push(e.target.files);
    // //firstly empty the state
    // setImages([]);
    // setPreviewImages([]);
    // for (let i = 0; i < fileObj[0].length; i++) {
    //   fileArray.push(URL.createObjectURL(fileObj[0][i]));
    // }
    // setImages(fileArray);
    // setPreviewImages(fileArray);
  };
  // console.log(name);

  const formSubmitHandler = (e) => {
    console.log(name);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    // productFormData.append("description", description);
    // productFormData.append("category", category);
    // productFormData.append("stock", stock);
    // productFormData.append("image", images);
    console.log(formData);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto  ">
            <form method="POST" className="" encType="multipart/form-data">
              <h2 className="text-center text-body my-2">Create Product</h2>

              {/* product name */}
              <div
                className="col-7 m-auto d-flex mb-2 "
                // style={{ borderBottom: "2px solid purple" }}
              >
                <input
                  className="form-control border-0"
                  type="text"
                  placeholder="Product Name"
                  value={name}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setName(e.target.value);
                    console.log(name);
                  }}
                  required
                  // style={{ border: "none", outline: "none", width: "100%" }}
                />
              </div>

              {/* product price */}
              <div className="col-7 m-auto d-flex mb-2 ">
                <input
                  className="form-control "
                  type="number"
                  placeholder="Product Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              {/* product descriptions */}
              <div className="col-7 m-auto d-flex mb-2 ">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={2}
                  cols={1}
                  placeholder="Product Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              {/* product category */}
              <div className="col-7 m-auto d-flex mb-2 ">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setChangeCategoryTitle(e.target.value);
                  }}
                  required
                >
                  <option>{changeCategoryTitle}</option>"
                  {categories &&
                    categories.map((categoryItem) => {
                      return <option key={categoryItem}>{categoryItem}</option>;
                    })}
                </select>
              </div>

              {/* product stock */}
              <div className="col-7 m-auto d-flex mb-2 ">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Product Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                />
              </div>

              {/* product stock */}
              <div className="col-7 m-auto d-flex mb-2 ">
                <input
                  className="form-control"
                  name="iputImage"
                  required
                  type="file"
                  multiple
                  onChange={fileInputChangeHandler}
                ></input>
              </div>

              {/* product img preview */}
              <div
                className="col-7 m-auto d-flex mb-2"
                id="createProductImageFile"
                style={{ overflow: "auto" }}
              >
                {previewImages.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      alt="previewImg"
                      className="m-1"
                      style={{ width: "8vmax" }}
                    />
                  );
                })}
              </div>
              {/* button */}
              <div className="col-6 m-auto">
                <button onSubmit={formSubmitHandler}>Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoForm;
