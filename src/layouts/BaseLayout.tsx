import { ReactNode } from "react";

import { BaseFooter, BaseHeader } from "@/components";

interface Props {
  children: ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <div className="root flex flex-col min-h-screen max-w-screen-2xl">
      <BaseHeader />
      <main className="content flex flex-col grow">{children}</main>
      <BaseFooter />
    </div>
  );
};

export { BaseLayout };
