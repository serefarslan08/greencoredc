"use client";

import { useState } from "react";
import {
  ChevronDown,
  ShoppingCart,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  Lock,
  Leaf,
  Zap,
  Globe2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function MoneyStackIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 text-[#2a7b4e]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        y="26"
        width="32"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="20"
        y="20"
        width="32"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="36"
        cy="29"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 29H24.01M48 29H48.01"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Logo() {
  return <img src="/logo.png" alt="GreenCore DC" className="h-45 w-auto" />;
}

const menuData = [
  {
    title: "Sunucu",
    columns: [
      {
        title: "Sunucu",
        items: [
          {
            name: "Sanal Sunucu",
            desc: "Tüm işletim sistemlerini tek tıkla kurabileceğiniz sanal sunucu paketlerimiz.",
          },
          {
            name: "VDS Sanal Sunucu",
            desc: "VDS sunucu kiralama hizmeti ile yüksek performanslı sunuculara sahip olabilirsiniz.",
          },
          {
            name: "Cloud Sunucu",
            desc: "Daha güçlü donanımlar ile maksimum performansa minimum özelliklerle ulaşın.",
          },
          {
            name: "Yurtdışı Sanal Sunucu",
            desc: "17 farklı lokasyonda tercih edebileceğiniz mükemmel hızda sanal sunucu.",
          },
        ],
      },
      {
        title: "Sunucu",
        items: [
          {
            name: "Windows Sanal Sunucu",
            desc: "Windows tabanlı Server işletim sistemleri ile maksimum performans ve kalite.",
          },
          {
            name: "Fiziksel Sunucu",
            desc: "Tüm donanımları kendinizin belirleyebileceği yüksek kalitede sunucular.",
          },
          {
            name: "Dedicated",
            desc: "Size özel yüksek performanslı dedicated sunucu çözümleri.",
          },
          {
            name: "Sunucu Barındırma",
            desc: "Kurumsal ihtiyaçlara uygun güvenli ve kesintisiz sunucu barındırma hizmeti.",
          },
        ],
      },
    ],
  },
  {
    title: "Alan Adı",
    columns: [
      {
        title: "Alan Adı",
        items: [
          {
            name: "Alan Adı Sorgulama",
            desc: "Alan adı sorgulama yaparak, alan adı tescil işlemlerinizi hızlıca gerçekleştirebilirsiniz.",
          },
          {
            name: "Domain Fiyatları",
            desc: "Alan adı sorgulama yaparak, alan adı tescil işlemlerinizi hızlıca gerçekleştirebilirsiniz.",
          },
          {
            name: "Whois Sorgulama",
            desc: "Alan adı transfer işlemlerinizi hızlıca gerçekleştirebilirsiniz.",
          },
        ],
      },
    ],
  },
  {
    title: "Hosting",
    columns: [
      {
        title: "Hosting Hizmetleri",
        items: [
          {
            name: "Web Hosting",
            desc: "Web hosting hizmeti ile yüksek performanslı sunuculara sahip olabilirsiniz.",
          },
          {
            name: "Windows Hosting",
            desc: "Windows hosting hizmeti ile yüksek performanslı sunuculara sahip olabilirsiniz.",
          },
          {
            name: "E-Ticaret Hosting",
            desc: "E-ticaret hosting hizmeti ile yüksek performanslı sunuculara sahip olabilirsiniz.",
          },
          {
            name: "Kampanyalı Hosting",
            desc: "Kampanyalı hosting çözümleri ile avantajlı paketlerden faydalanabilirsiniz.",
          },
          {
            name: "WordPress Hosting",
            desc: "Kurumsal bayi hosting hizmeti ile yüksek performanslı sunuculara sahip olabilirsiniz.",
          },
        ],
      },
      {
        title: "Hosting Hizmetleri",
        items: [
          {
            name: "Linux Bayi Hosting",
            desc: "Wordpress hosting hizmeti ile yüksek performanslı sunuculara sahip olabilirsiniz.",
          },
          {
            name: "Windows Bayi Hosting",
            desc: "Reseller bayi hosting hizmeti ile yüksek performanslı sunuculara sahip olabilirsiniz.",
          },
        ],
      },
    ],
  },
  {
    title: "Diğer Hizmetler",
    columns: [
      {
        title: "Diğer Hizmetler",
        items: [
          {
            name: "Lisanslar",
            desc: "İhtiyacınıza uygun lisans çözümlerini kolayca edinin.",
          },
          {
            name: "cPanel Lisansları",
            desc: "Hosting yönetimi için güçlü cPanel lisans çözümleri.",
          },
          {
            name: "Plesk Lisansları",
            desc: "Sunucu ve hosting yönetimi için Plesk lisans hizmetleri.",
          },
        ],
      },
      {
        title: "Diğer Hizmetler",
        items: [
          {
            name: "SSL Sertifikaları",
            desc: "Web sitenizi güvenli hale getiren SSL sertifika çözümleri.",
          },
          {
            name: "IPv4 Hizmetleri",
            desc: "Kurumsal ihtiyaçlar için güvenilir IPv4 hizmetleri.",
          },
          {
            name: "Firewall Hizmetleri",
            desc: "Ağ ve veri güvenliğinizi artıran profesyonel firewall hizmetleri.",
          },
        ],
      },
    ],
  },
  {
    title: "Hakkımızda",
    columns: [
      {
        title: "Hakkımızda",
        items: [
          {
            name: "Hakkımızda",
            desc: "Şirketimiz, vizyonumuz ve hizmet anlayışımız hakkında detaylı bilgi alın.",
          },
          {
            name: "İletişim",
            desc: "Bizimle iletişime geçmek için tüm iletişim kanallarımıza ulaşabilirsiniz.",
          },
          {
            name: "Teknik Altyapı",
            desc: "Altyapımızın gücü ve sunduğumuz teknik imkanlar hakkında bilgi edinin.",
          },
          {
            name: "İnsan Kaynakları",
            desc: "Kariyer fırsatlarımız ve insan kaynakları politikamız hakkında bilgi alın.",
          },
        ],
      },
    ],
  },
];

const topCards = [
 {
  icon: MoneyStackIcon,
  title: "Düşük Maliyet",
  text: "Enerji tasarrufu sayesinde en uygun fiyatlar.",
},
  {
    icon: ShieldCheck,
    title: "Yüksek Uptime",
    text: "7/24 izlenen kesintisiz güvenilir hizmet.",
  },
  {
    icon: TrendingUp,
    title: "Esnek Yapı",
    text: "Değişen ihtiyaçlara göre kolayca genişleyebilir.",
  },
  {
    icon: Lock,
    title: "Güvenli",
    text: "En üst düzeyde altyapı ve veri güvenliği.",
  },
];

const bottomCards = [
  {
    icon: Leaf,
    title: "Çevreci Enerji",
    text: "Enerji tasarrufu sayesinde en uygun fiyatlar.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir Altyapı",
    text: "Güvenilir ihtiyaçlara göre kolay genişleyebilir.",
  },
  {
    icon: Zap,
    title: "Akıllı Çözümler",
    text: "Değişen ihtiyaçlara göre kolayca genişleyebilen yapı.",
  },
  {
    icon: Globe2,
    title: "Daha İyi Bir Yarın",
    text: "En üst düzeyde altyapı ve veri güvenliği.",
  },
];

function MegaMenuItem({
  item,
  activeMenu,
  setActiveMenu,
}: {
  item: (typeof menuData)[0];
  activeMenu: string | null;
  setActiveMenu: (value: string | null) => void;
}) {
  const isOpen = activeMenu === item.title;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveMenu(item.title)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center gap-1 text-[18px] font-bold text-slate-700 transition hover:text-[#185c3a]">
        {item.title}
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 mt-5 w-[980px] -translate-x-1/2 rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
          <div
            className={`grid gap-8 ${
              item.columns.length === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {item.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#185c3a]">
                  {column.title}
                </h3>

                <div className="space-y-4">
                  {column.items.map((subItem) => (
                    <a
                      key={subItem.name}
                      href="#"
                      className="block rounded-2xl border border-slate-200/70 p-4 transition hover:border-[#185c3a]/30 hover:bg-[#185c3a]/[0.04]"
                    >
                      <div className="text-[15px] font-semibold text-slate-900">
                        {subItem.name}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {subItem.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] bg-white px-7 py-8 text-center shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/60">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f8fff4] to-[#eef8eb]">
        <Icon className="h-12 w-12 text-[#2a7b4e]" strokeWidth={1.9} />
      </div>
      <h3 className="text-[22px] font-semibold tracking-tight text-[#184b35]">
        {title}
      </h3>
      <p className="mx-auto mt-4 max-w-[210px] text-[15px] leading-8 text-slate-500">
        {text}
      </p>
    </div>
  );
}

export default function Page() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-8 py-5">
          <Logo />

          <nav className="hidden items-center gap-9 xl:flex">
            {menuData.map((item) => (
              <MegaMenuItem
                key={item.title}
                item={item}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            ))}

            <a
              href="#"
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#185c3a] hover:text-[#185c3a]"
            >
              <ShoppingCart className="h-4 w-4" />
              Sepet
            </a>
          </nav>

          <button className="rounded-xl bg-[#1f6a45] px-8 py-3 text-[15px] font-medium text-white shadow-[0_8px_24px_rgba(31,106,69,0.22)] transition hover:bg-[#195638]">
            Teklif Al
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden pt-[96px]">
        <div
          className="relative min-h-[760px] bg-cover bg-center"
        style={{
  backgroundImage:
    "linear-gradient(90deg, rgba(245,245,245,0.85) 0%, rgba(245,245,245,0.70) 25%, rgba(245,245,245,0.30) 50%, rgba(245,245,245,0.10) 75%, rgba(245,245,245,0.00) 100%), url('/datacenter.jpg')",
}}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.85),transparent_35%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f5f5f5] to-transparent" />

          <div className="relative mx-auto flex max-w-[1240px] items-start justify-between px-8 pt-24">
            <div className="max-w-[560px] pt-10">
              <h1 className="text-[72px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#184b35]">
                GreenCore DC
              </h1>

              <p className="mt-8 text-[34px] leading-[1.22] tracking-[-0.03em] text-slate-700">
                Sürdürülebilir enerji ile
                <br />
                güçlendirilmiş veri merkezleri.
              </p>

              
            </div>

            
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-24">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-8 md:grid-cols-2 xl:grid-cols-4">
          {topCards.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className="px-8 pb-10 pt-24">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[64px] font-semibold leading-[1.12] tracking-[-0.05em] text-[#184b35]">
            Enerjinizi Verimli Kullanın,
            <br />
            Geleceğinize Yatırım Yapın
          </h2>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-8 md:grid-cols-2 xl:grid-cols-4">
          {bottomCards.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/70 py-8 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-10 px-8 text-[17px] font-medium tracking-[0.24em] text-[#335943] md:justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="h-6 w-6 text-[#4ba44d]" />
            GREEN ENERGY
          </div>

          <div className="hidden h-8 w-px bg-slate-300 md:block" />

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-[#7fa946]" />
            RELIABLE
          </div>

          <div className="hidden h-8 w-px bg-slate-300 md:block" />

          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-[#f1c733]" />
            SMART SOLUTIONS
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-8 py-20">
        <div className="mx-auto max-w-[1240px] rounded-[28px] bg-[#163b2b] px-8 py-10 text-white shadow-[0_20px_60px_rgba(16,24,40,0.14)] lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h3 className="text-4xl font-semibold tracking-tight">
                GreenCore DC ile güçlü ve sürdürülebilir altyapıya geçin.
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">
                Veri merkezi ihtiyaçlarınız için size özel çözümler üretelim.
              </p>
            </div>

            <div className="space-y-4 rounded-[22px] border border-white/10 bg-white/5 p-6 text-base text-white/90">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#f1c733]" />
                info@greencoredc.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#f1c733]" />
                +90 (___) ___ __ __
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-[#f1c733]" />
                www.greencoredc.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#f1c733]" />
                Türkiye
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
