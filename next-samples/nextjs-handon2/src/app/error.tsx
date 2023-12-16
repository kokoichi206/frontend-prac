"use client";

import { FunctionComponent, useEffect } from "react";
import { VscRefresh } from "react-icons/vsc";

const Error: FunctionComponent<{
  error: Error;
  reset: () => void;
}> = ({ error, reset }) => {
  useEffect(() => {
    console.log("error: ", error);
  }, [error]);

  return (
    <div className="w-60 mx-auto py-12">
      <div className="text-2xl font-bold mb-4">Error Occurred!</div>
      <div className="text-center">
        <button
          className="bg-gray-700 py-2 px-4 text-2xl"
          onClick={() => {
            // Q. これは何が reset になるのか?
            // A. src/app/layout.tsx の RootLayout が reset になる.
            reset();
          }}
        >
          <VscRefresh />
        </button>
      </div>
    </div>
  );
};

export default Error;
