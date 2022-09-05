import background from "../../assets/background-full.jpg";
import logo from "../../assets/logo-O-bg.png";
import styled from "@emotion/styled";
import { Button, FormGroup, Input } from "@mui/material";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthentication } from "../../utils/hooks/useAuthentication";

const LoginContainer = styled.div`
   display: grid;
   height: 100%;
   width: 100%;
   grid-template-columns: 1fr;
   .login__section_1 {
      display: none;
   }
   .login__form__image_container {
      display: flex;
      justify-content: center;
      width: 100%;
   }
   .login__form {
      place-items: center;
   }
   ${(p) => p.theme.breakpoints.up("md")} {
      grid-template-columns: 1fr 1fr;
      .login__form__image_container {
         display: none;
      }
      .login__section_1 {
         position: relative;
         display: grid;
         place-items: center;
         flex-grow: 1;
         .login__bg {
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            top: 0;
            left: 0;
         }
         .login__logo {
            z-index: 10;
            width: 25%;
            height: 25%;
            object-position: center;
            object-fit: contain;
         }
      }
   }
`;

function Login() {
   const form = useForm({
      defaultValues: {
         username: "",
         password: "",
      },
   });
   const { login } = useAuthentication();
   const navigate = useNavigate();

   const handleSubmit = async (formData) => {
      if (formData.username !== "admin" && form.password !== "admin") {
         form.setError("username", {
            message: "Username salah",
         });
         form.setError("password", {
            message: "Password salah",
         });
      } else {
         login(formData, btoa(JSON.stringify(formData)));
         navigate("/dashboard");
      }
   };

   return (
      <LoginContainer className="login">
         <div className="login__section_1">
            <img src={background} alt="background" className="login__bg" />
            <img className="login__logo" src={logo} alt="foto logo " />
         </div>
         <form noValidate onSubmit={handleSubmit} className="login__form d-grid">
            <div
               className="d-flex flex-column align-items-start gap-5"
               style={{ width: "min(400px,70%)" }}
            >
               <div className="login__form__image_container">
                  <img src={logo} alt="logo" style={{ width: "10vw" }} />
               </div>
               <h4>Login </h4>
               <div className="login__input_container d-flex flex-column gap-4 w-100">
                  <Controller
                     control={form.control}
                     name="username"
                     rules={{
                        required: "Masukan username",
                     }}
                     render={({ field, fieldState }) => (
                        <FormGroup>
                           <label>Username</label>
                           <Input
                              placeholder="Silahkan masukan username"
                              type="email"
                              value={field.value}
                              onChange={field.onChange}
                              required
                              autoFocus
                           />
                           {fieldState.error?.message && (
                              <span className="text-danger">{fieldState.error?.message}</span>
                           )}
                        </FormGroup>
                     )}
                  />
                  <Controller
                     control={form.control}
                     name="password"
                     rules={{
                        required: "Masukan password",
                     }}
                     render={({ field, fieldState }) => (
                        <FormGroup>
                           <label>Password</label>
                           <Input
                              placeholder="Silahkan masukan Password"
                              type="password"
                              value={field.value}
                              onChange={field.onChange}
                              required
                              autoFocus
                           />
                           {fieldState.error?.message && (
                              <span className="text-danger">{fieldState.error?.message}</span>
                           )}
                        </FormGroup>
                     )}
                  />
               </div>
               <Button
                  type="submit"
                  className="w-100"
                  color="primary"
                  variant="contained"
                  onClick={form.handleSubmit(handleSubmit)}
               >
                  Masuk
               </Button>
            </div>
         </form>
      </LoginContainer>
   );
}

export default Login;
