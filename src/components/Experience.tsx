function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-light mb-6">Experience</h2>
      <div className="space-y-8">
        <div className="relative">
          <div className="absolute -left-28 top-0 w-24 text-sm text-gray-600">
            08.2023 &ndash; Present
          </div>
          <h3 className="text-xl mb-2">
            <a href="https://www.console.co/" className="text-blue-500 hover:underline">Console</a>
            <span className="font-normal">, Founding Engineer</span>
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>Founding Engineer at an early stage startup funded by Thrive cap. Working on everything from core AI features to the platform. Scaled platform from 0 to many customers and 10k+ users.</p>
            <p>Designed novel AI interaction patterns for the use case, including Playbooks allowing users to reference tools and resources inline. Developed main agentic workflow for the IT use case.</p>
            <p>Designed and developed core data ingest platform, scaled to 1m plus records per ingest across multiple data providers and customers.</p>
            <p>Designed RAG and search pipeline from scratch including understanding and implementing the state of the art.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-28 top-0 w-24 text-sm text-gray-600">
            12.2022 &ndash; 9.2023
          </div>
          <h3 className="text-xl mb-2">
            <a href="https://www.metaculus.com/" className="text-blue-500 hover:underline">Metaculus</a>
            <span className="font-normal">, Software Engineer</span>
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>Worked at early stage startup that built a forecasting platform. Built out core features of the platform, including Search and Achievement features that drove user growth.</p>
            <p>Designed and developed API client for interacting with Metaculus API. Built out API endpoints for new features.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-28 top-0 w-24 text-sm text-gray-600">
            01.2021 &ndash; 07.2022
          </div>
          <h3 className="text-xl mb-2">
            Amazon, <a href="https://kdp.amazon.com/en_US/" className="text-blue-500 hover:underline">IPX Team</a>
          </h3>
          <p className="text-gray-700">Remote/SLO, CA</p>
          <div className="space-y-3 text-gray-700">
            <p>Junior Developer at Amazon SLO on Indie Publishing Experience team responsible for the publishing workflow for KDP authors. 20h per week October-June, 40h per week June-September. Fully remote position for first year, hybrid for second. Declined FTE offer.</p>
            <p>Built internal tools to simplify developer experience. Built tree visualization tools for store data. Developed DSL for querying book location on Amazon store.</p>
            <p>Worked on team of three to decide infrastructure path forward for team. Led major infrastructure choices for medium scale component. Led initial planning and development of said component, including CI/CD, designing APIs, integrating with other services through custom DSL.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-28 top-0 w-24 text-sm text-gray-600">
            Summer 2020 &ndash; Winter 2021
          </div>
          <h3 className="text-xl mb-2">
            Frost Undergraduate Research (<a href="public/H.pdf" className="text-blue-500 hover:underline">Poster</a>)
          </h3>
          <p className="text-gray-700">
            <a href="https://math.calpoly.edu/summer-research" className="text-blue-500 hover:underline">Frost Research</a>, Cal Poly
          </p>
          <div className="space-y-3 text-gray-700">
            <p>Participated in undergraduate research in Pure Mathematics under <a href="https://arxiv.org/find/math/1/au:+Brussel_E/0/1/0/all/0/1" className="text-blue-500 hover:underline">Dr. Eric Brussel</a>. We studied a moduli space of embeddings of complex planes into the quaternions.</p>
            <p>We then generalized our approach over the generalized quaternions, classifying the embeddings of commutative subalgebras, related affine varieties, and conjugacy classes. We also studied H from a category theoretic perspective.</p>
            <p>Paper in progress.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-28 top-0 w-24 text-sm text-gray-600">
            09.2018 &ndash; 12.2020
          </div>
          <h3 className="text-xl mb-2">
            Cal Poly CubeSat Lab
          </h3>
          <p className="text-gray-700">
            <a href="https://www.polysat.org/" className="text-blue-500 hover:underline">PolySat, Cal Poly</a>
          </p>
          <div className="space-y-3 text-gray-700">
            <p>Mission Lead of ExoCube II (Spring 2019-Summer 2020), a 3U small satellite as part of NASA's <a href="https://www.nasa.gov/content/upcoming-elana-cubesat-launches" className="text-blue-500 hover:underline">ELaNa XX</a> program.</p>
            <p>Led team of ~20 through build, testing, and predelivery phase of the spacecraft. Worked with NASA Goddard, Virgin Orbit, TriSept to organize delivery of spacecraft. Mission funded by NASA, NSF.</p>
            <p>ExoCube II successfully launched on Virgin Orbit Q1 of 2021. Worked with current mission lead during initial acquisition and operations.</p>
            <p>Led development and deployment of CPCL infrastructure to AWS (~5 machines). Wrote Cloudformation templates, ansible scripts to manage deployment. Deployment met Cal Poly IT security standards.</p>
            <p>Developed Embedded Flight Software for CPCL including commits to buildroot, IPC library, beacon and XDR parser.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 