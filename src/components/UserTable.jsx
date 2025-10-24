import React from 'react'

export default function UserTable({ users, onView, onDelete }) {
  if (users.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No users found. Click "Add user" to create one.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">Sr No</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">User name</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">E-mail</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 px-4 text-sm">{index + 1}</td>
              <td className="py-4 px-4 text-sm font-medium">{user.name}</td>
              <td className="py-4 px-4 text-sm text-gray-600">{user.email}</td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onView(user.id)}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    title="View Profile"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete User"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
