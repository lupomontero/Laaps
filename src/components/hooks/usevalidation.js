import React,{useState,useEffect} from 'react';


const useValidaton = (initialState, validation,fn) => {

const [value, setValue]=useState(initialState)
const [error, setError]=useState({})
const [submitform, setSubmitform]=useState(false);

useEffect(()={
    if (submitform){
        const noError=Object.keys(error).length === 0;

        if (noError){
            fn();
        }

        setSubmitform(false);
    }

}
,[]
)
//Funcion que se ejecuta cuando el usuario escribe algo

const handleChange = e =>{

    setValue({
        ...value,
        [e.target.name]:e.target.value
    })

}


//funcion que se ejecuta cuando el usuario hace submit

const handleSubmit= e =>{

    e.preventDefault();

    const errorvalidation=validation(value)

    setError(errorvalidation);
    setSubmitform(true);
}
    return {
        value,
        error,
        submitform,
        handleSubmit,
        handleChange,
    };
}
 
export default useValidaton;