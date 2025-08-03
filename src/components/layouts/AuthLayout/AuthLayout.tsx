import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface PropTypes {
  title?: string;
  children: ReactNode;
}

const AuthLayout = ({ title, children }: PropTypes) => {
  // Bisa juga begini: const { title, children } = props. nanti kalo gitu di parameter nya jadi nya (props: PropTypes)
  return (
    <>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">{children}</section>
    </>
  );
};

export default AuthLayout;
