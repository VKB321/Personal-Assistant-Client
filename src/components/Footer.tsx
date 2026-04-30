export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-700 bg-slate-900/70 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <span>© {year} Vijay Kumar Bhukya</span>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="https://github.com/VKB321" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/vijaykumar-bhukya/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-white" href="mailto:vijaybhukya009@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
