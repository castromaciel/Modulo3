import React from 'react'

const Register = () => {
  
  return (
    <div className='form-page mt-5 text-white'>
      <h1>Register</h1>
      <form autoComplete='off'>
        <input 
          type='name'
          placeholder='Name'
        />
        <input 
          type='email'
          placeholder='example@example.com'
        />
        <input 
          type='password'
          placeholder='Ingrese su clave'
        />
        <input
          
          type='password'
          placeholder='Repita su clave'
        />

        <button type='submit' className='btn btn-outline-light'>
          Registrarme
        </button>
      </form>
    </div>
  )
}

export default Register
