import LinkButton from "../ui/LinkButtons";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="flex">
          <div className="w-1/5 h-screen">
            <LinkButton />
          </div>
          <div className="w-4/5">{children}</div>
        </div>
      </body>
    </html>
  );
}
