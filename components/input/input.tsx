type InputProps = {
  label: string;
  type: string;
};

export const Input = ({ label, type }: InputProps) => {
  return (
    <div className="w-full">
      {/* <label className="text-sm font-light">{label}</label> */}
      <input
        className="bg-transparent border-b border-black w-full text-xs placeholder-black"
        type={type}
        placeholder={label}
      />
    </div>
  );
};

export const MessageInput = ({ label, type }: InputProps) => {
  return (
    <div className="w-full">
      {/* <label className="text-sm font-light">{label}</label> */}
      <textarea
        className="bg-transparent border-b border-black w-full text-xs h-[40vh] placeholder-black"
        placeholder={label}
      />
    </div>
  );
};
