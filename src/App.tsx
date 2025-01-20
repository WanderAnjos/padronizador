import { BringToFront } from "lucide-react"
import MainForm from "./components/form"
import { ThemeToggle } from "./components/theme-toggle"

function App() {

  return (
    <>
      <div className="w-screen min-h-screen py-4 bg-background flex justify-center items-center flex-col relative">
        <div className="w-[700px] rounded-xl overflow-hidden p-6 border">
          <div className="flex justify-between items-center pb-4 mb-2">
            <div className="flex justify-start items-center gap-2">
              <BringToFront />
              <h1 className="text-xl font-semibold flex gap-2 items-center">Padronizador de retorno</h1>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
          <MainForm />
        </div>
      </div>
    </>
  )
}

export default App
