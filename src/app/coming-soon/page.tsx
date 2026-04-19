import Link from "next/link";
import NavBar from "@/components/nav";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <NavBar/>
      <div className="flex-1 flex items-center justify-center flex-col gap-1">
        <h1 className="p-5">Coming soon</h1>
        <Link
          className="p-2 text-xl font-semibold border-1 rounded-sm hover:bg-[#e0e0e0] hover:text-[#0e0e0e] transition-all"
          href={"/"}>Go back to home page</Link>
      </div>
    </div>
  )
}