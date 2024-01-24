'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const form = useRef(null as HTMLFormElement | null)
  const [isSuccessMessageVisible, setSuccessMessageVisible] = useState(false)

  const sendEmail = (e: any) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          'service_xk63zsb',
          'template_y2zwsjr',
          form.current,
          'a0u2PwWAApIXDzfLb',
        )
        .then(
          (result) => {
            console.log(result.text)
            setSuccessMessageVisible(true)
          },
          (error) => {
            console.log(error.text)
          },
        )
    }
  }

  return (
    <div>
      <form className="my-10 flex flex-col" ref={form} onSubmit={sendEmail}>
        <label className="text-lg text-black dark:text-white">
          Jméno a Příjmení
        </label>
        <input
          className="mb-4 rounded-sm border border-zinc-300 p-2 text-black placeholder:text-zinc-300 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-600"
          type="text"
          name="user_name"
          placeholder="Jméno a Příjmení"
          required
        />
        <label className="text-lg text-black dark:text-white">E-Mail</label>
        <input
          className="mb-4 rounded-sm border border-zinc-300 p-2 text-black placeholder:text-zinc-300 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-600"
          type="email"
          name="user_email"
          placeholder="vaše@e-mailová.adresa"
          required
        />
        <label className="text-lg text-black dark:text-white">Zpráva</label>
        <textarea
          className="mb-4 rounded-sm border border-zinc-300 p-2 text-black placeholder:text-zinc-300 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-600"
          name="message"
          placeholder="Vaše zpráva..."
          required
        />
        <input
          className="bg-zinc-400 py-4 text-white transition-all duration-300 ease-out hover:cursor-pointer hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-900"
          type="submit"
          value="Odeslat"
        />
        {isSuccessMessageVisible && (
          <p className="mt-1 text-center font-bold text-green-500">
            Vaše zpráva byla úspěšně odeslána!
          </p>
        )}
      </form>
    </div>
  )
}
