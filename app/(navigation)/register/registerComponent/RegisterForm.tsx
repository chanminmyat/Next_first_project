import { useStore } from "@/app/store/stripeStore";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
const RegisterForm = () => {
  const { email, setEmail, businessName, setBusinessName, password, setPassword, count, setCount } = useStore();
  const [spinner, setSpinner] = useState("none");
  const [msg, setMsg] = useState("");
  const [error,setError] = useState("");
  const [confirmPsw, setConfirmPsw] = useState("");
  const confirmPassRef = useRef<HTMLInputElement>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({ mode: "onSubmit" });

  const handleKeyDown = (e:any) => {
    if(e.key === 'Enter'){
      console.log(e.currentTarget.id)
      e.preventDefault()
      switch(e.currentTarget.id) {
        case 'name' : setFocus("email");break
        case 'email': setFocus("password");break
        case 'password' : confirmPassRef.current?.focus()
      }
    }
  }

  const handleNext = async () => {
    if(password === confirmPsw){
      setError("")
      const checkemailRequest = await fetch(
        `${process.env.NEXT_PUBLIC_PLATFORM_NESTJS_URL}/pos/accounts/check-account-exists`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      setSpinner("inline");
      setTimeout(() => {
        if(checkemailRequest.ok){
          setCount(count+1)
        }
        else{
          setMsg("Account with that email already exists.")
        }
        setSpinner("none");
      }, 1000);
    }
    else{
      setError("Passwords do not match.")
    }
    
  };
  return (
    <form>
      <div className="mb-4">
        <label className="form__label" htmlFor="name">
          Business Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          value={businessName}
          {...register("name", {
            required: true,
            onChange: (e) => {
              setBusinessName(e.target.value);
            },
          })}
          placeholder="Your Business Name"
          autoFocus
          onKeyDown={handleKeyDown}
        />
        {errors.name && (
          <p className="text-red-500">Business Name is Required.</p>
        )}
      </div>
      <div className="mb-4">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          value={email}
          {...register("email", {
            required: true,
            onChange: (e) => {
              setEmail(e.target.value);
            },
            pattern: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder="your-email@something.com"
          onKeyDown={handleKeyDown}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500">Email is Required.</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-red-500">Enter valid Email.</p>
        )}
      </div>
      <div className="mb-4">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className={`form__input`}
          value={password}
          type="password"
          id="password"
          {...register("password", {
            required: true,
            onChange: (e) => {
              setPassword(e.target.value)
            },
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
          })}
          onKeyDown={handleKeyDown}
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500">Password is Required.</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500">
            Password should contain at least 8 characters with 1 lower case
            letter, 1 upper case letter and 1 number.
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="form__label" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className="form__input"
          type="password"
          id="confirmPassword"
          value={confirmPsw}
          onChange={e=>setConfirmPsw(e.target.value)}
          ref={confirmPassRef}
          onFocus={handleKeyDown}
          // {...register("confirmPassword", {
          //   validate: (value) => value === watch("password"),
          // })}
        />
        {/* {errors.confirmPassword && (
          <p className="text-red-500">Passwords do not match.</p>
        )} */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="mb-4">
        <label className="form__label" htmlFor="country">
          Country
        </label>
        <select
          className="form__input bg-white cursor-pointer"
          name="country"
          id="country"
        >
          <option value="UK">United Kingdom</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="form__label" htmlFor="language">
          Language
        </label>
        <input
          className="form__input"
          type="text"
          name="language"
          value={"English"}
          disabled
        />
      </div>
      <div className="flex items-center">
        <input
          className="cursor-pointer"
          id="checkbox"
          type="checkbox"
          value=""
          {...register("checkbox", { required: true })}
        />
        <label htmlFor="default-checkbox" className="ms-2">
          I agree to
          <Link
            className="text-light-blue hover:text-blue-500"
            href="/terms"
            target="_blank"
          >
            {" "}
            Term of Use{" "}
          </Link>
          and have read and acknowledged
          <Link
            className="text-light-blue hover:text-blue-500"
            href="/privacy"
            target="_blank"
          >
            {" "}
            Privacy Policy
          </Link>
        </label>
      </div>
      {errors.checkbox && (
        <p className="text-red-500">
          You must agree with terms and conditions before proceeding
        </p>
      )}
      {msg && <p className="text-red-500">{msg}</p>}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit(handleNext)}
          type="button"
          className="form__btn text-lg"
        >
          Next
          <svg
            aria-hidden="true"
            role="status"
            className="w-5 h-5 ml-3 text-white animate-spin"
            style={{ display: spinner }}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
