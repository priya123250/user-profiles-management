const STORAGE_KEY = 'user_profiles_data'

const defaultUsers = [
  {
    id: '1',
    name: 'Dave Richards',
    email: 'dave@mail.com',
    phone: '+91 8332883854',
    basicInfo: {},
    education: {},
    skills: {},
    experience: [{ domain: '', subdomain: '', level: '' }],
    linkedin: 'linkedin.com/in/mrbean',
    resume: 'myresume.pdf',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Abhishek Hari',
    email: 'hari@mail.com',
    phone: '+91 9876543210',
    basicInfo: {},
    education: {},
    skills: {},
    experience: [{ domain: '', subdomain: '', level: '' }],
    linkedin: '',
    resume: null,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Nikita Gupta',
    email: 'nikita@mail.com',
    phone: '+91 8765432109',
    basicInfo: {},
    education: {},
    skills: {},
    experience: [{ domain: '', subdomain: '', level: '' }],
    linkedin: '',
    resume: null,
    createdAt: new Date().toISOString()
  }
]

export function loadUsers() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) {
      saveUsers(defaultUsers)
      return defaultUsers
    }
    return JSON.parse(data)
  } catch (error) {
    console.error('Error loading users:', error)
    return defaultUsers
  }
}

export function saveUsers(users) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
  } catch (error) {
    console.error('Error saving users:', error)
  }
}
