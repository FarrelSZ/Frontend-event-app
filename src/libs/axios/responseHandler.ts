import { AxiosError } from "axios";
import { error } from "console";
import { signOut } from "next-auth/react";

interface ErrorResponseData {
  data: {
    name: string;
  };
}

const onErrorHandler = (error: Error) => {
  const { response } = error as AxiosError<ErrorResponseData>;
  const res = response?.data as ErrorResponseData;
  if (response && res?.data?.name === "TokenExpiredError") {
    signOut();
  }
};

export { onErrorHandler };
