import { Formik } from "formik"
import * as Yup from 'yup';
import { Header } from "../../components"
import { useMediaQuery } from "@mui/material";
import {TextField} from "@mui/material";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import { useTheme } from "../../theme/ThemeContext";


const Form = () => {
    const { theme } = useTheme()

    const isNonMobile = useMediaQuery("(min-width:600px)")

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

    const colors = theme.form.colors
    const typography = theme.form.typography

    const textFieldStyles = {
        '& .MuiFilledInput-root': {
            backgroundColor: colors.inputBackground,
            '&:hover': {
                backgroundColor: colors.inputHoverBg
            },
            '&.Mui-focused': {
                backgroundColor: colors.inputFocusBg
            },
            '&:after': {
                borderBottomColor: colors.borderColor
            },
        },
        '& .MuiFilledInput-input': {
            fontSize: typography.inputFontSize,
            color: colors.inputText,
        },
        '& .MuiInputLabel-root': {
            fontSize: typography.labelFontSize,
            color: colors.labelColor,
            '&.Mui-focused': {
                color: colors.labelColor
            }
        },
        '& .MuiFormHelperText-root': {
            fontSize: typography.helperTextSize
        }
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
                <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ 
                        gridColumn: "span 2",
                        ...textFieldStyles,
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ 
                        gridColumn: "span 2",
                        ...textFieldStyles,
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ 
                        gridColumn: "span 4",
                        ...textFieldStyles,
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ 
                        gridColumn: "span 4",
                        ...textFieldStyles,
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    name="address1"
                    error={!!touched.address1 && !!errors.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{ 
                        gridColumn: "span 4",
                        ...textFieldStyles,
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    name="address2"
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{ 
                        gridColumn: "span 4",
                        ...textFieldStyles,
                    }}
                  />
                </Box>
                <div className="w-full flex justify-end mt-6">
                   <button type="submit" className="text-black bg-green flex py-2 px-3 rounded-[4px] bg-[#4cc2ac] 
                   text-xs font-medium ">
                    CREATE NEW USER
                   </button>
                </div>
              </form>
            )}
        </Formik>
    </div>
  )
}

export default Form