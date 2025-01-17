import MainForm from "./components/form"
import { ModeToggle } from "./components/theme-toggle"

function App() {

  return (
    <>
      <div className="w-screen h-screen bg-background flex justify-center items-center">
        <div className="rounded-sm border min-w-[600px] overflow-hidden p-6">
          <div className=" flex items-center justify-between">
            <h1 className="ml-2 text-lg font-semibold">Padronizador de processos RHF</h1>
            <ModeToggle />
          </div>
          <div className="p-2">
            <MainForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
