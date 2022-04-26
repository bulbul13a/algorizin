import React from 'react'

function Search() {
    return (
        <div className='font-inter relative'>
            <div className='absolute top-[35%] left-3 flex justify-center items-center'>
            <svg className=' ' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m17.18 16.445-4.606-4.606c1.016-1.185 1.605-2.719 1.605-4.401A6.77 6.77 0 0 0 7.408.667C3.668.667.667 3.698.667 7.437c0 3.74 3.03 6.771 6.741 6.771a6.735 6.735 0 0 0 4.401-1.632l4.606 4.606c.13.1.264.151.397.151a.517.517 0 0 0 .368-.889Zm-9.743-3.278a5.719 5.719 0 0 1-5.729-5.73 5.719 5.719 0 0 1 5.73-5.729 5.7 5.7 0 0 1 5.728 5.73 5.719 5.719 0 0 1-5.729 5.729Z" fill="#88898E"/></svg>
            </div>
            
            <input className='bg-[#F2F2F3] py-[10px] pr-28 rounded-lg pl-10' type="text" name="name" placeholder='Search'/>
        </div>
    )
}

export default Search