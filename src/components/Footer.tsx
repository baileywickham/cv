function Footer() {
  return (
    <footer className="print:hidden mt-12 py-4 text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-6">
        <a href="https://github.com/baileywickham/cv" className="text-blue-500 hover:underline">
          <i className="fab fa-github"></i> Code on github
        </a>
        <span className="mx-2">&middot;</span>
        Licensed under <a href="https://github.com/baileywickham/cv/blob/master/LICENSE.txt" className="text-blue-500 hover:underline">MIT License</a>
      </div>
    </footer>
  )
}

export default Footer 