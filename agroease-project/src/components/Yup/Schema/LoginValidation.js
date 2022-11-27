import * as yup from 'yup';




let Loginschema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email(<small className='text-red-500'>Invalid email format</small>).required(),
    phone_number: yup.number('must be a number').required(<small className='text-red-500'>Invalid Phone Number</small>),
    password: yup.string().min(3).required(<small className='text-red-500'>Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character</small>)
            .matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
            )
    
  });

  export default Loginschema

