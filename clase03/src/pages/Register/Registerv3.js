// import { useState } from 'react'

// const Registerv3 = () => {

//   const [registerData, setRegisterData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     repeatPassword: '',
//   })

//   const { email, password, repeatPassword, username } = registerData

//   const onSubmit = (event) => {
//     // evita la carga del formulario
//     event.preventDefault()
//     if (password !== repeatPassword) {
//       console.log('las claves no son iguales')
//       return
//     }
//     console.log(event.target[0].name)
//     console.log(event.target[1].name)
//     console.log(event.target[2].name)
//     console.log(event.target[3].name)
//     console.log('registro exitoso')
//   }

//   const onReset = () => {
//     setRegisterData((prevState) => ({
//       ...prevState,
//       username: '',
//       email: '',
//       password: '',
//       repeatPassword: '',
//     }))
//   }

//   const onChange = (event) => {
//     setRegisterData((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value,
//     }))
//   }

//   return (
//     <div className='form-page mt-5 text-white'>
//       <h1>Registerv3</h1>
//       <form
//         autoComplete='off'
//         onSubmit={onSubmit}
//         // onSubmit={(event) => onSubmit(event)}
//         onReset={onReset}
//         id='RegisterForm'
//       >
//         <input
//           required
//           type='text'
//           placeholder='username'
//           name='username'
//           value={username}
//           onChange={onChange}
//         />
//         <input 
//           required
//           name='email'
//           type='email'
//           placeholder='example@example.com'
//           value={email}
//           onChange={onChange}
//         />
//         <input 
//           required
//           minLength={8}
//           type='password'
//           name='password'
//           placeholder='Ingrese su clave'
//           value={password}
//           onChange={onChange}
//         />
//         <input
//           required
//           minLength={8}
//           type='password'
//           name='repeatPassword'
//           placeholder='Repita su clave'
//           value={repeatPassword}
//           onChange={onChange}
//         />

//       </form>

//       <div className='d-flex gap-3 justify-content-between'>
//         <button type='reset' className='btn btn-outline-danger' form='RegisterForm'>
//           Limpiar campos
//         </button>

//         <button type='submit' className='btn btn-outline-light' form='RegisterForm'>
//           Registrarme
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Registerv3

import { useForm } from "react-hook-form";
import RequiredError from "../../components/FieldErrors/FieldErrors";

const Registerv3 = () => {
  const { register, handleSubmit, watch, formState } = useForm();
  const onSubmit = data => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it
  console.log(formState.errors)
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="form-page text-white" >
      <h1>React hook form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="username" {...register("username", { required: true, minLength: 3, maxLength: 10 } ) } />
        { formState.errors.username?.type === 'required' && <RequiredError /> } 

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="example@example.com" {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {formState.errors.email && <RequiredError />}

        <input type='number' placeholder="edad" {...register('age', { required: true, min: 18 } )} />
        { formState.errors.age && <RequiredError /> }
        { formState.errors.age?.type === 'min' && <span>La edad minima es de 18 años</span> }

        <input type="submit" />
      </form>
    </div>
  );
}

export default Registerv3