import { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {

  // 1st way to get input field from a form
  // return the current Dom element
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: '', age: 0}

  // const handleSubmit = (event : FormEvent) => {
  //   event.preventDefault();
  //   if (nameRef.current  !== null)
  //     person.name = nameRef.current.value;
  //   if (ageRef.current  !== null)
  //     person.age = parseInt(ageRef.current.value);
  //   console.log(person);
  // }



  // 2nd way to get input field from a dom
  // const [ person, setPerson ] = useState({
  //   name: '',
  //   age: ''
  // })
  // const handleSubmit = (event : FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);

  // }

  // 3rd way to get input field from a dom ( gotta change the code inside return)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = ( data: FieldValues) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input { ...register('name', { required: true, minLength: 3 })} id="name" type="text" className="form-control" />
        {/* the question mark beside name is called optional chaining, to prevent runtime error if no name is inout */}
        { errors.name?.type === 'required' && <p className='text-danger'>Name is required</p> }
        { errors.name?.type === 'minLength' && <p className='text-danger'>Name must have at least 3 characters</p> }

      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input { ...register('age', { required: true })} id="age" type="number" className="form-control" />
        { errors.name?.type === 'required' && <p className='text-danger'>Age is required</p> }

      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form
