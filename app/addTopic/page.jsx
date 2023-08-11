'use client';

import { useState } from 'react';

export default function AddTopic() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic description"
      />
      <button className="bg-green-600 bold text-white py-3 px-6 w-fit">
        Add topic
      </button>
    </form>
  );
}
