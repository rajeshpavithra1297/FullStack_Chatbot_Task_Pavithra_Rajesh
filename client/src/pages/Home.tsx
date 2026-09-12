import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Courses from "../components/Courses";
import Chatbot from "../components/Chatbot";
import EnquiryForm from "../components/EnquiryForm";

function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Courses />
        <EnquiryForm />
      </main>

      <Chatbot />
    </div>
  );
}

export default Home;