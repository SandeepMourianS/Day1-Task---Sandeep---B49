import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { DataContext } from '../../Components/DataContext';

const Books = () => {

  const { dataSource , setDataSource } = useContext(DataContext);

  const initialValues = {
    title: '',
    isbn: '',
    publishedDate: '',
    pages: '',
    authorName: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    isbn: Yup.string().required('ISBN is required'),
    publishedDate: Yup.date().required('Published Date is required').nullable(),
    pages: Yup.number().required('Pages is required').positive().integer(),
    authorName: Yup.string().required('Author Name is required'),
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      var payload = {
        title: values.title,
        isbn: values.isbn,
        author: values.author,
        releaseDate: values.releaseDate,
        pages: values.pages
      };  
      setDataSource([...dataSource, {payload}]);
      // console.log("payload " , payload);
    }
  });  

  

  console.log("data source Book" ,dataSource);

  return (
    <>
          <Typography> <h1>ADD BOOK</h1></Typography>

      <form onSubmit={formik.handleSubmit}>
      <TextField
        style = {{margin: 10 , width: 400 , display : 'block' , backgroundColor : 'white'}}
        fullWidth
        label="Book Title"
        name="title"
        variant="outlined"
        {...formik.getFieldProps('title')}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />

      <TextField
        style = {{margin: 10 , width: 400 , display : 'block' , backgroundColor : 'white'}}
        fullWidth
        label="ISBN"
        name="isbn"
        variant="outlined"
        {...formik.getFieldProps('isbn')}
        error={formik.touched.isbn && Boolean(formik.errors.isbn)}
        helperText={formik.touched.isbn && formik.errors.isbn}
      />

      <TextField
        style = {{margin: 10 , width: 400 , display : 'block' , backgroundColor : 'white'}}
        fullWidth
        label="Released Date"
        name="releaseDate"
        // type="date"
        variant="outlined"
        {...formik.getFieldProps('publishedDate')}
        error={formik.touched.publishedDate && Boolean(formik.errors.publishedDate)}
        helperText={formik.touched.publishedDate && formik.errors.publishedDate}
      />

      <TextField
        style = {{margin: 10 , width: 400 , display : 'block' , backgroundColor : 'white'}}
        fullWidth
        label="Pages"
        name="pages"
        variant="outlined"
        type="number"
        {...formik.getFieldProps('pages')}
        error={formik.touched.pages && Boolean(formik.errors.pages)}
        helperText={formik.touched.pages && formik.errors.pages}
      />

      <TextField
        style = {{margin: 10 , width: 400 , display : 'block' , backgroundColor : 'white'}}
        fullWidth
        label="Author Name"
        name="authorName"
        variant="outlined"
        {...formik.getFieldProps('authorName')}
        error={formik.touched.authorName && Boolean(formik.errors.authorName)}
        helperText={formik.touched.authorName && formik.errors.authorName}
      />

      <Button
       style={{marginLeft: 320 , marginTop: 10}}
        type="submit"
        variant="contained"
        color="primary"
        disabled={!formik.isValid}
      >
        Submit
      </Button>
    </form>
    </>
  );
};

export default Books;
