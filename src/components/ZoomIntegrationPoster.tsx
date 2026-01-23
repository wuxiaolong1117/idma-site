"use client";

export default function ZoomIntegrationPoster() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="bg-blue-600 text-white px-8 py-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Bring Handwriting Back to Your Zoom Meetings
        </h2>
        <p className="text-xl text-blue-100 mb-1">
          iDma Dual-Board Interconnected AI Teaching Kit
        </p>
        <p className="text-sm text-blue-200">
          Designed for tutors and students, recreating immersive face-to-face tutoring online
        </p>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Problem */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">❓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">The Problem</h3>
            </div>
            <p className="text-gray-700">
              Tutor unavailable? No real-time correction? Missing improvement opportunities? 
              Traditional handwriting is still the fastest way to think and collaborate, 
              yet most remote tools don&apos;t support it.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Solution</h3>
            </div>
            <p className="text-gray-700">
              European dual-board technology breaks time and space barriers. 
              Great teachers never go offline! Write on paper, share on Zoom instantly.
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Feature 1 */}
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Real-Time Dual-Board Sync</h4>
                <p className="text-sm text-gray-600">
                  Every stroke visible to teacher instantly. Correct errors at the first stroke. 
                  Prevents error solidification.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">AI-Powered Intelligence</h4>
                <p className="text-sm text-gray-600">
                  Voice + AI dual commentary. Real-time handwriting analysis. 
                  Automatic summaries and personalized recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Paper-Like Experience</h4>
                <p className="text-sm text-gray-600">
                  True paper and pen feel. Superior to mouse. Perfect for math and logic subjects. 
                  Focused problem-solving.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Complete Digital Archives</h4>
                <p className="text-sm text-gray-600">
                  Full session notes digitally stored. Build intelligent database based on 
                  individual learning habits. Ensure true improvement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            <strong className="text-gray-900">iDma International Ltd</strong>
          </p>
          <p className="text-xs text-gray-500">
            Located in London, UK. Partnered with leading education technology companies. 
            Focused on using AI technology to advance education methods.
          </p>
        </div>
      </div>
    </div>
  );
}
