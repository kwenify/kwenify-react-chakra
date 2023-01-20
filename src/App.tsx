import React, { useState } from 'react'
import JInput from './components/JInput'
import { Flex, Icon } from '@chakra-ui/react'
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md'

const App = () => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })

    function handleChange(e: any) {
        setFormValue((prev: any) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <Flex direction='column' width='100%' padding='10px' gap='20px'>
            <JInput 
                label='Email'
                name='email'
                type='email'
                placeholder='Type email ...'
                value={formValue?.email}
                on_change={handleChange}
                error_message='Email is required'
                is_required
                left_icon={<Icon as={MdOutlineEmail} color='var(--chakra-colors-chakra-border-color)' fontSize='24px' />}
            />

            <JInput 
                label='Password'
                name='password'
                type='password'
                placeholder='Type password ...'
                value={formValue?.password}
                on_change={handleChange}
                error_message='Password is required'
                is_required
                left_icon={<Icon as={MdLockOutline} color='var(--chakra-colors-chakra-border-color)' fontSize='24px' />}
            />
        </Flex>
        // <Login />
    )
}

export default App