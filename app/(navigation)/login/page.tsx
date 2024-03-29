"use client";

import { useRef, useState } from "react";
export default function login() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [msg, setMsg] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      passwordRef.current?.focus();
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PLATFORM_NESTJS_URL}/pos/auth/pos-login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: psw,
        }),
      }
    );
    console.log(res.json());
    if (res.status == 200) {
      //window.location.href = "http://localhost:3000/"
      setMsg("Login Complete");
    } else {
      setMsg("Please enter valid Email and Password");
      setPsw("");
    }
  };

  return (
    <main>
      <div className="relative bg-gradient-to-b from-[#0A0A37] to-[#1D204E] lg:pt-[200px] pt-[100px] overflow-hidden">
        <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px] lg:mt-[-200px] md:mt-[-100px] mt-[-50px]">
          <img
            className="w-[110%] h-auto"
            src="/assets/img/elements/triangle-white.svg"
          />
        </div>
        <div className="bg-white">
          <div className="flex flex-col items-center pt-[50px] mb-[-60px]">
            <h2 className="caption text-dark-blue">Login</h2>
            <span className="caption__underline"></span>
          </div>
          <div className="w-full h-[700px] md:bg-bg_img bg-right bg-no-repeat bg-white">
            <div className="form mt-14 flex flex-col">
              <form onSubmit={handleSubmit} action="">
                <div className="mb-4">
                  <label className="form__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form__input"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                  />
                </div>
                <div className="mb-4">
                  <label className="form__label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form__input"
                    type="password"
                    name="password"
                    value={psw}
                    ref={passwordRef}
                    onChange={(e) => setPsw(e.target.value)}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input id="default-checkbox" type="checkbox" value="" />
                  <label htmlFor="default-checkbox" className="ms-2">
                    Remember Me
                  </label>
                </div>
                <div className="text-red-500">{msg && <div>{msg}</div>}</div>
                <div className="mx-auto flex items-center justify-center">
                  <input type="submit" className="form__btn" value="Login" />
                </div>
              </form>
            </div>
          </div>
          <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px] mt-[-130px]">
            <img
              className="w-[110%] h-auto"
              src="/assets/img/elements/triangle-dark-blue.svg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
