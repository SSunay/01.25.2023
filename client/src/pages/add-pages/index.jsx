import React from 'react'
import { Formik, Form, Field } from 'formik';
import './index.scss'
import * as Yup from 'yup';
import axios from 'axios';
const SignupSchema = Yup.object().shape({
    img: Yup.string()
      .min(2, 'Too Short!')
      .max(50000, 'Too Long!')
      .required('please,fill the section!'),
      title: Yup.string()
      .min(2, 'Too Short!')
      .max(50000, 'Too Long!')
      .required('please,fill the section!'),
      description: Yup.string()
      .min(2, 'Too Short!')
      .max(50000, 'Too Long!')
      .required('please,fill the section!'),
      profilImg: Yup.string()
      .min(2, 'Too Short!')
      .max(50000, 'Too Long!')
      .required('please,fill the section!'),
      name: Yup.string()
      .min(2, 'Too Short!')
      .max(50000, 'Too Long!')
      .required('please,fill the section!'),
      price: Yup.number()
      .min(2, 'Too Short!')
      .max(50000, 'Too Long!')
      .required('please,fill the section!'),
  
  });
const AddPage = () => {
  return (
    <div className='addPart'>
     <h1>Signup</h1>
     <Formik
       initialValues={{
        img:'',
        title:'',
        description:'',
        profilImg:'',
        name:'',
        price:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values,{resetForm})  => {
        axios.post('http://localhost:8000/users',values)
         resetForm()
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="img" />
           {errors.img && touched.img ? (
             <div className='err'>{errors.img}</div>
           ) : null} <br /><br />

           <Field name="title" />
           {errors.title && touched.title ? (
             <div className='err'>{errors.title}</div>
           ) : null} <br /><br />

           <Field name="description" />
           {errors.description && touched.description ? (
             <div className='err'>{errors.description}</div>
           ) : null} <br /><br />

           <Field name="profilImg" />
           {errors.profilImg && touched.profilImg ? (
             <div className='err'>{errors.profilImg}</div>
           ) : null} <br /><br />

           <Field name="name" />
           {errors.name && touched.name ? (
             <div className='err'>{errors.name}</div>
           ) : null} <br /><br />

           <Field name="price" />
           {errors.price && touched.price ? (
             <div className='err'>{errors.price}</div>
           ) : null}<br /><br />
            <button type="submit" className='btn'>Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default AddPage