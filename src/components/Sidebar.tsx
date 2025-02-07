function Sidebar() {
  return (
    <aside className="md:w-1/3 md:border-l border-gray-200 md:pl-8">
      <div className="print:hidden mb-6">
        <a href="public/wickham.pdf" 
           className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
          <i className="fa fa-download"></i>
          <span>Download PDF</span>
        </a>
      </div>

      <div className="print:block hidden">
        <a href="https://baileywickham.com/cv">
          <i className="fa fa-share"></i> View at baileywickham.com
        </a>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <i className="fa fa-home w-4"></i>
              <span>West Coast, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa fa-at w-4"></i>
              <a href="mailto:b@baileywickham.com" className="text-blue-500 hover:underline">b@baileywickham.com</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa fa-phone-alt w-4"></i>
              <span>+1 503.989.2243</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa fa-lock w-4"></i>
              <a href="https://github.com/baileywickham/keys" className="text-blue-500 hover:underline">PGP Keys</a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Personal</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <i className="fa fa-globe w-4"></i>
              <a href="https://baileywickham.com" className="text-blue-500 hover:underline">baileywickham.com</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="fab fa-github w-4"></i>
              <a href="https://github.com/baileywickham" className="text-blue-500 hover:underline">baileywickham</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa fa-heart w-4"></i>
              <span>Running, Surfing</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Publications</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <i className="fa fa-image w-4"></i>
              <span>
                <a href="https://baileywickham.com/cv/public/H.pdf" className="text-blue-500 hover:underline">Poster at MAA Golden Session</a>
                <em className="ml-2">Spheres of Planes in the Generalized Quaternions</em>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  )
}

export default Sidebar 