import React from 'react';

const Question = () => {
   return (



      <div className='md:w-4/5 mx-auto'>
      <div className='my-3 '>


         
<div className='"max-w-2xl mb-4 p-4  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"'>
            <p className='text-center bg-indigo-50 border-2 border-purple-400 rounded-lg  shadow-md w-4/6 mb-2 m-auto font-bold text-sm md:text-lg text-purple-700 '>
            when should you use context api in react???
            </p>
            

            <p className="mb-5 text-sm p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">The Context API in React is useful when you need to share data between components that are not directly related to each other in the component tree. This can help you avoid prop drilling (passing down props through multiple levels of components) and simplify the management of shared state...</p>
            
         


           
         </div>
<div className='"max-w-2xl mb-4 p-4  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"'>
            <p className='text-center bg-indigo-50   border-2 border-purple-400 rounded-lg  shadow-md w-4/6 mb-2 m-auto font-bold text-sm md:text-lg text-purple-700 '>
            What is custom Hook in React??
            </p>
            

            <p className="mb-3 text-sm p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">Custom Hooks are a feature in React that allows you to extract common logic into reusable functions. A custom hook is essentially a JavaScript function that starts with the word "use" and can use other React hooks inside of it.

By creating a custom hook, you can abstract away repetitive code that can be reused across multiple components. Custom hooks can also be used to share stateful logic between components, without having to lift state up to a common ancestor.

For example, you might create a custom hook called useFetch that handles fetching data from an API. Then, you can use this hook in multiple components to fetch data without having to duplicate the fetch code in each component.

To create a custom hook, simply define a function that uses other hooks inside of it. You can then export the function and use it in your components.

Custom hooks are a powerful tool in React that can help you write more reusable and maintainable code.. ...</p>
           
         


           
         </div>
<div className='"max-w-2xl mb-4 p-4  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"'>
            <p className='text-center bg-indigo-50   border-2 border-purple-400 rounded-lg  shadow-md w-4/6 mb-2 m-auto font-bold text-sm md:text-lg text-purple-700 '>
            What is useRef() in react??
            </p>
            

            <p className="mb-3  text-sm p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">In React, useRef is a hook that allows you to create a mutable reference to a DOM element or to store a mutable value that persists across component renders.

The useRef hook returns a JavaScript object with a "current" property. This "current" property can be used to store any mutable value or a reference to a DOM element. The value of the "current" property can be set or accessed directly.</p>
            
           
           
         


           
         </div>
<div className='"max-w-2xl mb-4  p-4  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"'>
            <p className='text-center bg-indigo-50   border-2 border-purple-400 rounded-lg  shadow-md w-4/6 mb-2 m-auto font-bold text-sm md:text-lg text-purple-700 '>
            What is useMemo() in react??
            </p>
            

            <p className="mb-3 text-sm p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">function is only re-executed when its dependencies have changed.

The useMemo hook takes two arguments: the first argument is a function that returns a value, and the second argument is an array of dependencies. If any of the dependencies change between renders, the memoized function is re-executed and a new value is returned.

Here are some use cases for useMemo in React:


            <p className='mt-5 '>
            <li className='mb-2 '>Complex calculations: You can use useMemo to memoize the result of a complex calculation. This can improve performance by avoiding unnecessary re-calculations when .</li>
            <li className='mb-3'>JSX: React uses a syntax extension called JSX, which allows you to write HTML-like code in your JavaScript files.</li>
            <li className='mb-3'>Filtering or sorting data: You can use useMemo to memoize the result of filtering or sorting an array of data. This can improve performance by avoiding unnecessary re-filters or re-sorts when the input data hasn't changed.</li>
           </p>
            
            </p>
           
         


           
         </div>





         

      </div>
      </div>
   );
};

export default Question;