import StarsBackground from "./StarsBackground";
import Navbar from "./Navbar";
import HeaderSection from "./HeaderSection";
import ContactFormSection from "./ContactFormSection";

export default function ContactForm() {
  return (
    <div
      className="min-h-screen text-white px-6 py-12 flex flex-col items-center relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ccircle fill='%23ffffff' fill-opacity='0.15' cx='10' cy='10' r='1'%3E%3Canimate attributeName='fill-opacity' values='0.15;0.05;0.15' dur='3s' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle fill='%23ffffff' fill-opacity='0.1' cx='60' cy='40' r='1.2'%3E%3Canimate attributeName='fill-opacity' values='0.1;0.2;0.1' dur='2s' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle fill='%23ffffff' fill-opacity='0.08' cx='90' cy='70' r='1.4'%3E%3Canimate attributeName='fill-opacity' values='0.08;0.18;0.08' dur='4s' repeatCount='indefinite' /%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "100px 100px",
        backgroundColor: "#0f172a",
      }}
    >
      <StarsBackground />
      <Navbar />
      <HeaderSection />
      <ContactFormSection />
    </div>
  );
}