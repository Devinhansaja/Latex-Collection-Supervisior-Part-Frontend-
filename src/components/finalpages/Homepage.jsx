import React from 'react'
import TopicBox from '../Common/TopicBox'
import Gif from '../Pages/Gif'
import FormComponent from '../Pages/FormComponent'

export default function Homepage() {
  return (
    <div>
      <TopicBox/>
     
  <div style={{display:'flex'}}>
  <Gif  />
      <FormComponent/>
  </div>
      
      
     
    </div>
  )
}
