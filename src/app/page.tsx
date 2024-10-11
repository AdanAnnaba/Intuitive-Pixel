import About from "@/components/About";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import Works from "@/components/Works";
import Testimonial from "@/components/Testimonial";
import BlogsCta from "@/components/BlogsCta";
export default function Home() {
  return (
    <div>
      <Herosection></Herosection>
      <Service></Service>
      <About></About>
      <Pricing></Pricing>
      <Works></Works>
      <Testimonial></Testimonial>
      <BlogsCta></BlogsCta>
      <Footer></Footer>
    </div>
  );
}
