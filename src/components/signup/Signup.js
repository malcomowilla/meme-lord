import React, { useState } from "react";

function Register() {
    return (
        <>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mt-32">
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div class="form-group mb-6">
                            <input type="text" className="form-control
                                block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="First name"
                            />

                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                border border-solid border-gray-300 rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124" aria-describedby="emailHelp124" placeholder="Last name"
                            />
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block w-full px-3 py-1.5
                            text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                            transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125" placeholder="Email address"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126" placeholder="Password"
                        />
                    </div>
                    <div className="form-group form-check text-center mb-6">
                        <input type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck25" checked />
                        <label className="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
                    </div>
                    <button type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded
                        shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
                        transition duration-150 ease-in-out">
                        Sign up
                    </button>
                </form>
            </div>
        </>
    );
}

function Login() {
    return (
        <>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mt-32">
                <form>
                    <div className="form-group mb-6">
                        <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" className="form-control
                            block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                            m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                            transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2" placeholder="Password"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="form-group form-check">
                            <input type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2" />
                            <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
                        </div>

                        <a href="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                            password?</a>
                    </div>
                    <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded
                        shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
                        transition duration-150 ease-in-out">
                        Sign in
                    </button>
                    <p className="text-gray-800 mt-6 text-center font-sans">Not a member? <a href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
                    </p>
                </form>
            </div>
        </>
    );
}

function Signup() {
    const [isMember, setMembership] = useState(true);
    return (
        <div className="flex justify-center content-center">
            {/**Conditionally render the components based on user membership */}
            {isMember ? <Login setMembership={setMembership} /> : <Register />}
        </div>
    );
}

export default Signup;