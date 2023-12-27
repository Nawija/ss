import Link from "next/link";

export default function OMnie() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Link href="/" className="border p-2 text-sm">
        Powrót
      </Link>
    </div>
  );
}
