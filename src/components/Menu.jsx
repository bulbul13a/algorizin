import React from "react";

function Menu() {
  return (
    <div className="flex tablet:flex-col tablet:mt-10 tablet:gap-2 justify-evenly items-center h-[72px] tablet:h-auto shadow-[0px -4px 2px rgba(0, 0, 0, 0.09)] ">
      <div className="p-4 desktop:p-0 desktop:px-12 desktop:py-4 rounded-lg hover:shadow-menu transition-all duration-300 desktop:flex desktop:items-center desktop:space-x-3 desktop:justify-center group hover:bg-white">
        <div>
          <svg
          className="text-[#6B6C72] group-hover:text-green-600"
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.964 10a.622.622 0 0 0-.212-.469L12.162.156a.624.624 0 0 0-.827 0L.745 9.531a.561.561 0 0 0-.246.47.625.625 0 0 0 1.038.468L3 9.179v7.695A3.13 3.13 0 0 0 6.124 20H17.34a3.09 3.09 0 0 0 3.09-3.09V9.215l1.531 1.254a.606.606 0 0 0 .379.156.605.605 0 0 0 .625-.625Zm-3.75-1.875v8.75c0 1.034-.841 1.875-1.84 1.875H6.124c-1.034 0-1.84-.841-1.84-1.875v-8.75c0-.015-.007-.027-.008-.041l7.473-6.625 7.508 6.625c0 .014-.043.025-.043.041Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <h1 className="font-medium text-gray-600 hidden desktop:block group-hover:text-green-600">Dashboard</h1>
        </div>
      </div>
      <div className="p-4 desktop:p-0 desktop:px-12 desktop:py-4 rounded-lg hover:shadow-menu transition-all duration-300 desktop:flex desktop:items-center desktop:space-x-3 desktop:justify-center group hover:bg-white">
        <div>
        <svg
        className="text-[#6B6C72] group-hover:text-green-600"
        width="15"
        height="20"
        viewBox="0 0 15 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.27 4.894 10.11.734A2.502 2.502 0 0 0 8.34 0H2.5A2.5 2.5 0 0 0 0 2.5v15A2.5 2.5 0 0 0 2.5 20h10a2.5 2.5 0 0 0 2.5-2.5V6.66c0-.664-.262-1.297-.73-1.766ZM8.75 1.331c.175.061.339.15.473.285l4.16 4.16c.137.134.226.298.285.474H9.375a.627.627 0 0 1-.625-.625V1.33Zm5 16.169c0 .689-.56 1.25-1.25 1.25h-10c-.69 0-1.25-.561-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25h5v4.375C7.5 6.66 8.34 7.5 9.375 7.5h4.375v10Zm-10-6.875c0 .344.281.625.625.625h6.25a.627.627 0 0 0 .625-.625.627.627 0 0 0-.625-.625h-6.25a.627.627 0 0 0-.625.625Zm6.875 1.875h-6.25a.627.627 0 0 0-.625.625c0 .344.281.625.625.625h6.25a.625.625 0 0 0 0-1.25Zm0 2.5h-6.25a.627.627 0 0 0-.625.625c0 .344.281.625.625.625h6.25a.625.625 0 0 0 0-1.25Z"
          fill="currentColor"
        />
      </svg>
        </div>
        <div>
          <h1 className="font-medium text-gray-600 hidden desktop:block group-hover:text-green-600">Dashboard</h1>
        </div>
      </div>
      <div className="p-4 desktop:p-0 desktop:px-12 desktop:py-4 rounded-lg hover:shadow-menu transition-all duration-300 desktop:flex desktop:items-center desktop:space-x-3 desktop:justify-center group hover:bg-white">
        <div>
        <svg
        className="text-[#6B6C72] group-hover:text-green-600"
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.375 12.5h8.75a.625.625 0 1 0 0-1.25h-8.75a.627.627 0 0 0-.625.625c0 .344.281.625.625.625Zm0-3.75h8.75a.627.627 0 0 0 .625-.625.627.627 0 0 0-.625-.625h-8.75a.627.627 0 0 0-.625.625c0 .344.281.625.625.625Zm0 7.5h5a.625.625 0 1 0 0-1.25h-5a.627.627 0 0 0-.625.625c0 .344.281.625.625.625ZM15 0H2.5A2.5 2.5 0 0 0 0 2.5v15A2.5 2.5 0 0 0 2.5 20H15a2.5 2.5 0 0 0 2.5-2.5v-15C17.5 1.12 16.379 0 15 0Zm1.25 17.5c0 .69-.56 1.25-1.25 1.25H2.5c-.69 0-1.25-.56-1.25-1.25V5h15v12.5Zm0-13.75h-15V2.5c0-.69.56-1.25 1.25-1.25H15c.69 0 1.25.56 1.25 1.25v1.25Z"
          fill="currentColor"
        />
      </svg>
        </div>
        <div>
          <h1 className="font-medium text-gray-600 hidden desktop:block group-hover:text-green-600">Dashboard</h1>
        </div>
      </div>
      <div className="p-4 desktop:p-0 desktop:px-12 desktop:py-4 rounded-lg hover:shadow-menu transition-all duration-300 desktop:flex desktop:items-center desktop:space-x-3 desktop:justify-center group hover:bg-white">
        <div>
        <svg
        className="text-[#6B6C72] group-hover:text-green-600"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.965 20c-2.19 0-2.968-.443-2.968-1.404v-1.545a7.593 7.593 0 0 1-1.655-.954l-1.34.773a1.19 1.19 0 0 1-.6.157c-1.434 0-2.978-3.628-2.978-4.243 0-.423.227-.833.614-1.057l1.334-.77c-.008-.328-.028-.645-.028-.992 0-.348.02-.63.063-.956l-1.336-.736A1.225 1.225 0 0 1 .46 7.215c0-.492 1.483-4.246 2.976-4.246.212 0 .423.052.606.16l1.334.773a8.257 8.257 0 0 1 1.621-.954V1.403C6.996.169 8.426 0 10 0c1.552 0 2.934.16 2.934 1.403v1.545a7.592 7.592 0 0 1 1.655.954l1.34-.773c.18-.106.39-.157.6-.157 1.424 0 2.978 3.615 2.978 4.242 0 .424-.227.834-.614 1.058l-1.334.77a7.326 7.326 0 0 1 0 1.912l1.335.771c.387.223.613.633.613 1.057 0 .492-1.483 4.246-2.977 4.246a1.19 1.19 0 0 1-.605-.16l-1.336-.77a7.614 7.614 0 0 1-1.655.953v1.545c.035.959-.742 1.404-2.969 1.404Zm-4.46-5.422c1.402 1.204 2.044 1.342 2.775 1.602v2.416a10.45 10.45 0 0 0 1.71.145 8.55 8.55 0 0 0 1.764-.178l-.037-2.383c.628-.223 1.374-.4 2.775-1.602l2.095 1.21a9.09 9.09 0 0 0 1.695-2.99l-2.069-1.195c.108-.585.19-.993.19-1.526 0-.428-.053-.936-.19-1.682l2.089-1.205a9.083 9.083 0 0 0-1.762-2.997L14.492 5.42c-1.403-1.204-2.045-1.342-2.775-1.601V1.403a10.456 10.456 0 0 0-1.71-.146c-.584 0-1.177.054-1.765.179l.037 2.383c-.626.224-1.372.365-2.775 1.603L3.412 4.21a9.096 9.096 0 0 0-1.707 3.026l2.08 1.159c-.107.584-.19.995-.19 1.49 0 .429.053.937.19 1.683l-2.089 1.205a9.084 9.084 0 0 0 1.762 2.997l2.046-1.193ZM10 13.715a3.754 3.754 0 0 1-3.75-3.75A3.755 3.755 0 0 1 10 6.215a3.755 3.755 0 0 1 3.75 3.75 3.755 3.755 0 0 1-3.75 3.75Zm0-6.25a2.503 2.503 0 0 0-2.5 2.5c0 1.378 1.121 2.5 2.5 2.5 1.38 0 2.5-1.122 2.5-2.5s-1.12-2.5-2.5-2.5Z"
          fill="currentColor"
        />
      </svg>
        </div>
        <div>
          <h1 className="font-medium text-gray-600 hidden desktop:block group-hover:text-green-600">Dashboard</h1>
        </div>
      </div>
     
      
     
 
    </div>
  );
}

export default Menu;
