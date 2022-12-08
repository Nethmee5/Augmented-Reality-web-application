import React from "react";
import "./styles/Register.css";
import { useState } from "react";

const Register = () => {
  const [emp_first_name, setEmp_first_name] = useState("");
  const [emp_last_name, setEmp_last_name] = useState("");
  const [emp_email, setEmp_email] = useState("");
  const [emp_password, setEmp_password] = useState("");
  const [emp_address, setEmp_address] = useState("");
  const [employee_birthday, setEmployee_birthday] = useState("");
  const [employee_designation, setEmployee_designation] = useState("");
  const [message, setMessage] = useState("");
  const [employee_dept_id, setEmployee_dept_id] = useState(1);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        emp_first_name: emp_first_name ? emp_first_name : "",
        emp_last_name: emp_last_name ? emp_last_name : "",
        emp_email: emp_email ? emp_email : "",
        emp_password: emp_password ? emp_password : "",
        emp_address: emp_address ? emp_address : "",
        employee_birthday: employee_birthday ? employee_birthday : "",
        employee_designation: employee_designation ? employee_designation : "",
        employee_dept_id: employee_dept_id ? employee_dept_id : "",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/employee/add", requestOptions)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          if (res.emp_email) {
            alert("Registration is successfull");
            if (res) {
              localStorage.setItem("email", res.emp_email);
              localStorage.setItem("password", res.emp_password);
            }
            setTimeout(() => {
              window.location.href = "/Login";
            }, 1000);
          } else {
            localStorage.setItem("email", "");
            localStorage.setItem("password", "");
            alert("Registration is unsuccessfull");
          }
        })
        .catch((error) => console.log("error", error));
      /*
        let res = await fetch("http://localhost:8080/api/employee/add", {
            method: "POST",

            body: JSON.stringify({
    
        emp_first_name: emp_first_name,
        emp_last_name: emp_last_name,
        emp_email: emp_email,
        emp_password: emp_password,
        emp_address: emp_address,
        employee_birthday:employee_birthday,
        employee_designation: employee_designation,
    
    }),
});
*/
      /*
        let resJson = await res.json();
        if (res.status === 200) {
         
          setEmp_first_name("");
          setEmp_last_name("");
          setEmp_email("");
          setEmp_password("");
          setEmp_address("");
          setEmployee_birthday("");
          setEmployee_designation("");
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
        */
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Reg">
      <div className="Reg-contain">
        <div className="title-reg">Create a new account</div>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td className="fu-gui">First Name</td>
              <td className="fu-gui-box">
                <input
                  placeholder="Enter first name"
                  required
                  type="text"
                  value={emp_first_name}
                  onChange={(e) => {
                    setEmp_first_name(e.target.value);
                    console.log(emp_first_name);
                  }}
                />{" "}
              </td>
            </tr>

            <tr>
              <td className="fu-gui">Last Name</td>
              <td className="fu-gui-box">
                <input
                  placeholder="Enter last name"
                  type="text"
                  value={emp_last_name}
                  onChange={(e) => {
                    setEmp_last_name(e.target.value);
                    console.log(emp_last_name);
                  }}
                />{" "}
              </td>
            </tr>

            <tr>
              <td className="fu-gui">Email</td>
              <td className="fu-gui-box">
                <input
                  placeholder="Enter email"
                  type="email"
                  value={emp_email}
                  onChange={(e) => {
                    setEmp_email(e.target.value);
                    console.log(emp_email);
                  }}
                />
              </td>
            </tr>

            <tr>
              <td className="fu-gui">Passsword</td>
              <td className="fu-gui-box">
                <input
                  placeholder="Enter password"
                  type="password"
                  value={emp_password}
                  onChange={(e) => {
                    setEmp_password(e.target.value);
                    console.log(emp_password);
                  }}
                />
              </td>
            </tr>

            <tr>
              <td className="fu-gui">Address</td>
              <td className="fu-gui-box">
                <input
                  placeholder="Enter your Address"
                  type="text"
                  value={emp_address}
                  onChange={(e) => {
                    setEmp_address(e.target.value);
                    console.log(emp_address);
                  }}
                />
              </td>
            </tr>

            <tr>
              <td className="fu-gui">Birthday</td>
              <td className="fu-gui-box">
                <input
                  placeholder="DD/MM/YYYY"
                  type="text"
                  value={employee_birthday}
                  onChange={(e) => {
                    setEmployee_birthday(e.target.value);
                    console.log(employee_birthday);
                  }}
                />{" "}
              </td>
            </tr>

            <tr>
              <td className="fu-gui">Designation</td>
              <td className="fu-gui-box">
                <select
                  value={employee_designation}
                  onChange={(e) => {
                    setEmployee_designation(e.target.value);
                    console.log(employee_designation);
                  }}
                >
                  <option value="Technical officer">Technical officer</option>
                  <option value="Rural Assistant">Rural Assistant</option>

                  <option value="Divisional Secretary officer">
                    Divisional Secretary Officer
                  </option>

                  <option value="Ministry officer">Ministry officer</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <button type="submit" button id="btn-submit-reg">
                  Register
                </button>
              </td>
            </tr>

            <div className="message">{message ? <p>{message}</p> : null}</div>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Register;
