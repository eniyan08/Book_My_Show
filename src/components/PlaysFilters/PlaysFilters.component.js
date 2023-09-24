import { Disclosure } from '@headlessui/react'
import { BiChevronDown,BiChevronUp } from 'react-icons/bi';

const PlaysFilter = () => {
  return (
    <Disclosure>
      {({ open }) => (  
        // go to headless ui website and look in disclosure segment to know about open. Its like a inbuilt function
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          <Disclosure.Button className="py-2 flex items-center gap-3">
            
            {open ? <BiChevronUp/> : <BiChevronDown/>}
            
            Is team pricing available?
        
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            Yes! You can purchase a license that you can share with your entire team.
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
  )
}

export default PlaysFilter