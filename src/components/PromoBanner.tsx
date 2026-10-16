import { Bottle } from "./Bottle";

export function PromoBanner() {
  return (
    <section className="px-4">
      <div className="relative h-[148px] overflow-hidden rounded-3xl bg-brand-600 p-5 text-white">
        {/* decorative circles */}
        <div className="absolute -right-10 -bottom-16 size-48 rounded-full bg-brand-700" />
        <div className="absolute right-16 -top-10 size-24 rounded-full bg-brand-500/60" />

        <div className="relative z-10 max-w-[58%]">
          <span className="inline-block rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">
            Ưu đãi tuần này
          </span>
          <h2 className="mt-2 text-[20px] leading-[1.15] font-extrabold">
            Giảm 20% combo 3 chai
          </h2>
          <p className="mt-1 text-[12px] text-white/80">Freeship cho đơn từ 150.000đ</p>
        </div>

        <div className="absolute right-3 bottom-0 z-10 flex items-end">
          <Bottle body="#fbf6ef" cap="#1d1b1a" label="#c8102e" labelText="CHILLI" className="h-[104px] -mr-4 rotate-[-8deg]" />
          <Bottle body="#fbf6ef" cap="#1d1b1a" label="#f5a524" labelText="SWEET" className="h-[124px] relative z-10" />
          <Bottle body="#fbf6ef" cap="#2f7d4b" label="#a50d26" labelText="SRIRACHA" className="h-[104px] -ml-4 rotate-[8deg]" />
        </div>
      </div>
    </section>
  );
}
