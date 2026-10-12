"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

type WelcomeGateProps = {
  children: ReactNode;
};

export default function WelcomeGate({ children }: WelcomeGateProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [allowedPath, setAllowedPath] = useState<string | null>(null);

  useEffect(() => {
    // Welcome adalah halaman asli: selalu boleh dibuka, termasuk lewat Back.
    if (pathname === "/welcome") return;

    const entered =
      sessionStorage.getItem("portfolio-welcome-entered") === "true";

    if (!entered) {
      // Ganti entry awal / menjadi /welcome, lalu pilihan bahasa
      // membuat entry Home baru. Back dari Home kembali ke Welcome.
      setAllowedPath(null);
      router.replace("/welcome");
      return;
    }

    setAllowedPath(pathname);
  }, [pathname, router]);

  if (pathname === "/welcome") return <>{children}</>;
  if (allowedPath !== pathname) return null;
  return <>{children}</>;
}
