import React from "react";
import { useState } from "react";
import { ref, push, child, update } from "firebase/database";
import { database } from "../firebase";
const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    console.log(event.target.value);
    // console.log(event.target.value);
    // console.log(event.target.name);
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    // console.log("clicked");
    const { name, email, phone, address, message } = user;
    if (name && email && phone && address && message) {
      // now save data in firebase
      const newPostKey = push(child(ref(database), "forms")).key;
      const formInfo = {};

      formInfo["/" + newPostKey] = user;
      update(ref(database), formInfo);
      // const res = await fetch(
      //   "https://contactform-5dd19-default-rtdb.firebaseio.com/contactformdb.json",
      //   // "https://fir-d0112-default-rtdb.firebaseio.com/demo", here demo is collection name .json added neccessary
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name,
      //       email,
      //       phone,
      //       address,
      //       message,
      //     }),
      //   }
      // );
      console.log(formInfo);
      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });

      alert("Data Stored In Firebase !");
    } else {
      alert("Please fill all the Data properly");
    }
  };
  return (
    <>
      <div className="container">
        <form method="POST">
          <h1 className="m-2 text-black-50">Contact Us</h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="your name"
                  value={user.name}
                  onChange={getUserData}
                  name="name"
                  required
                />
                <label htmlFor="floatingInput"> Your Name</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={user.email}
                  onChange={getUserData}
                  name="email"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="phone Number"
                  value={user.phone}
                  onChange={getUserData}
                  name="phone"
                />
                <label htmlFor="floatingInput">Phone number</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="address"
                  value={user.address}
                  onChange={getUserData}
                  name="address"
                />
                <label htmlFor="floatingInput"> Address</label>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="form-floating">
                <textarea
                  className="form-control "
                  placeholder="Message"
                  value={user.message}
                  onChange={getUserData}
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                  name="message"
                ></textarea>
                <label htmlFor="floatingTextarea">Message</label>
              </div>
            </div>
            <div className=" d-flex justify-content-center align-items-center mt-4">
              <button
                type="button"
                className="btn btn-success"
                onClick={postData}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
// just check
