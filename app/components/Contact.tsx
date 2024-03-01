'use client'

import React, { useState } from 'react'
import { sendDiscordMessage } from '../_actions/discord'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e: any) => {
    e.preventDefault()
    sendDiscordMessage(name + '\n' + email + '\n' + message)
    alert('Zpráva odeslána!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <form className="my-10 flex flex-col" onSubmit={onSubmit}>
        <label className="text-lg text-black dark:text-white">
          Jméno a Příjmení
        </label>
        <input
          className="mb-4 rounded-sm border border-zinc-300 p-2 text-black placeholder:text-zinc-300 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-600"
          type="text"
          name="user_name"
          placeholder="Jméno a Příjmení"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <label className="text-lg text-black dark:text-white">E-Mail</label>
        <input
          className="mb-4 rounded-sm border border-zinc-300 p-2 text-black placeholder:text-zinc-300 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-600"
          type="email"
          name="user_email"
          placeholder="vaše@e-mailová.adresa"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <label className="text-lg text-black dark:text-white">Zpráva</label>
        <textarea
          className="mb-4 rounded-sm border border-zinc-300 p-2 text-black placeholder:text-zinc-300 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-600"
          name="message"
          placeholder="Vaše zpráva..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-zinc-400 py-4 text-white transition-all duration-300 ease-out hover:cursor-pointer hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-900"
          type="submit"
          value="Odeslat"
        >
          Odeslat
        </button>
      </form>
    </div>
  )
}

export default Contact
