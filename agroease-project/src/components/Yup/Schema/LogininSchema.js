import * as yup from 'yup';




let LogininSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required(),
    password: yup.string().min(3).required()
            .matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    
  });

  export default LogininSchema

