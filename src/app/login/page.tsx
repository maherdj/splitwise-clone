import type { NextPage } from "next";
import Head from "next/head";
import LoginForm from "./loginForm";
import LoginPage from "./loginPage";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginForm />
      </main>
    </div>
  )
  
};
export default Login;
