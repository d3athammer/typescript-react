import { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  // chaining the validations and applying custom messages to each of the validations
  name: z.string().min(3, { message: 'name must be at least 3 characters'}),
  age: z.number( {invalid_type_error: 'Age field is required'}).min(18, { message: 'Age must be above 18 '})
});

type FormData = z.infer<typeof schema>;

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
  // 4th method is to use Zod for validation
  //with zodResolver, we can set resolver to zoldresolver.
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = ( data: FieldValues) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input {...register('name')} id="name" type="text" className="form-control" />
        {/* the question mark beside name is called optional chaining, to prevent runtime error if no name is inout */}
        {/* There is no need to check for type because zod already does it for you */}
        { errors.name && <p className='text-danger'>{errors.name.message}</p> }
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        {/* We set age to accept only numbers else we'll throw an error */}
        <input {...register('age', { valueAsNumber: true })} id="age" type="number" className="form-control" />
        { errors.age && <p className='text-danger'>{errors.age.message}</p> }

      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form
