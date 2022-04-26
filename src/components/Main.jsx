import React from 'react'
import Search from './Search'
function Main() {
    return (
        <div className='bg-white p-4 m-4'>
            <Search />
            <div class="border-b shadow overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-hidden">
                <table class="divide-y min-w-full ">
                    <thead class="text-xs text-left text-[#3E3F48] uppercase bg-[#FDF4ED]">
                        <tr class="">
                            <th class="px-3 py-3 hidden tablet:inline-block"> <input type="checkbox" class="px-2 py-2 text-red-500 rounded form-checkbox focus:ring-0" /></th>
                            <th class="px-3 py-3 hidden tablet:inline-block">
                                <div className='flex items-center'>
                                    <h1 className='pr-1'>Date Updated</h1>
                                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10.198 7.14-4.584 4.167a.416.416 0 0 1-.561.001L.469 7.142a.417.417 0 0 1 .56-.616l3.888 3.531V.583c0-.23.186-.393.393-.393.207 0 .44.163.44.393v9.474l3.885-3.534a.417.417 0 0 1 .59.029.416.416 0 0 1-.027.589Z" fill="#3E3F48"/></svg>
                                </div>
                            </th>
                            <th class="px-3 py-3">
                                <div className='flex'>
                                    <h1 className='pr-1'>Title</h1>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.136 4.356 4.719.19a.416.416 0 0 1 .562 0l4.583 4.166a.415.415 0 1 1-.56.616L5.416 1.439v9.474c0 .23-.187.394-.393.394-.207 0-.44-.163-.44-.394V1.44L.697 4.973a.417.417 0 0 1-.589-.028.416.416 0 0 1 .027-.589Z" fill="#3E3F48"/><path d="M9.865 11.644 5.28 15.81a.416.416 0 0 1-.561.002L.136 11.645a.415.415 0 1 1 .561-.615l3.886 3.53V5.087c0-.23.187-.394.394-.394.206 0 .44.163.44.394v9.474l3.885-3.534a.417.417 0 0 1 .563.617Z" fill="#3E3F48"/></svg>
                                </div>
                            </th>
                            <th class="px-3 py-3 hidden desktop:inline-block">Details</th>
                            <th class="px-3 py-3">
                                <h1 className='hidden tablet:inline-block'>Status</h1>
                            </th>
                            <th class="px-3 py-3">
                                <h1 className='hidden desktop:inline-block'>Quantity</h1>
                            </th>
                            <th class="px-3 py-3 hidden desktop:inline-block">Unit Price</th>
                            <th class="px-3 py-3">
                                <div className='flex'>
                                    <h1 className='pr-1'>Ammount</h1>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.136 4.356 4.719.19a.416.416 0 0 1 .562 0l4.583 4.166a.415.415 0 1 1-.56.616L5.416 1.439v9.474c0 .23-.187.394-.393.394-.207 0-.44-.163-.44-.394V1.44L.697 4.973a.417.417 0 0 1-.589-.028.416.416 0 0 1 .027-.589Z" fill="#3E3F48"/><path d="M9.865 11.644 5.28 15.81a.416.416 0 0 1-.561.002L.136 11.645a.415.415 0 1 1 .561-.615l3.886 3.53V5.087c0-.23.187-.394.394-.394.206 0 .44.163.44.394v9.474l3.885-3.534a.417.417 0 0 1 .563.617Z" fill="#3E3F48"/></svg>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y">
                        <tr>
                            <td class="px-3 py-4 whitespace-nowrap hidden tablet:inline-block">
                                <input type="checkbox" class="px-2 py-2 text-red-500 rounded form-checkbox focus:ring-0" />
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap hidden tablet:inline-block">
                                <div>
                                    <h1 class="text-base font-medium">
                                        11 Nov 2021
                                    </h1>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap ">
                                <div>
                                    <h1 class="text-base font-medium">
                                        Hammer
                                    </h1>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap hidden desktop:inline-block">
                                <div>
                                    <h1 class="text-base font-medium">
                                        This is a hammer to do work with
                                    </h1>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div className='flex items-center justify-start'>
                                    <h1 class="text-base font-medium pr-2 hidden tablet:inline-block">
                                        Alright
                                    </h1>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#44C776"/></svg>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div>
                                    <h1 class="text-base font-medium">
                                        200/300
                                    </h1>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap hidden desktop:inline-block">
                                <div>
                                    <h1 class="text-base font-medium">
                                        $10
                                    </h1>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div>
                                    <h1 class="text-base font-medium">
                                        $2000.00
                                    </h1>
                                </div>
                            </td>
                        </tr>
                        

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Main