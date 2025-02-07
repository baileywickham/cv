const projects = [
  {
    name: 'fuzzer',
    url: 'https://github.com/baileywickham/fuzzer',
    tech: 'Go',
    description: 'A markov chain based fuzzer written in Go which generates new data based on an input corpus to test applications. Supports multiple markov chains and test corpuses in parallel.'
  },
  {
    name: 'dns',
    url: 'https://github.com/baileywickham/dns',
    tech: 'Rust',
    description: 'A small dns client written in Rust. Written to experiment with Rust and DNS standards.'
  },
  {
    name: 'PrettyCities',
    url: 'https://github.com/baileywickham/PrettyCities',
    tech: 'Python/Tensorflow/Keras',
    description: 'Use Keras and Google maps API to try to generate predictions about how pretty a city is.'
  }
]

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-light mb-6">Side Projects</h2>
      <div className="space-y-6">
        {projects.map(project => (
          <div key={project.name}>
            <div className="flex items-center gap-2 mb-2">
              <a href={project.url} className="text-blue-500 hover:underline">{project.name}</a>
              <span className="px-2 py-0.5 text-xs font-medium bg-gray-200 rounded-full hover:bg-blue-100 transition-colors">
                {project.tech}
              </span>
            </div>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-2">
        More on <a href="https://github.com/baileywickham" className="text-blue-500 hover:underline">Github</a>
      </p>
    </section>
  )
} 