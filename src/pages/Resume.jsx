import {Link} from 'react-router-dom';
export default function Resume() {
  const currentYear = new Date().getFullYear();
  return (
<div className="bg-slate-800 min-h-screen flex flex-col">
  
 <main className="flex-grow ">

    
     <div className="animate-[pulse_1s] w-full flex flex-col lg:flex-row justify-center items-center gap-6 p-6">
     <div className="p-6 border-2 border-amber-200 rounded-md bg-slate-700 text-white w-[500px] lg:w-[350px] xl:w-[400px] max-lg:w-full h-[80vh] max-lg:h-auto flex flex-col items-center justify-center">
      <div className="items-center w-auto justify-center gap-6">  
      {/* <img className="w-40 h-40 rounded-md justify-center mx-auto" src="/assets/images/Screenshot 2024-09-16 133125.png"/> */}
       
         
          <div className="share-tech flex gap-8 mt-6 items-center justify-center pb-6 xl:text-xl">
           <Link className="hover:text-slate-900 " to="/">ABOUT</Link>
           <Link className="active-link" to="/resume">RESUME</Link>
           <Link className="hover:text-slate-900" to="/projects">PROJECTS</Link>
      </div>
     <div className="text-center share-tech">
      <h4 className="text-xl ">Sara Rauf</h4>
      <h3 className="text-xl text-amber-200">Web Developer</h3>
      <div className="m-4 flex gap-3 text-2xl align-middle items-center justify-center text-amber-300">
        <a href="mailto:sara.abrauf@gmail.com"><img src="/assets/envelope.svg" width="30px" height="30px"/></a>
        <a href="https://github.com/srauf456"><img src="/assets/github.svg" width="30px" height="30px"/></a>
        <a href="https://www.linkedin.com/in/sara-rauf-9120b580/"><img src="/assets/linkedin.svg" width="30px" height="30px"/></a>
        <a href="https://www.upwork.com/freelancers/~01c25a514d4c079a3c"><img src="/assets/upwork-svgrepo-com.svg" width="30px" height="30px"/></a>
    </div>
    </div>
      </div>
       </div>  
       
          <div className="border-2 border-slate-600 rounded-md lg:ml-3 overflow-auto p-6 bg-slate-700 text-white w-[550px] lg:w-[600px] xl:w-[800px] max-lg:w-full h-[80vh] max-lg:h-auto flex flex-col">
   <h2 className="text-2xl text-left underline underline-offset-8 decoration-amber-300 share tech p-2">RESUME</h2>

      <p className="open-sans-font font-extrabold text-xl"> Professional Experience</p>
      <p className="open-sans-font"> Dec 2021 – 2024 | Web Developer & Technical Support at Katherine Walk Inc <br/>
        Provided technical support, design and development of website with Shopify and increased online presence by constantly updating themes.</p> <br/>
      

<p className="open-sans-font">  Sep 2021 – Dec 2023 |	   Upwork Freelancer Web Developer/Web Design for beamset.org <br/>
  Helped with landing page design and content on Wordpress.
</p><br/>
<p className="open-sans-font">Mar 2021 – Sep 2021 |    Web Design Volunteer at Educate.Radiate.Elevate NGO <br/>

Managed Wordpress website with Elementor & SEO Optimization tools like Mailchimp & Zapier. Helped with increased donations by updating Donate page.
</p> <br/>
<p className="open-sans-font"> Mar 2020 | Intern Web Developer and Designer at Katherine Walk Inc <br/>

  Helped launch a Woocommerce based startup. Integrated with Mailchimp, Google Analytics & managed SEO. Effectively communicated daily tasks with team members resulting in increased productivity
</p> <br/>
<p className="open-sans-font">Dec 2016 – Mar 2017 |		
  Helped manage and design American Medical Products e-commerce website based in Houston, TX <br/>
 </p> <br/>
 <p className="open-sans-font text-xl font-extrabold">Relevant Skills</p>

 <div className="marquee-content flex animate-marquee">
     <img src="../assets/icons8-html5.svg" width="100px" height="100px"/>
     <img src="../assets/icons8-css3.svg" width="100px" height="100px"/>
     <img src="../assets/icons8-javascript.svg" width="100px" height="100px"/>
     <img src="../assets/icons8-bootstrap.svg" width="100px" height="100px"/>
     <img src="../assets/icons8-tailwind-css.svg" width="100px" height="100px"/>
     <img src="../assets/icons8-react-native.svg" width="100px" height="100px"/>
     <img src="../assets/icons8-node-js.svg" width="100px" height="100px"/>
     <img src="../assets/icons8-postgres.svg" width="100px" height="100px"/>
       <img src="../assets/icons8-my-sql.svg" width="100px" height="100px"/>
       <img src="../assets/icons8-sql-server.svg" width="100px" height="100px"/>
       </div>
        <p className="open-sans-font font-extrabold text-xl"> Education</p>
       <p className="open-sans-font"> National University of Computer Emerging Sciences (FAST Karachi) | Bachelor of Science in Computer Science 2010-2014 | CGPA: 3.1
       </p>
<p className="open-sans-font">City School PAF Chapter - Karachi | A Levels (2010) </p>
 <p className="open-sans-font"> Pakistan International School – Jeddah, Saudi Arabia | O Levels (2008)
  </p>
           
             
   
            
          </div> 
      </div>  
    </main>
    <div className="flex justify-end align-bottom  text-white">
    <footer>© {currentYear} All Rights Reserved.</footer>
  </div>  
   

 </div>
  );
}

   
