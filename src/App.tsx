import Header from './components/Header'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="mt-8 text-base print:mt-0 print:text-xs">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <main className="md:w-2/3 print:text-xs">
            <Header />
            <Experience />
            <Projects />
            <Education />
          </main>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App 