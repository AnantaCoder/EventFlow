import React from "react";

type Props = {
  message?: string;
};

export default function ErrorText({ message }: Props): React.ReactElement | null {
  if (!message) return null;

  return (
    <p className="mt-1 text-xs text-red-500 font-medium">
      {message}
    </p>
  );
}
