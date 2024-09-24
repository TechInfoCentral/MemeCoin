import { ToolTipPieChart } from "components/TooltipPieChart"

export const TokenomicsSection = () => {
  return (
    <div className=" bg-primaryPurple-900 rounded-2xl">
      <h2 className="pt-8 pb-4 text-3xl font-bold text-center text-white">Our Projects Tokenomics</h2>
      <div className="flex justify-center gap-12 px-4 py-8 xs:flex-col">
        <ToolTipPieChart data={[
          { title: "Listings & Developments", value: 10, color: "#ffffff" },
          { title: "Liquidity Pool", value: 90, color: "#FF9800" }
        ]} />
        <div className="grid grid-cols-1 p-2 xs:grid-cols-2 place-items-center">
          <div className="flex flex-col gap-2 font-bold">
          <span className="text-xl text-neutral-300">Symbol</span>
          <span className="text-xs text-white">$ASTROFUEL</span>
          </div>
          <div className="flex flex-col gap-2 font-bold">
          <span className="text-xl text-neutral-300">Total Supply</span>
            <span className="text-xs text-white">100,000,000,000,000</span>
          </div>
        </div>
      </div>
    </div>
  )
}
