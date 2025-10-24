import React, { useState } from 'react'

export default function EducationTab({ user, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [education, setEducation] = useState(user.education || {})
  const [skills, setSkills] = useState(user.skills || {})

  const handleSave = () => {
    onUpdate({ education, skills })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEducation(user.education || {})
    setSkills(user.skills || {})
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Education Details</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-indigo-600 hover:text-indigo-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">School / college</label>
              <input
                type="text"
                value={education.school || ''}
                onChange={(e) => setEducation({ ...education, school: e.target.value })}
                disabled={!isEditing}
                placeholder="e.g. Lincoln College"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Highest degree or equivalent</label>
              <input
                type="text"
                value={education.degree || ''}
                onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                disabled={!isEditing}
                placeholder="e.g. Bachelors in Technology"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
              <input
                type="text"
                value={education.course || ''}
                onChange={(e) => setEducation({ ...education, course: e.target.value })}
                disabled={!isEditing}
                placeholder="e.g. Computer science engineering"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year of completion</label>
              <select
                value={education.year || ''}
                onChange={(e) => setEducation({ ...education, year: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
              >
                <option value="">YYYY</option>
                {Array.from({ length: 30 }, (_, i) => 2024 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
            <input
              type="text"
              value={education.grade || ''}
              onChange={(e) => setEducation({ ...education, grade: e.target.value })}
              disabled={!isEditing}
              placeholder="Enter here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Skills & Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
            <textarea
              value={skills.skills || ''}
              onChange={(e) => setSkills({ ...skills, skills: e.target.value })}
              disabled={!isEditing}
              placeholder="Enter here"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Projects</label>
            <textarea
              value={skills.projects || ''}
              onChange={(e) => setSkills({ ...skills, projects: e.target.value })}
              disabled={!isEditing}
              placeholder="Enter here"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
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
