import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Projects from './components/Projects.tsx';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StackingCards from './components/StackingCards';
import AboutSection from './components/AboutSection';
import SectionComponent from './components/SectionComponent.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />   
          <main>
     <section id="home">
      <Hero />
     </section>
       <section id="about">
      <AboutSection />
       </section>
       <section id="stackingcards">
        <StackingCards />
       </section>

         <Skills />
         <section id="projects">
<Projects />
         </section>
                     <SectionComponent />
       <section id="contact">
        <Contact />
       </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;