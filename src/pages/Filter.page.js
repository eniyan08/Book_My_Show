import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const Filter = (props) => {
   // Function triggered when the form is submitted
   const onTrigger = () => {
      // Call the parent callback function 
      props.parentCallback1()
      props.parentCallback2()
      
   }
   const [click, setClick] = useState(false)
    return (
        <>
        
          <div style={{ visibility: props.status ? "hidden" : "visible"}}>
            <div className='relative  '>
              <div className='flex container mx-auto'>
                  <div className='fixed top-0 left-0 right-0  bg-navColor-800  pl-6 flex' >
                    <button onClick={onTrigger}>
                      <RxCross2  className='w-5 h-5 text-white'/>
                    </button>         
                    <div className=' container mx-auto flex flex-col items-center justify-center overflow-y:scroll'>
                      <h className='items-center justify-center text-white text-2xl py-2'>Filters</h>
                      <div className='overflow-auto fixed top-11 left-0 right-0 bottom-20 flex flex-col mt-1'>
                          {props.filterData.map((data) => (
                            <>
                            
                            <h className='bg-slate-200 py-2 px-4 font-medium text-gray-700'>{data.title}</h>
                            {data.tags.map((tag) => {
                              
                              return ( 
                                <h onClick={() => setClick(!click)} className='bg-slate-50 py-2 px-4 text-gray-500 font-semibold hover:text-red-500 text-sm'>{tag}</h>  
                              )
                            })}

                            </>
                            )
                          )}
                      </div>
                    </div>  
                             
                  </div> 
                            
              </div>  
              {click ? (<div className='container mx-auto fixed bottom-8 left-0 right-0 '>
                          <button className='flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md'>Apply</button>
                        </div> ) : 
                        (<div className='container mx-auto fixed bottom-8 left-0 right-0 '>
                           <button className='flex items-center justify-center w-full bg-slate-300 text-white py-2 rounded-md'>Apply</button>
                        </div> )}
               
              </div>    
            </div>
          
         
      </>
    )
}

export default Filter