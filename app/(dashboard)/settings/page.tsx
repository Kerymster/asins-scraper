export default function SettingsPage() {
  return (
    <div className="flex-1 p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Settings</h2>
          <p className="text-slate-600">
            Configure your scraping preferences and account settings.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Scraping Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700">
                      Auto-retry failed requests
                    </p>
                    <p className="text-sm text-slate-500">
                      Automatically retry failed scraping attempts
                    </p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700">
                      Email notifications
                    </p>
                    <p className="text-sm text-slate-500">
                      Receive email updates for scraping results
                    </p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
