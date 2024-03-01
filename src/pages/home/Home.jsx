import Prices from "../../components/home/home/business_section/Prices";
import Hero from "../../components/home/home/hero_section/Hero";
import Services from "../../components/home/home/services_section/Services";
import Testimonials from "../../components/home/home/testimonials_section/Testimonials";


const Home = () => {
  return (
    <section className="w-screen min-h-screen">
      <Hero />
      <div className="flex flex-col gap-[20vh] py-[20vh]">
      <Services />
      <Prices />
      <Testimonials />
      </div>
    </section>
  );
};

export default Home;
