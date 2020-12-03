import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { StateProvider } from './StateContext'

test('renders learn react link', () => {
  const { getByText } = render(<StateProvider><App /></StateProvider>)
})
