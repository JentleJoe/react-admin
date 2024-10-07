import { Formik } from "formik"
import * as Yup from 'yup';
import { Header } from "../../components"


const Form = () => {

    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        address1: '',
        address2: '',
    }

    const userSchema = Yup.object().shape({
        firstName: Yup.string().required("required"),
        lastName: Yup.string().required("required"),
        email: Yup.string().email("Invalid Email").required("required"),
        contact: Yup
            .string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("required"),
        address1: Yup.string().required("required"),
        address2: Yup.string().required("required"),
    })

    const handleFormSubmit = (values) => {
        console.log(values)
    }

  return (
    <div>
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form className="grid gap-8 grid-cols-4 ">

                </form>
            )}
        </Formik>
    </div>
  )
}

export default Form