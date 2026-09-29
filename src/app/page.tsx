import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Courses from "@/components/sections/Courses";
import Categories from "@/components/sections/Categories";
import Growth from "@/components/sections/Growth";
import CreateManage from "@/components/sections/CreateManage";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Courses />
        <Categories />
        <Growth />
        <CreateManage />
        <CTA />
      </main>
    </>
  );
}