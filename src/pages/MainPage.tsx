import HowThisWasMade from "../components/HowThisWasMade";
import LilFooter from "../components/LilFooter";
import MainSection from "../components/MainSection";
import QuotesSection from "../components/QuotesSection";
import WakatimeChart from "../components/WakatimeChart";
import WorkSection from "../components/WorkSection";

export default function MainPage() {
  return (
    <>
      <MainSection />
      <div className="w-full h-full bg-blue" />
      <QuotesSection />
      <WorkSection />
      <WakatimeChart />
      <HowThisWasMade />
      <div className="h-[64px]" />
      <LilFooter />
    </>
  );
}
