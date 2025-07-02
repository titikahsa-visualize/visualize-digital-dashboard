import React, { useState } from 'react';
import { UserGroupIcon, PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import UserModal from '../modals/UserModal';

export default React.forwardRef(function UsersSection(props, ref) {
  const [users, setUsers] = useState([
    { id: 1, name: "React", email: "reactinfo@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Active Drive", email: "activedrive@example.com", role: "Developer", status: "Active" }
  ]);
  const [usersSearch, setUsersSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    email: '',
    role: '',
    status: 'Active'
  });
  const [isEditUser, setIsEditUser] = useState(false);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(usersSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(usersSearch.toLowerCase()) ||
    user.role.toLowerCase().includes(usersSearch.toLowerCase()) ||
    user.status.toLowerCase().includes(usersSearch.toLowerCase())
  );

  const handleAddUser = () => {
    if (currentUser.name && currentUser.email && currentUser.role) {
      if (isEditUser) {
        setUsers(users.map(user => 
          user.id === currentUser.id ? currentUser : user
        ));
      } else {
        setUsers([...users, {
          ...currentUser,
          id: Date.now()
        }]);
      }
      setCurrentUser({
        id: null,
        name: '',
        email: '',
        role: '',
        status: 'Active'
      });
      setShowUserForm(false);
      setIsEditUser(false);
    }
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setShowUserForm(true);
    setIsEditUser(true);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <section 
      id="section-users" 
      ref={ref}
      className="py-12 transition-all duration-500"
    >
      <div className="bg-[#111827] rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <UserGroupIcon className="h-5 w-5 text-lime-400" /> 
            Manage Users
          </h3>
          <p className="text-gray-400 mt-2">
            Manage user Access, code and security settings with minimal files.
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <button 
            className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded font-medium flex items-center gap-2 transition hover:opacity-90"
            onClick={() => {
              setCurrentUser({
                id: null,
                name: '',
                email: '',
                role: '',
                status: 'Active'
              });
              setShowUserForm(true);
              setIsEditUser(false);
            }}
          >
            <PlusIcon className="h-4 w-4" /> Add New User
          </button>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search users..." 
              className="bg-[#1A1F2E] px-4 py-2 rounded-lg pl-10 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              value={usersSearch}
              onChange={(e) => setUsersSearch(e.target.value)}
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        
        <div className="overflow-auto rounded-lg border border-gray-700">
          <table className="w-full text-left">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-gray-300">Profile</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-300">Name</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-300">Email</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-300">Role</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-300">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#1A1F2E] transition-colors">
                  <td className="px-4 py-3">
                    <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-sm">{user.name.charAt(0)}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3 text-gray-400">{user.email}</td>
                  <td className="px-4 py-3">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">{user.role}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-sm ${
                      user.status === 'Active' 
                        ? 'bg-green-900 text-green-400' 
                        : 'bg-red-900 text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button 
                        className="text-blue-400 text-sm transition hover:text-blue-300"
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </button>
                      <button 
                        className="text-red-400 text-sm transition hover:text-red-300"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <UserModal 
        show={showUserForm}
        onClose={() => { setShowUserForm(false); setIsEditUser(false); }}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleAddUser={handleAddUser}
        isEditUser={isEditUser}
      />
    </section>
  );
});