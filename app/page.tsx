import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectShowcase from "@/components/project-showcase"
import AboutSection from "@/components/about-section"
import MissionStatement from "@/components/mission-statement"
import ProjectsGrid from "@/components/projects-grid"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ProjectShowcase />
      <AboutSection />
      <MissionStatement />
      <ProjectsGrid />
      {/* <ContactForm /> */}
      <Footer />
    </main>
  )
}