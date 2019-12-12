import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App/> rendering', () => {
    it('should render without crashing', () => {
        shallow(<App/>)
    })
})