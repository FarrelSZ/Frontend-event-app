import { Button, Card, CardBody, Input, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import useRegister from "./useRegister";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useRegister from "./useRegister";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
  const { isVisible, toggleVisibility, control, handleSubmit, errors, handleRegister, isPendingRegister } =
    useRegister();

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
            <h2 className="text-2xl font-bold text-danger-500">Create Account</h2>
            <p className="mb-4 mt-2 text-small">
              Have an account?&nbsp;
              <Link href="/auth/login" className="font-semibold text-danger-400">
                Login here
              </Link>
            </p>
            {errors.root && <p className="mb-2 font-medium text-danger">{errors.root?.message}</p>}
            <form
              className={cn("flex flex-col", Object.keys(errors).length > 0 ? "gap-2" : "gap-4")}
              onSubmit={handleSubmit(handleRegister)}
            >
              <Controller
                name="fullname"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Full Name"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.fullname !== undefined}
                    errorMessage={errors.fullname?.message}
                  />
                )}
              />
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Username"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.username !== undefined}
                    errorMessage={errors.username?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    label="Email"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.email !== undefined}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type={isVisible.password ? "text" : "password"}
                    label="Password"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.password !== undefined}
                    errorMessage={errors.password?.message}
                    endContent={
                      <button
                        type="button"
                        aria-label="toggle password visibility"
                        className="focus:outline-solid outline-transparent"
                        onClick={() => toggleVisibility("password")}
                      >
                        {isVisible.password ? (
                          <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type={isVisible.confirmPassword ? "text" : "password"}
                    label="Password Confirmation"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.confirmPassword !== undefined}
                    errorMessage={errors.confirmPassword?.message}
                    endContent={
                      <button
                        type="button"
                        aria-label="toggle passwordConfirmation visibility"
                        className="focus:outline-solid outline-transparent"
                        onClick={() => toggleVisibility("confirmPassword")}
                      >
                        {isVisible.confirmPassword ? (
                          <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                )}
              />

              <Button color="danger" size="lg" type="submit">
                {isPendingRegister ? <Spinner color="white" size="sm" /> : "Register"}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Register;
