const Projects = () => {
  return (
    <div className="overflow-auto bg-slate-900 text-white p-10">

      <h1 className="text-3xl font-bold mb-8">
        Projects
      </h1>

      <div className="grid gap-6">

        {/* Daily Task AI Agent */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Personal AI Assistant (In Progress)
          </h2>

          <p className="text-gray-400 mt-2">
            Developing a personal AI assistant to manage daily tasks, 
            generate responses, and provide productivity assistance. 
            Currently supports task tracking, AI chat interaction, 
            and session-based memory.
          </p>

          <p className="text-gray-400 mt-2">
            Future Enhancements:
          </p>

          <ul className="list-disc ml-6 text-gray-400 mt-2">
            <li>AI Trading Assistant</li>
            <li>Email Automation</li>
            <li>Content Generation</li>
            <li>Workflow Automation</li>
            <li>Multi-agent System</li>
          </ul>

          <p className="text-sm mt-3 text-gray-500">
            Tech: React, FastAPI, MongoDB, OpenRouter, Tailwind
          </p>
        </div>


        {/* prismGPT */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            prismGPT Application
          </h2>

          <p className="text-gray-400 mt-2">
            AI-based multipage chat application with conversational 
            database operations and performance tracking.
          </p>

          <p className="text-sm mt-3 text-gray-500">
            Tech: React, Node.js, MySQL, Tailwind
          </p>
        </div>


        {/* Consumption Hub */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Consumption Hub Application
          </h2>

          <p className="text-gray-400 mt-2">
            Report generation and customization platform with 
            rule-based automation and scheduling.
          </p>

          <p className="text-sm mt-3 text-gray-500">
            Tech: React, Node.js, MongoDB
          </p>
        </div>


        {/* Prism Enrich */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Prism Enrich
          </h2>

          <p className="text-gray-400 mt-2">
            Data verification and analytics application with 
            secure data integration and role-based access.
          </p>
        </div>


        {/* Contact Manager */}
        {/* <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Contact Manager
          </h2>

          <p className="text-gray-400 mt-2">
            Full-stack contact management system with authentication 
            and CSV import/export functionality.
          </p>
        </div> */}


        {/* Photo Sharing */}
        {/* <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Photo Sharing Application
          </h2>

          <p className="text-gray-400 mt-2">
            Image sharing platform with user engagement features 
            like likes and feedback.
          </p>
        </div> */}

      </div>

    </div>
  );
};

export default Projects;