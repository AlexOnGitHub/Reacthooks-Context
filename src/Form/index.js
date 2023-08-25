import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});
  
  const updateStep = (step) => {
    setStep(step);
  };

  useEffect(() => {
    console.log("useeffect")
  });

  useEffect(() => {
    console.log("Se ha actualizado el step: ", step)
  }, [step]);

  // useEffect(async() => {
  //   try {
  //     const data = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    console.log("newStep", newStep);
    console.log(step);
  };

  const handleChange = (element, position, currentStep, validator) =>{
    const value = element.target.value;
    const valid = validator(value);
    console.log(valid);
  };

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onchange: handleChange,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail,
          onSubmit 
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onchange: handleChange,
          helperText: "Ingresa una contraseña válida, almenos 8 caracteres y máximo 20",
          validator: validarPassword
        }
      ],
      buttonText: "Siguiente",
      onSubmit 
    },
    1: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onchange: handleChange,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail,
          onSubmit 
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onchange: handleChange,
          helperText: "Ingresa una contraseña válida, almenos 8 caracteres y máximo 20",
          validator: validarPassword
        }
      ],
      buttonText: "Siguiente",
      onSubmit 
    },
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>  
        {(step <3) && <Stepper step={step}/>}
        <Step data={stepsFlow[step]} step={step}/>
        {/*steps[step]*/}
      </FormSpace>
    </Box>
  );
};

export default Form;
