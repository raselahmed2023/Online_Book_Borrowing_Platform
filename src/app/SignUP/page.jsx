"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


const SignUpPage = () => {
  const router = useRouter(); 

  const onSubmit= async (e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const image=e.target.image.value;
    const password=e.target.password.value;
  
     const {data, error} = await authClient.signUp.email({
        name,
        email,
        password,
        image,
    })
    

    console.log({data, error})

    if(!error) {
        router.push('/Signin')
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg shadow-lg rounded-2xl">
        <div className="card-body px-10 py-10">
          <h2 className="text-center text-3xl font-bold mb-4">Sign Up</h2>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">

            
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Name <span className="text-error">*</span></span>
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Image URL <span className="text-error">*</span></span>
              </label>
              <input
                name="image"
                type="text"
                required
                placeholder="Image URL"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Email <span className="text-error">*</span></span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Password <span className="text-error">*</span></span>
              </label>
              <input
                name="password"
                type="password"
                required
                minLength={8}
                placeholder="Enter your password"
                className="input input-bordered w-full rounded-xl"
              />
              <label className="label pt-1">
                <span className="label-text-alt text-base-content/50">
                  Must be at least 8 characters with 1 uppercase and 1 number
                </span>
              </label>
            </div>

          
            <div className="flex gap-3 mt-2">
              <button type="submit" className="btn btn-primary rounded-full px-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Submit
              </button>
              <button type="reset" className="btn btn-ghost border border-base-300 rounded-full px-6">
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;