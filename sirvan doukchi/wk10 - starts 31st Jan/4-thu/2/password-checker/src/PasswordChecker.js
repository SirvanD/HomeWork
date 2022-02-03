import { useState } from "react";

export default function PasswordChecker() {
  let [strength, setStrength] = useState();
  let [passwordType, setPasswordType] = useState("password");
  let [checked, setChecked] = useState("false");

  const handleChange = (e) => {
    console.log(checked);

    var passInput = e.target.value.split("");
    // console.log(passInput);
    if (passInput.length < 6) {
      setStrength(["Weak"]);
    } else if (passInput.length < 12 && passInput.length > 6) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  const handleChangeChk = (e) => {
    e.target.value === "false" ? setChecked("true") : setChecked("false");
    console.log(e.target.value);

    checked !== "true" ? setPasswordType("text") : setPasswordType("password");

    // console.log(checked);
    // console.log(e.target.checked);
  };

  return (
    <div>
      <div className="container">
        <h1>password checker</h1>
        <label>Enter your password</label>
        <input onChange={handleChange} type={passwordType} />
        <input
          onChange={handleChangeChk}
          type="checkbox"
          value={checked}
          name=""
          id=""
        />
        <input type="text" value={strength} />
      </div>
    </div>
  );
}
