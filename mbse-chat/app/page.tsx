import Header from "./components/Header"
import ChatSection from "./components/ChatSection"
import Footer from "./components/Footer"
import FooterGradient from "@/app/components/FooterGradient";

export default function Home() {
  return (
      <>
      <FooterGradient />
          <div className="flex flex-col h-full w-full min-h-[calc(100vh-65px)]">
              <ChatSection/>
          </div>
      </>
  )
}
