import { Button, Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import useRegister from "./useRegister";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full lg:w-1/3 flex-col  items-center justify-center gap-10">
        <Image src="/images/general/logo.svg" alt="logo" width={180} height={180} />
        <Image
          src="/images/illustrations/login.svg"
          alt="login"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        />
      </div>
      <div>
        <Card>
          <CardBody className="p-8">
            <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
            <p className="mb-4 text-small">
              Have an account?&nbsp;
              <Link href="/login" className="font-semibold text-danger-400">
                Login here
              </Link>
            </p>
            <form className="flex flex-col w-80 gap-4">
              <Input type="text" label="Full Name" variant="bordered" autoComplete="off" />
              <Input type="text" label="Username" variant="bordered" autoComplete="off" />
              <Input type="email" label="Email" variant="bordered" autoComplete="off" />
              <Input
                type={isVisible ? "text" : "password"}
                label="Password"
                variant="bordered"
                autoComplete="off"
                endContent={
                  <button
                    type="button"
                    aria-label="toggle password visibility"
                    className="focus:outline-solid outline-transparent"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
              <Input
                type={isVisible ? "text" : "password"}
                label="Password Confirmation"
                variant="bordered"
                autoComplete="off"
                endContent={
                  <button
                    type="button"
                    aria-label="toggle password visibility"
                    className="focus:outline-solid outline-transparent"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
              <Button color="danger" size="lg" type="submit">
                Register
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Register;
