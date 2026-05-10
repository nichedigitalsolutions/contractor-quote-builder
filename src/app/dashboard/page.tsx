export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Dashboard</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Manage your quotes and clients.</p>
          </div>
          <button className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm flex items-center gap-2">
            <span>+</span> New Quote
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md">
            <h3 className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Total Quotes</h3>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">0</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md">
            <h3 className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Pending Approval</h3>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">0</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md">
            <h3 className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Revenue (YTD)</h3>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">$0</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-100 dark:border-zinc-800">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Recent Quotes</h2>
          </div>
          <div className="p-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-zinc-900 dark:text-white font-medium mb-1">No quotes created yet</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm mb-6">
              Create your first contractor quote by clicking the button below. You can start from a voice note or type it manually.
            </p>
            <button className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-sm">
              Create First Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}