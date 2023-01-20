import React from 'react'
import semanticTokens from '../theme/semanticTokens'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    useColorModeValue,
} from '@chakra-ui/react'

interface IJInput {
    reference?: any
    is_invalid?: boolean
    is_required?: boolean
    name?: string
    label?: string
    left_icon?: any
    value?: any
    on_change?: any
    right_icon?: any
    helper_text?: string
    error_message?: string
    placeholder?: string
    type?: string | 'email' | 'password'
}

const JInput = (props: IJInput) => {
    return (
        <FormControl 
            ref={props?.reference}
            isInvalid={props?.is_invalid} 
            isRequired={props?.is_required} 
        >
            {/* label */}
            {   
                props?.label && 
                <FormLabel 
                    margin='0px 0px 10px 0px' 
                    lineHeight='100%'
                    fontSize='14px'
                    fontWeight='medium'
                >
                    {props?.label}
                </FormLabel>
            }


            <InputGroup>
                {/* left icon */}
                {
                    props?.left_icon && 
                    <InputLeftElement children={props?.left_icon} />
                }

                {/* input */}
                <Input 
                    fontSize='14px' 
                    name={props?.name}
                    type={props?.type}
                    placeholder={props?.placeholder}
                    value={props?.value}
                    onChange={props?.on_change}
                    focusBorderColor={useColorModeValue(semanticTokens.colors.primary._light, semanticTokens.colors.primary._dark)}
                    errorBorderColor={useColorModeValue(semanticTokens.colors.error._light, semanticTokens.colors.error._dark)}
                />

                {/* right icon */}
                {
                    props?.right_icon && 
                    <InputRightElement children={props?.right_icon} />
                }
            </InputGroup>

            {/* helper text */}
            {
                props?.helper_text && !props?.is_invalid &&
                <FormHelperText 
                    margin='5px 0px 0px 0px' 
                    lineHeight='100%'
                    fontSize='14px'
                >
                    {props?.helper_text}
                </FormHelperText>
            }

            {/* error message */}
            {
                props?.error_message && 
                <FormErrorMessage 
                    margin='5px 0px 0px 0px'
                    lineHeight='100%'
                    fontSize='14px'
                    color='error'
                >
                    {props?.error_message}
                </FormErrorMessage>
            }
        </FormControl>
    )
}

export default JInput