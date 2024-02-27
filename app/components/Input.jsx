import React from "react";

const Input = () => {
  return (
    <div className="flex flex-row w-full bg-pink">
      <div className="">
        <input />
        <button>filter</button>
      </div>
    </div>
  );
};

export default Input;

// export function InputWithButton() {
//   return (
//     <div className="flex w-full max-w-sm items-center space-x-2">
//       <Input type="email" placeholder="Email" />
//       <Button type="submit">Subscribe</Button>
//     </div>
//   )
// }
