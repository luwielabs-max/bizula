import { Link } from "react-router-dom";

export default function AuthFooter({
  text = "Already have an account?",
  linkText = "Sign In",
  link = "/login",
}) {
  return (
    <p className="mt-8 text-center text-sm text-zinc-500">

      {text}{" "}

      <Link
        to={link}
        className="
          font-semibold
          text-black
          hover:underline
        "
      >
        {linkText}
      </Link>

    </p>
  );
}