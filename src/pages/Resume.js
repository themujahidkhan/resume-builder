import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Input from "../components/Input";
import { InputTextArea } from "../components/Input";
function Resume() {
  const contactTitle = "Contact Details";
  const contactDesc = "How can Employers contact you?";
  const userBioTitle = "Short Bio";
  const userBioDesc =
    "Enter breif description about your professional background.";

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userBio, setUserBio] = useState("");

  function setUserName(e) {
    setName(e.target.value);
  }
  function setUserEmail(e) {
    setEmail(e.target.value);
  }
  function setUserPhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function setShortBio(e) {
    setUserBio(e.target.value);
  }

  return (
    <div className="parent container mx-auto font-body flex justify-between flex-wrap">
      <div className="leftChild my-4 flex flex-col">
        <h1 className="text-4xl">{contactTitle}</h1>
        <p className="my-2">{contactDesc}</p>
        <Input
          type="text"
          title="Name"
          placeholder="Mujahid Khan"
          onchange={setUserName}
        />
        <Input
          type="email"
          title="Email Address"
          placeholder="mujahidkhan@gmail.com"
          onchange={setUserEmail}
        />
        <Input
          type="text"
          title="Phone Number"
          placeholder="123456789"
          onchange={setUserPhoneNumber}
        />
        <div className="userBio my-6 space-y-2">
          <h1 className="text-4xl">{userBioTitle}</h1>
          <p className="my-2 ">{userBioDesc}</p>
          <InputTextArea
            placeholder="I have worked as Software Engineer at Google, with more than 8 years of experience in ReactJS."
            onchange={setShortBio}
          />
        </div>
      </div>
      <div className="rightChild bg-gradient-to-br from-rose-100 to-teal-100 w-6/12 h-screen my-8 ">
        <div className="flex flex-col">
          <div className="contactDetails mx-12 mt-8">
            <div className="my-4">
              <h1 className="font-medium text-2xl">{name}</h1>
            </div>
            <div className="flex space-x-12 ">
              <p>{email}</p>
              <p>{phoneNumber}</p>
            </div>
          </div>
          <div className="userShortBio mx-12 mt-8">
            <p>{userBio}</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default Resume;
