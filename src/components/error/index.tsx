import React from "react";
import { MdError } from "react-icons/md";
type Props = {
  error: string;
  refetch: () => void;
};

const Error = ({ error, refetch }: Props) => {
  return (
    <div className="grid place-items-center rounded w-full m-2 mx-auto py-2 text-center bg-neutral-400">
      <div>
        <MdError className="animate-none" size={60} />
      </div>
      <p className="font-semibold text-lg">Bir sorun oluştu</p>
      <div className="text-neutral-800 mt-3">{error}</div>
      <button
        className="bg-neutral-800 hover:bg-neutral-950 py-2 px-4 rounded text-neutral-400 mt-10"
        onClick={refetch}
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
