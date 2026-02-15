import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function FormField({ children }: Props) {
  return <div className="mb-4 w-full">{children}</div>;
}
