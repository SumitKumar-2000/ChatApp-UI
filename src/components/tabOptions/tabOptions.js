import React from 'react'
import './tabOptions.css'

const TabOptions = () => {

  const tabButtons = [
    {
      id : 1,
      option : "Chat"
    },
    {
      id : 2,
      option : "Dispatch"
    },
    {
      id : 3,
      option : "Docs"
    },
    {
      id : 4,
      option : "Payroll"
    },
    {
      id : 5,
      option : "Compliance"
    }
  ]
  
  return (
    <div className='tabOptions__container'>
      {
        tabButtons.map(button => {
          return <div key={button.id} className='tabButton'>
            {button.option}
          </div>
        })
      }
    </div>
  )
}

export default TabOptions
