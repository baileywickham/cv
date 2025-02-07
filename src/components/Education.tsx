function Education() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-light mb-6">Education</h2>
      <div className="space-y-8">
        <div className="relative">
          <div className="absolute -left-28 top-0 w-24 text-sm text-gray-600">
            09.2018 &ndash; 06.2022
          </div>
          <h3 className="text-xl mb-2">California Polytechnic, SLO</h3>
          <p className="text-gray-700">BS in Mathematics, BS in Computer Science</p>
          <ul className="list-disc pl-4 space-y-1 text-gray-700">
            <li>BS in Mathematics (Pure focus), BS in Computer Science, 3.56 GPA</li>
            <li>Minor in Chinese (two years of language courses)</li>
            <li>Graduate courses in Field Theory, Point-Set Topology, Algebraic Topology, Programming Languages</li>
          </ul>
          <div className="space-y-3 mt-4 text-gray-700">
            <p>
              Received Frost funding Spring, 2022 to research Version Space Algebras under Dr. Robert Easton in the Mathematics department.
            </p>
            <p>
              Worked with Masters student under Dr. Theresa Migler to characterize power networks from a graph theoretic approach. Studied graph networks and built a framework for ingesting data.
            </p>
            <p>
              Attended <a href="https://math.calpoly.edu/news/simple-group-sends-large-cohort-graduate-school" className="hover:underline">Simple Group</a>, a research seminar with a focus on algebraic topics.
            </p>
            <p>
              Attended programming languages reading group under Dr. John Clements and Dr. Aaron Keen. Discussed current topics in programming languages and type theory.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 