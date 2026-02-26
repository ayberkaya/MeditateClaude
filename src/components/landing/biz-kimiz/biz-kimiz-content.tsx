"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PrimaryPlanCta } from "@/components/cta/PrimaryPlanCta";
import { cn } from "@/lib/utils/cn";

const MISSION =
  "Kendi yaşamını, hayata bakışını, bedenini veya zihnini dönüştürmek ve değiştirmek isteyen herkesin aradığı uzmanı ve etkinliği kolaylıkla bulmasıdır.";

const VALUES = [
  {
    title: "Erişilebilirlik",
    description:
      "Doğru uzmanı ve doğru pratiği bulmak karmaşık olmasın. Tek bir platformda, filtreler ve önerilerle aradığınız rehberliğe ulaşırsınız.",
  },
  {
    title: "Güvenilirlik",
    description:
      "Uzmanlarımız alanında yetkin, içeriklerimiz kalite kontrolünden geçer. Dönüşüm yolculuğunuz güvenli ve şeffaf bir zeminde ilerler.",
  },
  {
    title: "Kişiselleştirme",
    description:
      "Her bireyin ihtiyacı ve ritmi farklı. Hedefinize ve zamanınıza göre kişisel planlar, önerilen pratikler ve adım adım rehberlik sunuyoruz.",
  },
  {
    title: "Dönüşüm odak",
    description:
      "Sadece bilgi değil; beden, zihin ve yaşam pratiğinde gerçek değişim hedefliyoruz. Uzman rehberliği ve tutarlı pratikle ilerlemenizi destekliyoruz.",
  },
] as const;

const OFFERINGS = [
  {
    title: "Uzman rehberler",
    text: "Meditasyon, yoga, tarot, nefes teknikleri ve ruhsal gelişim alanında uzmanlar; profilleri, videoları ve kurslarıyla tek çatı altında.",
  },
  {
    title: "İçerik kütüphanesi",
    text: "Makaleler, videolar, kurslar ve rehberli pratikler. İhtiyacınıza göre keşfedin, kaydedin ve kendi ritminizde ilerleyin.",
  },
  {
    title: "Kişisel plan",
    text: "Kısa sorularla hedefinizi ve ritminizi belirleyin; size özel haftalık plan ve önerilen pratiklerle yol haritanızı oluşturun.",
  },
  {
    title: "Topluluk ve destek",
    text: "Canlı seanslar, uzman yorumları ve bültenlerle dönüşüm yolculuğunuzda yalnız kalmayın.",
  },
] as const;

export function BizKimizContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Hero */}
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Biz Kimiz?
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/70 font-body leading-relaxed">
          Mega Reform, yaşamınızı ve zihninizi dönüştürmek isteyen herkesin doğru
          uzmanı ve etkinliği kolayca bulması için var.
        </p>
      </ScrollReveal>

      {/* Mission */}
      <ScrollReveal className="mb-20 md:mb-28">
        <div
          className={cn(
            "rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12",
            "text-center max-w-4xl mx-auto"
          )}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Misyonumuz
          </p>
          <p className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed">
            &ldquo;{MISSION}&rdquo;
          </p>
        </div>
      </ScrollReveal>

      {/* Values */}
      <section className="mb-20 md:mb-28">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Neye inanıyoruz?
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Değerlerimiz, platformumuzun her kararında ve sunumunda rehberimiz.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VALUES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <article
                className={cn(
                  "rounded-2xl border border-lavender/20 bg-white p-6 md:p-8 h-full",
                  "flex flex-col"
                )}
              >
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* What we offer */}
      <section className="mb-20 md:mb-28">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Ne sunuyoruz?
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Tek bir yerden uzman rehberliği, içerik ve kişisel plana erişin.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERINGS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div
                className={cn(
                  "rounded-2xl border border-lavender/15 bg-lavender-light/30 p-6 h-full",
                  "flex flex-col"
                )}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-foreground/75 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Vision / Closing */}
      <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
        <p className="font-body text-lg text-foreground/80 leading-relaxed">
          İster meditasyonla sakinlik, ister yoga ile beden farkındalığı, ister
          tarot veya nefes teknikleriyle içsel keşif — aradığınız rehberi
          bulmanız ve dönüşümünüzü adım adım yaşamanız için buradayız.
        </p>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal className="text-center">
        <p className="font-heading text-lg font-semibold text-foreground mb-4">
          Hedefinize uygun planı oluşturun
        </p>
        <PrimaryPlanCta variant="primary" size="lg" />
      </ScrollReveal>
    </div>
  );
}
