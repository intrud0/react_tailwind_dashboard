import React from "react";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <p>This is The User</p>
      <Link to="/" className="underline">
        Go to Dashboard
      </Link>
    </div>
  );
}
