import { useState, useEffect } from "react";

const Form = () => {
  const [loginInfo, setLoginInfo] = useState<any>({
    name: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<any>({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (event: any) => {
    //ignoring 1st letter recieved as char

    if (event.target.value.charAt(0) !== " ") {
      setLoginInfo({
        ...loginInfo,
        [event.target.name]: event.target.value,
      });
    }
  };

  const validate = (value: any) => {
    const mailFormat = /\S+@\S+\.\S+/;
    const errors: any = {};
    if (!value.name) {
      errors.name = "Name cannot be Empty";
    }

    if (!value.email) {
      errors.email = "Email cannot be Empty";
    } else if (!value.email.match(mailFormat)) {
      errors.emailInvalid = "Please Enter valid Email id";
    }

    if (!value.password) {
      errors.password = "Password cannot be Empty";
    }

    return errors;
  };

  const submitHandler = () => {
    setFormError(validate(loginInfo));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && submit) {
      alert("Success");
    }
  }, [formError]);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Name"
        value={loginInfo.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <div style={{ color: "red" }}>{formError.name}</div>

      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <div style={{ color: "red" }}>
        {formError.email}
        {formError.emailInvalid}
      </div>

      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => handleChange(e)}
      />
      <div style={{ color: "red" }}>{formError.password}</div>

      <button onClick={() => submitHandler()} type="button">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
