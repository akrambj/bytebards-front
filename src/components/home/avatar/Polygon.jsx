import React from 'react'

const Polygon = (props) => {
  return (
<div className="flex flex-start gap-0 z-[50] ml-[-200px]">
  <svg width="108" height="108" viewBox="0 0 108 108" fill={props.color} xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_516_12)">
    <path d="M5.0184 0.287758C4.35659 0.00272276 3.62446 -0.0771433 2.91676 0.0584933C2.20905 0.19413 1.55833 0.539027 1.0488 1.04856C0.539271 1.55809 0.194374 2.20881 0.0587374 2.91651C-0.0768992 3.62422 0.0029669 4.35634 0.288002 5.01816L43.488 105.818C43.7756 106.489 44.2605 107.057 44.8783 107.446C45.4961 107.836 46.2177 108.028 46.9473 107.997C47.6768 107.967 48.3799 107.715 48.9631 107.276C49.5463 106.836 49.9822 106.23 50.2128 105.537L64.044 64.0438L105.538 50.2198C106.233 49.9905 106.841 49.5549 107.283 48.9708C107.724 48.3868 107.976 47.6822 108.007 46.9509C108.037 46.2196 107.844 45.4964 107.453 44.8777C107.062 44.2589 106.492 43.7741 105.818 43.4878L5.0184 0.287758Z"/>
    </g>
    <defs>
    <clipPath id="clip0_516_12">
    <rect width="108" height="108" fill="white"/>
    </clipPath>
    </defs>
  </svg>

  <div className='relative flex items-center justify-center drop-shadow-avatar'>
    <div className='flex items-center justify-center'>
        <svg width="299" height="313" viewBox="0 0 299 313" fill={props.color} xmlns="http://www.w3.org/2000/svg">
        <path d="M98.5 20.3731C130.059 2.15252 168.941 2.15252 200.5 20.3731L241.889 44.2692C273.448 62.4898 292.889 96.1627 292.889 132.604V180.396C292.889 216.837 273.448 250.51 241.889 268.731L200.5 292.627C168.941 310.848 130.059 310.847 98.5 292.627L57.1106 268.731C25.5517 250.51 6.11061 216.837 6.11061 180.396V132.604C6.11061 96.1627 25.5517 62.4898 57.1106 44.2692L98.5 20.3731Z" stroke="white" stroke-width="12"/>
        </svg>
        <label htmlFor="myInputFile" className='z-[1000] ml-[-200px]'>
          <img src="/imgs/add_pic.svg" alt="Upload" />
          <input type="file" name="myInputFile" id="myInputFile" style={{ display: 'none' }} />
        </label>
    </div>
    
    </div>
</div>
  )
}

export default Polygon