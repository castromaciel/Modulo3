import { useState } from 'react'

const Register = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  console.log({
    userName,
    email,
    password,
    repeatPassword
  })

  const onSubmit = (event) => {
    // evita la carga del formulario
    event.preventDefault()
    console.log(password !== repeatPassword)
    if (password !== repeatPassword) {
      console.log('las claves no son iguales')
      return
    }

  }

  const onReset = () => {
    setUserName('')
    setEmail('')
    setPassword('')
    setRepeatPassword('')
  }

  return (
    <div className='form-page mt-5 text-white'>
      <h1>Register</h1>
      <form autoComplete='off' onSubmit={onSubmit} onReset={onReset}>
        <input
          required
          type='text'
          placeholder='username'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input 
          required
          name='email'
          type='email'
          placeholder='example@example.com'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input 
          required
          minLength={8}
          type='password'
          placeholder='Ingrese su clave'
          value={password}
          onChange={(event) => setPassword(event.target.value) }
        />
        <input
          required
          minLength={8}
          type='password'
          placeholder='Repita su clave'
          value={repeatPassword}
          onChange={(event => setRepeatPassword(event.target.value))}
        />
        
        <div className='d-flex gap-3 justify-content-between'>
          <button type='reset' className='btn btn-outline-danger'>
            Limpiar campos
          </button>

          <button type='submit' className='btn btn-outline-light'>
            Registrarme
          </button>
        </div>

      </form>
    </div>
  )
}

export default Register
