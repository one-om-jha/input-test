import { FormEvent, KeyboardEvent } from 'react';
import './App.css'

function App() {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key == "ArrowDown") {
      if (e.currentTarget.nextSibling) {
        (e.currentTarget.nextSibling as HTMLLIElement).focus();
      }
    }
    if (e.key == "ArrowUp") {
      if (e.currentTarget.previousSibling) {
        (e.currentTarget.previousSibling as HTMLLIElement).focus();
      }
    }
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let first = e.currentTarget.elements.namedItem('first') as HTMLInputElement;
    let last = e.currentTarget.elements.namedItem('last') as HTMLInputElement;
    let email = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
    let password = e.currentTarget.elements.namedItem('password') as HTMLInputElement;
    localStorage.setItem("first", first.value);
    localStorage.setItem("last", last.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  }

  return (
    <div className='mx-auto max-w-screen-lg min-h-screen flex flex-col md:flex-row items-center justify-center'>
      <div>
        <img src='/tatem-logo.png' className='w-8 h-8 mb-2 mx-auto hover:animate-spin' />
        <h1 className='text-3xl text-center mb-4'>Tatem Inputs</h1>
        <div className='my-3'>
          Submitted form inputs:
          <label className='flex flex-row justify-between w-full gap-1'>
            <span className='text-xs text-left text-gray-700'>First Name</span>
            <span className='text-sm text-right text-gray-900'>{localStorage.getItem("first")}</span>
          </label>
          <label className='flex flex-row justify-between w-full gap-1'>
            <span className='text-xs text-left text-gray-700'>Last Name</span>
            <span className='text-sm text-right text-gray-900'>{localStorage.getItem("last")}</span>
          </label>
          <label className='flex flex-row justify-between w-full gap-1'>
            <span className='text-xs text-left text-gray-700'>Email</span>
            <span className='text-sm text-right text-gray-900'>{localStorage.getItem("email")}</span>
          </label>
          <label className='flex flex-row justify-between w-full gap-1'>
            <span className='text-xs text-left text-gray-700'>Password</span>
            <span className='text-sm text-right text-gray-900'>{localStorage.getItem("password")}</span>
          </label>
        </div>
      </div>
      <form className="flex mx-auto max-w-2xl flex-col items-center gap-3 bg-gray-50 p-20 rounded-2xl" onSubmit={(e) => submitForm(e)}>
        <label className='flex flex-col items-start w-full gap-1' onKeyDown={handleKey}>
          <span className='text-xs text-left text-gray-700'>First Name</span>
          <input className='w-full rounded border border-gray-100 px-3 py-1' name='first'/>
        </label>
        <label className='flex flex-col items-start w-full gap-1' onKeyDown={handleKey}>
          <span className='text-xs text-gray-700'>Last Name</span>
          <input className='w-full rounded border border-gray-100 px-3 py-1' name='last'/>
        </label>
        <label className='flex flex-col items-start w-full gap-1' onKeyDown={handleKey}>
          <span className='text-xs text-gray-700'>Email</span>
          <input className='w-full rounded border border-gray-100 px-3 py-1' name='email'/>
        </label>
        <label className='flex flex-col items-start w-full gap-1' onKeyDown={handleKey}>
          <span className='text-xs text-gray-700'>Password</span>
          <input type='password' className='w-full rounded border border-gray-100 px-3 py-1' name='password'/>
        </label>
        <button className='mt-2 border rounded px-2 py-0.5 hover:cursor-pointer border-black hover:bg-black hover:text-white duration-150' type='submit' onKeyDown={handleKey}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
