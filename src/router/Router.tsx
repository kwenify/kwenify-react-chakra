import React from 'react'
import urlRouter from './urlRouter'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../designSystem/pages'

const Router = () => {
    return (
        <Routes>
            <Route path={urlRouter.DESIGN_SYSTEM_PAGE_LOGIN} element={<Login />} />
        </Routes>
    )
}

export default Router