import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen text-2xl text-red-500 flex-wrap">
      <div className="w-full text-center">pagina principale</div>
      <div className="border-2 bg-blue-400 text-blue-800 block">
        <Link href={"/routeone"}>routeone</Link>
      </div>
    </div>
  );
}
