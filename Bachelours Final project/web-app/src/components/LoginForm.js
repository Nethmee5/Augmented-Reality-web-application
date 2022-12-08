import React, { useEffect } from "react";
import './styles/LoginForm.css';
import Register from "./Register";
import { Link } from 'react-router-dom';
import { useState } from "react";




const LoginForm = () => {

    const [emp_email, setEmp_email] = useState("");
    const [emp_password, setEmp_password] = useState("");

    const handleSubmit = async (e) => {

       console.log("Abc");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({


            "emp_email": emp_email ? emp_email : "",
            "emp_password": emp_password ? emp_password : "",
        });


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        var emp_id = 1;
     /*  await fetch(`http://localhost:8080/api/employee/${emp_id}`, requestOptions)
            .then(res => res.text())
            .then((resp) => {
                console.log(resp);
                var dataGet = resp;
                if (dataGet.emp_email == 'emp_email' && dataGet.emp_password == 'emp_password') {
                    alert("Login is success full");
                    setTimeout(() => { window.location.href = "/home" }, 5000);
                } else { //window.location.reload();
                    console.log("no data");
                 }

            }).catch((e) => { throw e; })
            */
           var e=localStorage.getItem("email");//read the cookies data
           var p =localStorage.getItem("password");
           if(e==emp_email&&p==emp_password){
               alert("Login succesfull");//check the user enter values is correct or not
               setTimeout(() => { window.location.href = "/Dashboard" }, 1000);

           }else{
            alert("Login failed");
            setTimeout(() => { window.location.href = "/register" }, 1000);
           }
          /*  await fetch(`http://localhost:8080/api/employee/${emp_id}`).then(data=>{return data.json();})
            .then(res=>{
                console.log(res);
                if (res.emp_email == emp_email && res.emp_password == emp_password) {
                    alert("Login is successfull");
                    setTimeout(() => { window.location.href = "/home" }, 5000);
                } else { //window.location.reload();
                    alert("Login is un success full");
                    console.log("no data");
                 }
                console.log(res);});
          // console.log(data.JSON());
          */
    }





return (
    <div className="main-login">
        <div className="login-contain">
            <div className="title-login">Log in or Sign up</div>
            <form>
                <table>

                    <tr >
                        <td className="fu-gui">Email</td>
                        <td className="fu-gui-boxs"><input placeholder="Enter your Email" type="email" id="username" value={emp_email} onChange={(e) => { setEmp_email(e.target.value); console.log(emp_email); }} /> </td>
                    </tr>


                

                    <tr >
                    <td className="fu-gui">Passsword</td>
                         <td className="fu-gui-boxs"><input placeholder="Enter your password" type="password" id="password" value={emp_password} onChange={(e) => { setEmp_password(e.target.value); console.log(emp_password); }} /> </td>
                    </tr>

                    </table>
                       </form>
            <div>
            <button id="btn-submit-login" onClick={(e)=>{handleSubmit(e);}}>Log in</button>


            <button type="button" button id="btn-reg" onClick={(e) => { window.location.href = '/Register'; }}> Register</button>
            </div>
        </div>
    </div>


);

}

export default LoginForm;