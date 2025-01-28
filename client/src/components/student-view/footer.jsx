import React from 'react'

const StudentViewCommonFooter = () => {
  return (
    <div className="flex mt-6 border-t-2 border-t-white w-full h-[200px] bg-neutral-900 dark:bg-slate-900 text-white" >
        <section className='grid gap-2 justify-center items-center'>
            <div className='bg-green-500 '>
                <ul>
                    <li>name</li>
                    <li>name</li>
                    <li>name</li>
                </ul>
            </div>

            <div>

            </div>

            <div>

            </div>
        </section>

        <section className='bg-red-500'>
            <h2>All Copyrights reserved</h2>
        </section>
    </div>
  )
}

export default StudentViewCommonFooter;
