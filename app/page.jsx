import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full flex-grow ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/**text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br /> <span className="text-accent">Sai Sharan Karam</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Senior Software Engineer with expertise in full stack
              development and cloud migrations, specializing in Java, Python, JS
              frameworks and SQL. I excel in creating high-performance systems
              and solving complex data challenges.
            </p>
            {/**Buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <a href="https://drive.google.com/file/d/1IkpnNwp14_bVko2oe5mSsNsF7Rbb46bR/view?usp=share_link" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppsercase flex item-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a> */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/**Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
