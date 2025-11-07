import Header from "./components/Header"
import ChatSection from "./components/ChatSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
      <div className="flex flex-col h-full w-full min-h-dvh">
        <Header />
        <ChatSection />
        <Footer />
      </div>
  )
}
