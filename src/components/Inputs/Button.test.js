import React from 'react'
import Button from './Button'
import { shallow} from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'


describe('Button component', () => {
 
   const props = {
      name:'search',
      type:"submit",
      className:'someClass'
   }


   let wrap 
   beforeEach(() => {
      wrap = shallow(<Button {...props}/>)
   })

   it('should render button with given props', () => {
        expect(shallowToJson(wrap)).toMatchSnapshot()
   })

    
    it('should call click event', () => {
       const mockFn = jest.fn() 
       const component = shallow(<Button handleClick={mockFn} />)
       component.find('button').simulate('click')
       expect(mockFn).toHaveBeenCalled();

    })
})
