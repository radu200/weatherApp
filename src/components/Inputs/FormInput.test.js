import React from 'react'
import FormInput from './FormInput'
import { shallow, mount } from 'enzyme'     
import { shallowToJson } from 'enzyme-to-json'



describe('FormInput component', () => {
  const props = {
    name:'some name',
    type:'text',
    placeholder:'search',
    className:'some class'
  }
  let wrap;
   beforeEach(() => {
      wrap = shallow(<FormInput {...props}/>)
   })

  it('should render FormInput with given props', () => {
    expect(shallowToJson(wrap)).toMatchSnapshot()
})
    
    it('should call onChange event', () => {
       const onSearch = jest.fn() 
       const component = shallow(<FormInput handleChange={onSearch} />)
       const input = component.find('input');
       input.simulate('change')
       expect(onSearch).toHaveBeenCalled()
    })
})
