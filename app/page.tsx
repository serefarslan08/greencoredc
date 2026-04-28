"use client";

import { useState } from "react";
import {
  ChevronDown,
  ShoppingCart,
  ShieldCheck,
  TrendingUp,
  Lock,
  Leaf,
  Zap,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Server,
  Cpu,
  HardDrive,
  Gauge,
  MonitorCog,
  Database,
  ArrowLeft,
} from "lucide-react";

function MoneyStackIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 text-[#2a7b4e]" fill="none">
      <rect x="16" y="26" width="32" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="20" y="20" width="32" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="29" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M24 29H24.01M48 29H48.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Logo() {
  return <img src="/logo.png" alt="GreenCore DC" className="h-24 w-auto" />;
}

const topCards = [
  { icon: MoneyStackIcon, title: "Düşük Maliyet", text: "Enerji tasarrufu sayesinde en uygun fiyatlar." },
  { icon: ShieldCheck, title: "Yüksek Uptime", text: "7/24 izlenen kesintisiz güvenilir hizmet." },
  { icon: TrendingUp, title: "Esnek Yapı", text: "Değişen ihtiyaçlara göre kolayca genişleyebilir." },
  { icon: Lock, title: "Güvenli", text: "En üst düzeyde altyapı ve veri güvenliği." },
];

const bottomCards = [
  { icon: Leaf, title: "Çevreci Enerji", text: "Enerji tasarrufu sayesinde en uygun fiyatlar." },
  { icon: ShieldCheck, title: "Güvenilir Altyapı", text: "Güvenilir ihtiyaçlara göre kolay genişleyebilir." },
  { icon: Zap, title: "Akıllı Çözümler", text: "Değişen ihtiyaçlara göre kolayca genişleyebilen yapı." },
  { icon: Globe2, title: "Daha İyi Bir Yarın", text: "En üst düzeyde altyapı ve veri güvenliği." },
];

function InfoCard({ icon: Icon, title, text }: any) {
  return (
    <div className="rounded-[22px] bg-white px-7 py-8 text-center shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/60">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f8fff4] to-[#eef8eb]">
        <Icon className="h-12 w-12 text-[#2a7b4e]" strokeWidth={1.9} />
      </div>
      <h3 className="text-[22px] font-semibold tracking-tight text-[#184b35]">{title}</h3>
      <p className="mx-auto mt-4 max-w-[210px] text-[15px] leading-8 text-slate-500">{text}</p>
    </div>
  );
}

function RangeBox({ icon: Icon, title, value, setValue, min, max, step, suffix }: any) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
          <Icon className="h-6 w-6" /> {title}
        </div>
        <div className="text-2xl font-bold text-slate-900">
          {value} <span className="text-base">{suffix}</span>
        </div>
      </div>

      <input
        className="w-full accent-[#24c947]"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <div className="mt-2 flex justify-between text-xs text-slate-400">
        <span>
          {min} {suffix}
        </span>
        <span>
          {max} {suffix}
        </span>
      </div>
    </div>
  );
}

function ToggleCard({ title, price, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${
        active ? "border-[#24c947] bg-green-50" : "border-slate-200 bg-white hover:border-[#24c947]/50"
      }`}
    >
      <div>
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-sm font-bold text-[#24c947]">+ {price.toLocaleString("tr-TR")}₺ / Aylık</div>
      </div>

      <div className={`h-6 w-11 rounded-full p-1 ${active ? "bg-[#24c947]" : "bg-slate-200"}`}>
        <div className={`h-4 w-4 rounded-full bg-white transition ${active ? "translate-x-5" : ""}`} />
      </div>
    </button>
  );
}

function Summary({ label, value, price }: any) {
  return (
    <div className="flex items-start justify-between border-b border-dashed border-slate-200 py-3 text-sm">
      <div>
        <div className="text-slate-400">{label}</div>
        <div className="font-semibold text-slate-700">{value}</div>
      </div>
      <div className="font-bold text-[#24c947]">{Number(price).toLocaleString("tr-TR")}₺</div>
    </div>
  );
}

function ServerConfigurator({ goHome }: { goHome: () => void }) {
  const [os, setOs] = useState<"linux" | "windows">("linux");
  const [cpu, setCpu] = useState(2);
  const [ram, setRam] = useState(4);
  const [ssd, setSsd] = useState(80);
  const [traffic, setTraffic] = useState(10);
  const [ip, setIp] = useState(1);
  const [panel, setPanel] = useState("cPanel");
  const [backup, setBackup] = useState(false);
  const [management, setManagement] = useState(false);
  const [ids, setIds] = useState(false);
  const [remote, setRemote] = useState(false);
  const [mssql, setMssql] = useState(false);

  const osPrice = os === "windows" ? 900 : 0;

  const panelPrice: any = {
    Yok: 0,
    cPanel: 1800,
    Plesk: 1125,
    CyberPanel: 0,
    NextCloud: 0,
  };

  const total =
    osPrice +
    cpu * 180 +
    ram * 90 +
    ssd * 4.5 +
    traffic * 90 +
    ip * 135 +
    panelPrice[panel] +
    (backup ? 333 : 0) +
    (management ? 1125 : 0) +
    (ids ? 450 : 0) +
    (remote && os === "windows" ? 270 : 0) +
    (mssql && os === "windows" ? 7200 : 0);

  return (
    <div className="min-h-screen bg-[#f7f9fb] pt-36">
      <div className="mx-auto max-w-[1180px] px-6 pb-20">
        <button
          onClick={goHome}
          className="mb-6 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana sayfaya dön
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#184b35]">Sunucu Konfigüratörü</h1>
          <p className="mt-3 text-slate-500">
            CPU, RAM, SSD, trafik, IP ve ek hizmetleri seçerek fiyatı canlı hesaplayın.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6 rounded-3xl bg-white p-6 shadow ring-1 ring-slate-200">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setOs("linux")}
                className={`rounded-2xl border p-5 font-bold ${
                  os === "linux" ? "border-yellow-400 bg-yellow-50" : "border-slate-200"
                }`}
              >
                🐧 Linux
              </button>

              <button
                onClick={() => setOs("windows")}
                className={`rounded-2xl border p-5 font-bold ${
                  os === "windows" ? "border-sky-400 bg-sky-50" : "border-slate-200"
                }`}
              >
                🪟 Windows
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-slate-800">
                <MonitorCog className="h-5 w-5" />
         Kontrol Panelleri ve Yazılımlar
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                {[ "cPanel", "Plesk", "CyberPanel", "NextCloud"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPanel(p)}
                    className={`rounded-xl border p-4 text-left ${
                      panel === p ? "border-[#24c947] bg-green-50" : "border-slate-200"
                    }`}
                  >
                    <div className="font-semibold">{p}</div>
                    <div className="text-sm text-[#24c947]">
                      + {panelPrice[p].toLocaleString("tr-TR")}₺ / Aylık
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <RangeBox icon={Cpu} title="CPU" value={cpu} setValue={setCpu} min={1} max={16} step={1} suffix="CPU" />
              <RangeBox icon={Database} title="RAM" value={ram} setValue={setRam} min={2} max={64} step={2} suffix="GB" />
              <RangeBox icon={HardDrive} title="SSD" value={ssd} setValue={setSsd} min={20} max={2000} step={20} suffix="GB" />
              <RangeBox icon={Gauge} title="Trafik" value={traffic} setValue={setTraffic} min={1} max={100} step={1} suffix="TB" />
              <RangeBox icon={Server} title="Ekstra IP" value={ip} setValue={setIp} min={1} max={8} step={1} suffix="Adet" />
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="mb-4 font-bold text-slate-800">Ekstra Özellikler</h2>

              <div className="grid gap-3 md:grid-cols-2">
                <ToggleCard title="Yedekleme Hizmeti" price={333} active={backup} onClick={() => setBackup(!backup)} />
                <ToggleCard title="Sunucu Yönetim Hizmeti" price={1125} active={management} onClick={() => setManagement(!management)} />
                <ToggleCard title="IDS-IPS Hizmeti" price={450} active={ids} onClick={() => setIds(!ids)} />

                {os === "windows" && (
                  <ToggleCard title="Remote Desktop Lisansı" price={270} active={remote} onClick={() => setRemote(!remote)} />
                )}

                {os === "windows" && (
                  <ToggleCard title="MSSQL Web Edition" price={7200} active={mssql} onClick={() => setMssql(!mssql)} />
                )}
              </div>
            </div>
          </div>

          <aside className="rounded-3xl bg-white p-6 shadow ring-1 ring-slate-200 lg:sticky lg:top-32 lg:h-fit">
            <div className="text-center">
              <div className="text-sm text-slate-400">Toplam Tutar</div>
              <div className="mt-2 text-4xl font-bold text-[#24c947]">{total.toLocaleString("tr-TR")}₺</div>
              <div className="mt-1 text-sm font-semibold text-slate-600">Aylık</div>

              <button className="mt-5 rounded-xl bg-[#24c947] px-8 py-3 font-bold text-white shadow hover:bg-[#1daf3c]">
                Sepete At
              </button>
            </div>

            <div className="my-6 border-t" />

            <h3 className="mb-4 text-center font-bold text-slate-800">
              {os === "linux" ? "Linux VDS Sunucu Özellikleri" : "Windows Sunucu Özellikleri"}
            </h3>

            <Summary label="Lisans" value={os === "windows" ? "Windows Server Lisansı" : "Linux Lisansı"} price={osPrice} />
            <Summary label="Kontrol Paneli" value={panel} price={panelPrice[panel]} />
            <Summary label="CPU" value={`${cpu} CPU x 2.0 GHZ`} price={cpu * 180} />
            <Summary label="RAM" value={`${ram} GB`} price={ram * 90} />
            <Summary label="SSD" value={`${ssd} GB`} price={ssd * 4.5} />
            <Summary label="Trafik" value={`${traffic} TB`} price={traffic * 90} />
            <Summary label="IP" value={`${ip} Adet`} price={ip * 135} />

            {management && <Summary label="Sunucu Yönetimi" value="Detaylar için tıklayınız." price={1125} />}
            {backup && <Summary label="Yedekleme" value="Yedekleme Hizmeti" price={333} />}
            {ids && <Summary label="IDS/IPS" value="IDS-IPS Hizmeti" price={450} />}
            {remote && os === "windows" && <Summary label="Remote Desktop" value="1 Adet" price={270} />}
            {mssql && os === "windows" && <Summary label="MSSQL" value="MSSQL Web Edition" price={7200} />}
          </aside>
        </div>
      </div>
    </div>
  );
}

function Header({ menuData, activeMenu, setActiveMenu }: any) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-8 py-3">
        <Logo />

        <nav className="hidden items-center gap-9 xl:flex">
          {menuData.map((item: any) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-[18px] font-bold text-slate-700 transition hover:text-[#185c3a]">
                {item.title}
                <ChevronDown className="h-4 w-4" />
              </button>

              {activeMenu === item.title && (
                <div className="absolute left-1/2 top-full z-50 mt-5 w-[980px] -translate-x-1/2 rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
                  <div className={`grid gap-8 ${item.columns.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                    {item.columns.map((column: any) => (
                      <div key={column.title}>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#185c3a]">
                          {column.title}
                        </h3>

                        <div className="space-y-4">
                          {column.items.map((subItem: any) => (
                            <button
                              key={subItem.name}
                              onClick={() => {
                                if (subItem.action) {
                                  subItem.action();
                                  setActiveMenu(null);
                                }
                              }}
                              className="block w-full rounded-2xl border border-slate-200/70 p-4 text-left transition hover:border-[#185c3a]/30 hover:bg-[#185c3a]/[0.04]"
                            >
                              <div className="text-[15px] font-semibold text-slate-900">{subItem.name}</div>
                              <p className="mt-1 text-sm leading-6 text-slate-500">{subItem.desc}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
  );
}

export default function Page() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [page, setPage] = useState<"home" | "server">("home");

  const menuData = [
    {
      title: "Sunucu",
      columns: [
        {
          title: "Sunucu",
          items: [
            {
              name: "Sunucu Konfigüratörü",
              desc: "CPU, RAM, SSD, trafik ve ek hizmetleri seçerek sunucunuzu oluşturun.",
              action: () => setPage("server"),
            },
            {
              name: "Sanal Sunucu",
              desc: "Tüm işletim sistemlerini tek tıkla kurabileceğiniz sanal sunucu paketlerimiz.",
            },
            {
              name: "VDS Sanal Sunucu",
              desc: "Yüksek performanslı VDS sunucu çözümleri.",
            },
            {
              name: "Cloud Sunucu",
              desc: "Esnek ve ölçeklenebilir bulut sunucu altyapısı.",
            },
          ],
        },
        {
          title: "Sunucu",
          items: [
            {
              name: "Windows Sanal Sunucu",
              desc: "Windows Server işletim sistemleri ile güçlü sunucular.",
            },
            {
              name: "Fiziksel Sunucu",
              desc: "Size özel yüksek performanslı fiziksel sunucu.",
            },
            {
              name: "Dedicated",
              desc: "Kurumsal dedicated sunucu çözümleri.",
            },
            {
              name: "Sunucu Barındırma",
              desc: "Güvenli ve kesintisiz sunucu barındırma hizmeti.",
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
              desc: "Domain sorgulama ve tescil işlemleri.",
            },
            {
              name: "Domain Fiyatları",
              desc: "Güncel domain fiyatları.",
            },
            {
              name: "Whois Sorgulama",
              desc: "Alan adı kayıt bilgilerini sorgulayın.",
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
              desc: "Linux ve Windows hosting çözümleri.",
            },
            {
              name: "WordPress Hosting",
              desc: "WordPress için optimize hosting.",
            },
            {
              name: "E-Ticaret Hosting",
              desc: "Online mağazalar için güçlü hosting.",
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
              desc: "cPanel, Plesk ve diğer lisans çözümleri.",
            },
            {
              name: "SSL Sertifikaları",
              desc: "Web siteniz için SSL çözümleri.",
            },
            {
              name: "Firewall Hizmetleri",
              desc: "Ağ güvenliği için firewall çözümleri.",
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
              desc: "Şirketimiz ve vizyonumuz.",
            },
            {
              name: "İletişim",
              desc: "Bizimle iletişime geçin.",
            },
            {
              name: "Teknik Altyapı",
              desc: "Altyapımız ve veri merkezi imkanlarımız.",
            },
          ],
        },
      ],
    },
  ];

  if (page === "server") {
    return (
      <>
        <Header menuData={menuData} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <ServerConfigurator goHome={() => setPage("home")} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-slate-900">
      <Header menuData={menuData} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

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

              <button
                onClick={() => setPage("server")}
                className="mt-10 rounded-2xl bg-[#1f6a45] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#195638]"
              >
                Sunucu Oluştur
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-24">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-8 md:grid-cols-2 xl:grid-cols-4">
          {topCards.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
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
            <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
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
