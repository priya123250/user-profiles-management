import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProfileHeader from '../components/ProfileHeader'
import ProfileTabs from '../components/ProfileTabs'
import { loadUsers, saveUsers } from '../utils/storage'

export default function ProfilePage() {
  const { userId } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const users = loadUsers()
    const foundUser = users.find(u => u.id === userId)
    
    if (!foundUser) {
      navigate('/')
      return
    }

    setUser(foundUser)
    setLoading(false)
  }, [userId, navigate])

  const handleUpdateUser = (updatedData) => {
    const users = loadUsers()
    const updatedUsers = users.map(u => 
      u.id === userId ? { ...u, ...updatedData } : u
    )
    saveUsers(updatedUsers)
    setUser({ ...user, ...updatedData })
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-5xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/')}
          className="text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-2"
        >
          <span>←</span> Back to Users
        </button>

        <ProfileHeader user={user} />
        <ProfileTabs user={user} onUpdate={handleUpdateUser} />
      </div>
    </div>
  )
}
