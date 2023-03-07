import { useState } from 'react'

const Registerv2 = () => {


  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  })

  const { email, password, repeatPassword, username } = registerData

  const onSubmit = (event) => {
    // evita la carga del formulario
    event.preventDefault()
    if (password !== repeatPassword) {
      console.log('las claves no son iguales')
      return
    }
    
  }

  const onReset = () => {
    setRegisterData((prevState) => ({
      ...prevState,
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    }))
  }

  const onChange = (event) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <div className='form-page mt-5 text-white'>
      <h1>Registerv2</h1>
      <form
        autoComplete='off'
        onSubmit={onSubmit}
        // onSubmit={(event) => onSubmit(event)}
        onReset={onReset}
        id='RegisterForm'
      >
        <input
          required
          type='text'
          placeholder='username'
          name='username'
          value={username}
          onChange={onChange}
        />
        <input 
          required
          name='email'
          type='email'
          placeholder='example@example.com'
          value={email}
          onChange={onChange}
        />
        <input 
          required
          minLength={8}
          type='password'
          name='password'
          placeholder='Ingrese su clave'
          value={password}
          onChange={onChange}
        />
        <input
          required
          minLength={8}
          type='password'
          name='repeatPassword'
          placeholder='Repita su clave'
          value={repeatPassword}
          onChange={onChange}
        />

      </form>

      <div className='d-flex gap-3 justify-content-between'>
        <button type='reset' className='btn btn-outline-danger' form='RegisterForm'>
          Limpiar campos
        </button>

        <button type='submit' className='btn btn-outline-light' form='RegisterForm'>
          Registrarme
        </button>
      </div>
    </div>
  )
}

export default Registerv2
