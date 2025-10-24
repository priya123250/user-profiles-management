import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import UserTable from '../components/UserTable'
import AddUserModal from '../components/AddUserModal'
import { loadUsers, saveUsers } from '../utils/storage'

export default function UsersPage() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      const data = loadUsers()
      setUsers(data)
      setLoading(false)
    }, 300)
  }, [])

  useEffect(() => {
    if (!loading) {
      saveUsers(users)
    }
  }, [users, loading])

  const handleAddUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    setUsers(prev => [...prev, userWithId])
    setShowModal(false)
  }

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prev => prev.filter(u => u.id !== userId))
    }
  }

  const handleViewProfile = (userId) => {
    navigate(`/profile/${userId}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="bg-white mx-6 my-8 rounded-lg shadow-sm p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Users</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            + Add user
          </button>
        </div>

        <UserTable
          users={users}
          onView={handleViewProfile}
          onDelete={handleDeleteUser}
        />
      </div>

      {showModal && (
        <AddUserModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddUser}
        />
      )}
    </div>
  )
}
