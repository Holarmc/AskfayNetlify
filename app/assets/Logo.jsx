import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <div className="font-black text-pink-200">
      <Link to={`/`}>AskFAY</Link>
    </div>
  );
}
