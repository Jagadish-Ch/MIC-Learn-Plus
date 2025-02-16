import { clamp } from 'framer-motion';
import React from 'react'

const StudentViewCommonFooter = () => {
    const footerData = [
        { name: "About Us", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Privacy Policy", link: "/privacy" },
        { name: "Terms of Service", link: "/terms" },
        { name: "Blog", link: "/blog" },
        { name: "Recommend a Course", link: "/recommend-course" },
        { name: "Support", link: "/support" },
        { name: "FAQ", link: "/faq" },
        { name: "Feedback", link: "/feedback" },
    ];

    // Split the data into 3 sections
    const sectionSize = Math.ceil(footerData.length / 3);
    const sections = [
        footerData.slice(0, sectionSize),
        footerData.slice(sectionSize, sectionSize * 2),
        footerData.slice(sectionSize * 2),
    ];

  return (
    <div className="border-t-2 border-t-white w-full h-full bg-neutral-900 dark:bg-slate-900 text-white" >
        <section className='container justify-between mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-[30px]'>
        {sections.map((section, index) => (
          <div key={index}>
            <ul className="space-y-2 p-4 rounded-[30px] text-center border md:border-none">
              {section.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="hover:text-yellow-600 transition duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </section>

        <section className='text-center pb-[30px] text-yellow-500'>
            <p style={{fontSize:clamp("0.8rem", "0.5rem" + "1vw", "1.2rem")}}> Copyright &#169; 2025 MIC: E-LEARNING. All rights reserved.</p>
            {/* <p style={{fontSize:clamp("0.8rem", "0.5rem" + "1vw", "1.2rem")}}> Developed by Jagadish Chennuru</p> */}
        </section>
    </div>
  )
}

export default StudentViewCommonFooter;
