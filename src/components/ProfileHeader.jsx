import React from 'react'

export default function ProfileHeader({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-200 to-indigo-200 flex items-center justify-center">
          <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">{user.name}</h1>
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
            <span>{user.email}</span>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 text-sm">{user.phone}</p>
        </div>
      </div>
    </div>
  )
}
