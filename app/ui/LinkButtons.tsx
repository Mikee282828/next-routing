"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
export default function LinkButton() {
  const path = usePathname();
  return (
    <div className="h-full w-full border-blue-500 border text-white">
      <Link
        href={"/routeone"}
        className={clsx(
            " hover:text-blue-400 w-full text-center block mb-3",
          {
            "text-blue-400": path === "/routeone",
          } // non funziona se metti text-white sia prima o dopo dell'oggetto con la condizione 
            // perché i non condizionali in clsx vengono applicati prima
        )}
      >
        Route one
      </Link>
      <Link
        className={clsx(
          " hover:text-blue-400 w-full text-center block mb-3",
          {
            "text-blue-400": path === "/routeone/routetwo",
          }
        )}
        href={"/routeone/routetwo"}
      >
        Route two
      </Link>
      <Link
        className={clsx(
          " hover:text-blue-400 w-full text-center block mb-3",
          {
            "text-blue-400": path === "/routeone/routetwo/routethree",
          }
        )}
        href={"/routeone/routetwo/routethree"}
      >
        Route three
      </Link>
      <Link
        className=
          " hover:text-blue-400 w-full text-center block mb-3"
        href={"/"}
      >
        Home
      </Link>

    </div>
  );
}
