import { useState } from "react";

const Form = () => {
  const [loginInfo, setLoginInfo] = useState<any>({
    name: "",
    email: "",
    password: "",
  });

  const [checkName, setCheckName] = useState("");
  const [validName, setValidName] = useState(false);

  const [checkEmail, setCheckEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [checkPassword, setCheckPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (loginInfo.name === "") {
      setValidName(true);
      setCheckName("Name cannot be empty");
    } else if (loginInfo.name !== "") {
      setValidName(true);
    }
    if (loginInfo.email === "") {
      setValidEmail(true);
      setCheckEmail("Email cannot be empty");
    }
    if (loginInfo.password === "") {
      setValidPassword(true);
      setCheckPassword("Password cannot be empty");
    }
    // if (
    //   loginInfo.name.startsWith(" ") ||
    //   loginInfo.email.startsWith(" ") ||
    //   loginInfo.password.startsWith(" ")
    // ) {
    //   alert("first char cannot be space");
    //   return;
    // }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => setLoginInfo(e.target.value)}
      />
      {validName === true && <div style={{ color: "red" }}>{checkName}</div>}
      <br />
      <br />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => setLoginInfo(e.target.value)}
      />
      {validEmail === true && <div style={{ color: "red" }}>{checkEmail}</div>}
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => setLoginInfo(e.target.value)}
      />
      {validPassword === true && (
        <div style={{ color: "red" }}>{checkPassword}</div>
      )}
      <br />
      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
