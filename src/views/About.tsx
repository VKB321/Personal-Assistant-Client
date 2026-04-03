const About = () => {
  return (
    <div className="overflow-auto bg-slate-900 text-white px-8 py-12">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        About Me
      </h1>

      {/* Professional Summary */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Professional Summary
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Software Engineer with 3+ years of experience specializing in 
          React.js, Node.js, and full-stack development. Experienced in 
          building scalable applications, automation platforms, and 
          AI-powered solutions. Currently working on building a personal 
          AI assistant to automate daily tasks and extend into advanced 
          AI-based workflow automation.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          <span className="bg-slate-800 p-2 rounded">React.js</span>
          <span className="bg-slate-800 p-2 rounded">TypeScript</span>
          <span className="bg-slate-800 p-2 rounded">JavaScript</span>
          <span className="bg-slate-800 p-2 rounded">Next.js</span>

          <span className="bg-slate-800 p-2 rounded">Node.js</span>
          <span className="bg-slate-800 p-2 rounded">Express.js</span>
          <span className="bg-slate-800 p-2 rounded">FastAPI</span>
          <span className="bg-slate-800 p-2 rounded">JWT</span>

          <span className="bg-slate-800 p-2 rounded">MongoDB</span>
          <span className="bg-slate-800 p-2 rounded">PostgreSQL</span>
          <span className="bg-slate-800 p-2 rounded">MySQL</span>
          <span className="bg-slate-800 p-2 rounded">Redux</span>

          <span className="bg-slate-800 p-2 rounded">Tailwind CSS</span>
          <span className="bg-slate-800 p-2 rounded">Bootstrap</span>
          <span className="bg-slate-800 p-2 rounded">AWS</span>
          <span className="bg-slate-800 p-2 rounded">Git</span>

        </div>
      </div>

      {/* Current Work */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Current Work
        </h2>

        <p className="text-gray-300">
          Currently working as Software Engineer II and developing 
          a Personal AI Assistant that helps manage daily tasks. 
          The project will be extended in the future to support:
        </p>

        <ul className="list-disc ml-6 mt-3 text-gray-400">
          <li>AI Task Automation</li>
          <li>Email Automation</li>
          <li>AI Trading</li>
          <li>Content Generation</li>
          <li>Workflow Automation</li>
        </ul>

      </div>

      {/* Experience */}
      <div>
        <h2 className="text-xl font-semibold mb-3">
          Experience
        </h2>

        <p className="text-gray-300">
          Software Engineer II — Datazoic (Oct 2022 - Jan 2025)
        </p>

        <p className="text-gray-400 mt-2">
          Worked on report generation, AI-based applications, 
          automation platforms, and scalable full-stack systems.
        </p>

      </div>

    </div>
  );
};

export default About;