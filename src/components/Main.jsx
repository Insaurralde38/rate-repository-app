import React from 'react'
import { View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList.jsx'
import LogInPage from '../pages/Login.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList/>} />
        <Route path='/signin' element={<LogInPage/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main