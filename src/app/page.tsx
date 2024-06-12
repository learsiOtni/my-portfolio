import Footer from "@/components/Footer/Footer";
import Links from "@/components/Links/Links";
import ProjectCards from "@/components/ProjectCards/ProjectCards";
import TechStack from "@/components/TechStack/TechStack";
import SmallMenu from "@/components/SmallMenu/SmallMenu";

export default function Home() {
  return (
    <>
      <header>
        <nav className="hidden sm:block">
          <ul className="mt-5 p-2 flex items-center justify-center gap-10">
            <Links/>
          </ul>
        </nav>

        <div className="p-5 float-right sm:hidden">
          <SmallMenu/>
        </div>
        
      </header>

      <main className="min-h-screen p-5 sm:p-20">
        {/** Hero */}
        <div className="mt-20 flex items-center justify-center">
          <div>
            <h1 className="text-[#cfd9ed] text-2xl sm:text-5xl">Hi, I&#39;m Izzy.</h1>
            <h2 className="text-[#cfd9ed] text-xl sm:text-3xl">
              A Front-End/Web Developer.
            </h2>
            <p className="text-body">
              I&#39;m passionate about solving real life problems and coding it into
              life.
            </p>
          </div>
        </div>

        {/** Tech Stack */}
        <div className="mt-48 mb-20">
          <h1 className="mb-5 text-title">Tech Stack</h1>
          <TechStack />
        </div>

        {/** Portfolio */}
        <div id="portfolio" className="h-5" />
        <div>
          <h1 className="mb-10 text-title">Projects</h1>
          <ProjectCards />
        </div>

        {/** Footer */}
        <footer className="mt-48">
          <Footer/>
        </footer>
      </main>
    </>
  );
}
