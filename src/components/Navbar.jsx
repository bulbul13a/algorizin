import React from 'react'

function Navbar() {
  return (
    <div className='font-inter font-medium  flex justify-between items-center h-16 bg-[#ffffff] text-[#3E3F48] pl-[36px] pr-[10px] '>

      <div className="flex items-center">
        <p>Starbucks</p>
        <svg className='ml-[7px]' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.595 5.438a.5.5 0 0 0 .81 0L7.758.793A.5.5 0 0 0 7.353 0H.647a.5.5 0 0 0-.405.793l3.353 4.645Z" fill="#3E3F48" /></svg>
      </div>

      <div className="flex justify-between items-center">
        <svg  width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.429 13.078c-1.094-1.035-1.93-2.124-1.93-5.816 0-3.11-2.475-5.645-5.624-5.953V.625A.624.624 0 0 0 9.249 0a.622.622 0 0 0-.625.625v.684c-3.148.307-5.66 2.843-5.66 5.953 0 3.691-.835 4.781-1.929 5.816a1.82 1.82 0 0 0-.44 2.002 1.941 1.941 0 0 0 1.779 1.17h13.75a1.88 1.88 0 0 0 1.743-1.137c.28-.726.109-1.515-.438-2.035ZM16.124 15H2.374c-.557 0-.835-.645-.445-.98 1.363-1.3 2.32-2.75 2.32-6.723-.035-2.668 2.235-4.797 5-4.797 2.766 0 5 2.129 5 4.762 0 3.96.947 5.422 2.32 6.722.391.375.106 1.016-.445 1.016Zm-4.996 2.5c-.29 0-.56.162-.66.425-.18.481-.66.825-1.254.825s-1.04-.345-1.22-.825c-.065-.265-.335-.425-.628-.425-.414 0-.717.39-.589.77A2.584 2.584 0 0 0 9.214 20c1.151 0 2.131-.728 2.47-1.73.163-.415-.138-.77-.556-.77Z" fill="#3E3F48" /></svg>
        <img className="w-8 h-8 rounded-full ml-[19px] mr-[16px]"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p>John Doe</p>
        <svg className='ml-[11px]' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.595 5.438a.5.5 0 0 0 .81 0L7.758.793A.5.5 0 0 0 7.353 0H.647a.5.5 0 0 0-.405.793l3.353 4.645Z" fill="#3E3F48" /></svg>
      </div>

    </div>
  )
}

export default Navbar