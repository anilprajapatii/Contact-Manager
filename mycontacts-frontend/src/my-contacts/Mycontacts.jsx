import React, { useState } from 'react';

export default function Mycontacts() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '987-654-3210',
      email: 'jane@example.com',
    },
    {
        id: 3,
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'john@example.com',
      },
      {
        id: 4,
        name: 'Jane Doe',
        phone: '987-654-3210',
        email: 'jane@example.com',
      },
    // Add more contacts as needed
  ]);

  const handleDelete = (id) => {
    // const updatedContacts = contacts.filter((contact) => contact.id !== id);
    // setContacts(updatedContacts);
  };

  const handleUpdate = (id) => {
    // Add your update logic here
    // console.log(`Update contact with id ${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {contacts.map((contact) => (
        <div key={contact.id} className="bg-white shadow-md rounded p-4 mb-4 flex items-center">
          <img
            src={`https://placekitten.com/50/50?image=${contact.id}`}
            alt={contact.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className='flex items-center gap-10'>
            <p className="text-lg font-semibold">{contact.name}</p>
            <p className="text-gray-600">{contact.phone}</p>
            <p className="text-gray-600">{contact.email}</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <button
              onClick={() => handleUpdate(contact.id)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(contact.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

