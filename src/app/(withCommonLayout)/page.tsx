import AboutBanner from "@/components/FrontPage/AboutBanner";
import FinanceHighlightsSection from "@/components/FrontPage/FinanceHighlightsSection";
import MainBanner from "@/components/FrontPage/MainBanner";
import MakeAppointment from "@/components/FrontPage/MakeAppointment";
import MissionStatement from "@/components/FrontPage/MissionStatement";
import ServiceSection from "@/components/FrontPage/ServiceSection";
import SuccessActionStep from "@/components/FrontPage/SuccessActionStep";
import Testimonial from "@/components/FrontPage/Testimonial";
import WhyChooseUp from "@/components/FrontPage/WhyChooseUp";

export default function Home() {
  return (
    <div className="">
      <MainBanner />
      <AboutBanner />
      <FinanceHighlightsSection />
      <ServiceSection />
      <WhyChooseUp />
      <MissionStatement />
      <SuccessActionStep />
      <Testimonial />
      <MakeAppointment />
    </div>
  );
}
