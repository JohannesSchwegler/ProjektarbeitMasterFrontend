import React from 'react'
import s from './Register.scss'

export default function Register() {
    return (
        <section className={s.register}>

            <div className={s.register__wrapper}>
                <h2 className={s.register__title}>Logo</h2>

                <div className={s.register__form__container}>

                    <div className={s.register__form__body}>

                        <h2>Sign in to your account</h2>

                        <form action="#" method="POST">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Your email address
              </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input
                                        id="email"
                                        required={true}
                                        type="email"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Your password
              </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input
                                        id="password"
                                        required={true}
                                        type="password"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember_me"
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                    />
                                    <label
                                        htmlFor="remember_me"
                                        className="ml-2 block text-sm leading-5 text-gray-900"
                                    >
                                        Remember me
                </label>
                                </div>

                                <div className="text-sm leading-5">
                                    <a
                                        href="./password-reset.html"
                                        className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                                    >
                                        Forgot your password?
                </a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button
                                        id="sign-in-btn"
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-blue hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                                    >
                                        Sign in
                </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </section>
    )
}
