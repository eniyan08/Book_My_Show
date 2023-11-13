import { Disclosure } from '@headlessui/react'
import { BiChevronDown,BiChevronUp } from 'react-icons/bi';

const PlaysFilter = (props) => {
  return (
    
    <Disclosure >
      {({ open }) => (  
        // go to headless ui website and look in disclosure segment to know about open. Its like a inbuilt function
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          <Disclosure.Button className="py-2 flex items-center gap-3">
            
            {open ? <BiChevronUp/> : <BiChevronDown/>}
            
            <div className='relative flex'>
            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
            <span className='absolute 2xl:left-48 xl:left-36 lg:left-32 text-gray-500 text-xs mt-1'>Clear</span>
            </div>


          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <div className='flex items-center gap-3 flex-wrap p-4'>
              {props.tags.map((tag) => (
                <>
                  <div className='border-2 border-gray-200 py-1'>
                    <span className='text-red-600 text-sm px-2 '>{tag}</span>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
  )
}

export default PlaysFilter