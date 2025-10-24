import React, { useState } from 'react'
import BasicInfoTab from './tabs/BasicInfoTab'
import EducationTab from './tabs/EducationTab'
import ExperienceTab from './tabs/ExperienceTab'

export default function ProfileTabs({ user, onUpdate }) {
  const [activeTab, setActiveTab] = useState('basic')

  const tabs = [
    { id: 'basic', label: 'Basic Info', hasNotification: true },
    { id: 'education', label: 'Education & skills', hasNotification: true },
    { id: 'experience', label: 'Experience', hasNotification: false }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-4 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
              {tab.hasNotification && activeTab === tab.id && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'basic' && <BasicInfoTab user={user} onUpdate={onUpdate} />}
        {activeTab === 'education' && <EducationTab user={user} onUpdate={onUpdate} />}
        {activeTab === 'experience' && <ExperienceTab user={user} onUpdate={onUpdate} />}
      </div>
    </div>
  )
}
