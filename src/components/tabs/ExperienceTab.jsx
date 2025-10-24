import React, { useState } from 'react'

export default function ExperienceTab({ user, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [experience, setExperience] = useState(user.experience || [{ domain: '', subdomain: '', level: '' }])
  const [linkedin, setLinkedin] = useState(user.linkedin || '')

  const handleSave = () => {
    onUpdate({ experience, linkedin })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setExperience(user.experience || [{ domain: '', subdomain: '', level: '' }])
    setLinkedin(user.linkedin || '')
    setIsEditing(false)
  }

  const updateExperience = (index, field, value) => {
    const updated = [...experience]
    updated[index][field] = value
    setExperience(updated)
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Work Experience</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-indigo-600 hover:text-indigo-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="space-y-4 pb-6 border-b border-gray-200 last:border-0">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Domain</label>
                <input
                  type="text"
                  value={exp.domain}
                  onChange={(e) => updateExperience(index, 'domain', e.target.value)}
                  disabled={!isEditing}
                  placeholder="e.g. Technology"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sub-domain</label>
                  <input
                    type="text"
                    value={exp.subdomain}
                    onChange={(e) => updateExperience(index, 'subdomain', e.target.value)}
                    disabled={!isEditing}
                    placeholder="e.g. MERN Stack"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <select
                    value={exp.level}
                    onChange={(e) => updateExperience(index, 'level', e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    <option value="">Select an option</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">LinkedIn</h3>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Profile URL</label>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            disabled={!isEditing}
            placeholder="linkedin.com/in/mrbean"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Resume</h3>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div className="flex-1">
            <p className="font-medium">myresume.pdf</p>
          </div>
          <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
            View
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={handleCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  )
}
