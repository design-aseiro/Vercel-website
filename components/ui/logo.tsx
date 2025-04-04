import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logos/aseiro_logo.svg" // or .png if you prefer
        alt="Aseiro Industries Logo"
        width={120}         // Adjust this if needed
        height={40}
        className="object-contain"
        priority
        layout="intrinsic"
      />
    </Link>
  );
}
