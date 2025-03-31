import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link
        href={"/dashboard"}
        className="bg-blue text-white font-semibold rounded-2xl p-2"
      >
        Go TO DashBoard{" "}
      </Link>
    </div>
  );
}
