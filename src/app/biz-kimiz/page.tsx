import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BizKimizContent } from "@/components/landing/biz-kimiz/biz-kimiz-content";

export const metadata: Metadata = {
  title: "Biz Kimiz? | Mega Reform",
  description:
    "Megareform olarak misyonumuz: Kendi yaşamını, hayata bakışını, bedenini veya zihnini dönüştürmek isteyen herkesin aradığı uzmanı ve etkinliği kolaylıkla bulması.",
};

export default function BizKimizPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <BizKimizContent />
      </main>
      <Footer />
    </>
  );
}
