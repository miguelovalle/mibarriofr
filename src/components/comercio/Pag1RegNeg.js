import React from 'react'
import { Input, Grid, FormControl, FormErrorMessage, FormHelperText, Button, Flex, Center, VStack, } from "@chakra-ui/react";
import { useForm} from "react-hook-form"; 
import { useNavigate } from "react-router-dom";
import { CgPlayTrackNextR } from 'react-icons/cg';
import { PageHeader } from '../comercio/PageHeader';

export const Pag1RegNeg = () => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();   
    const onSubmit = (data) => {
        
        //guardar en sesionstorage
        sessionStorage.setItem("tipo", data.tipo);
        sessionStorage.setItem("nombre", data.negocio);
        sessionStorage.setItem("emblema", data.emblema);
        sessionStorage.setItem("especialidad", data.especialidad);
        //ir a pag siguiente
       navigate("/auth/pag2");
    };

    return (
        <Flex  mb={2} p={2}>
            <Center w="100%" >
                <VStack>
                    <PageHeader pageName = {"Datos del Negocio"}  pageTitle = { "Registrar Nuevo Negocio" } />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={3}>
                            <label htmlFor="tipo">Tipo Negocio</label>
                            <FormControl isInvalid={ errors.tipo }>
                                <select {...register("tipo", {required:"Campo Obligatorio"})}>
                                    <option value="restaurante">restaurante</option>
                                    <option value="cafeteria">cafetería</option>
                                    <option value="peluqueria">peluqurería</option>
                                </select>
                                <FormErrorMessage> 
                                    {errors.tipo && errors.tipo.message}
                                </FormErrorMessage>
                            </FormControl>

                            <label htmlFor="negocio">Nombre</label>
                            <FormControl isInvalid={ errors.negocio }>
                                <Input
                                    type="text"
                                    borderColor="gray.400"
                                    {...register("negocio", { 
                                        required: "Campo Obligatorio" })}
                                />
                                <FormErrorMessage> 
                                    {errors.negocio && errors.negocio.message}
                                </FormErrorMessage>
                            </FormControl>
                            
                            <label htmlFor="emblema">Emblema</label>
                            <FormControl isInvalid={ errors.emblema }>
                                <Input
                                    type="text"
                                    borderColor="gray.400"
                                    placeholder="Ej: Solo trabajamos con carnes maduradas"
                                    {...register("emblema", { 
                                        required: "Campo Obligatorio", 
                                        maxLength: {value:30, message:"Máximo 30 Caracteres"}
                                    })}
                                /> 
                                <FormHelperText>La frase que distingue a su negocio</FormHelperText>
                                <FormErrorMessage> 
                                    {errors.emblema && errors.emblema.message}
                                </FormErrorMessage>                              
                            </FormControl>
                                
                            <label htmlFor="especialidad">especialidad</label>
                            <FormControl isInvalid={ errors.especialidad }>
                                <Input
                                    type="text"
                                    borderColor="gray.400"
                                    placeholder="Ej: Pollo al horno y Carbon"
                                    {...register("especialidad", { required: "Campo Obligatorio", maxLength:{value: 30, message:"Máximo 30 caracteres"} })}
                                />
                                <FormHelperText>En lo que su negocio es sobresaliente</FormHelperText>
                                <FormErrorMessage> 
                                    {errors.emblema && errors.emblema.message}
                                </FormErrorMessage>                              

                            </FormControl>
                        </Grid>
                        <Button
                            type="submit"
                            mt="6"
                            rightIcon={ <CgPlayTrackNextR /> }
                            colorScheme="blue"
                            size="lg" 
                            w="100%"
                            >
                            Siguiente...
                        </Button>
                </form>           
                 
                </VStack>
               
            </Center>
        </Flex>

    )
}
