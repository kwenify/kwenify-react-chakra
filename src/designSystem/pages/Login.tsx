import React from 'react'
import JInput from '../../components/JInput'
import { FcGoogle } from 'react-icons/fc'
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md'
import { Flex,Center, Icon, Heading, Button } from '@chakra-ui/react'

const Login = () => {
    return (
        <Flex
            as={Center}
            direction='column'
            minHeight='100vh'
            width='100vw'
            background='primary'
            padding={{ base: '10px', sm: '15px', md: '20px' }} 
        >
            <Flex 
                direction='column' 
                backgroundColor='Background'
                gap='20px' 
                rounded='base'
                padding= '20px'
                width={{ base: 'full', md: '450px' }}
            >
                <Flex direction='column' gap='5px' marginBottom='20px'>
                    <Heading size='displaySmall'>Sign in</Heading>
                    <Flex gap='5px'>
                        <Heading size='titleSmall'>New to Kwenify?</Heading>
                        <Heading 
                            color='primary' 
                            size='titleSmall' 
                            fontWeight='semibold'
                            cursor='pointer'
                        >
                            Sign up for free?
                        </Heading>
                    </Flex>
                </Flex>
                <JInput 
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Type email ...'
                    // value={formValue?.email}
                    // on_change={handleChange}
                    error_message='Email is required'
                    is_required
                    left_icon={<Icon as={MdOutlineEmail} color='secondary' fontSize='24px' />}
                />

                <JInput 
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Type password ...'
                    // value={formValue?.password}
                    // on_change={handleChange}
                    error_message='Password is required'
                    is_required
                    left_icon={<Icon as={MdLockOutline} color='secondary' fontSize='24px' />}
                />

                <Heading 
                    color='primary' 
                    size='titleSmall' 
                    fontWeight='semibold'
                    cursor='pointer'
                    marginTop='20px'
                >
                    Forgot password?
                </Heading>
                <Button colorScheme='blue'>
                    Sign in
                </Button>
                <Button leftIcon={<Icon as={FcGoogle} />} variant='ghost'>
                    Sign in with Google
                </Button>
            </Flex>
        </Flex>
    )
}

export default Login