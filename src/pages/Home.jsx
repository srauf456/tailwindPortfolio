import {Link} from 'react-router-dom';
// import profile from '/assets/images/Screenshot 2024-09-16 133125.png';

export default function Home() {
    const currentYear = new Date().getFullYear();
  return (
    
    <div className="bg-slate-800 min-h-screen flex flex-col">
        <main className="flex-grow">
             <div className="animate-[pulse_1s] w-full flex flex-col lg:flex-row justify-center items-center gap-6 p-6">
     <div className="p-6 border-2 border-amber-200 rounded-md bg-slate-700 text-white w-[500px] lg:w-[350px] xl:w-[400px] max-lg:w-full h-[80vh] max-lg:h-auto flex flex-col items-center justify-center">
      <div className="items-center w-auto justify-center gap-6">  
        {/* <img className="w-40 h-40 rounded-md justify-center mx-auto" src={profile} /> */}
       
  <div className="share-tech flex gap-8 mt-6 items-center justify-center pb-6 xl:text-xl">
            {/* <a className="active-link" href="./">ABOUT</a><a className="hover:text-slate-900" href="./resume">RESUME</a><a className="hover:text-slate-900" href="./projects">PROJECTS</a> */}
         <Link className="active-link" to="/">ABOUT</Link>
      <Link className="hover:text-slate-900" to="/resume">RESUME</Link>
      <Link className="hover:text-slate-900" to="/projects">PROJECTS</Link>
      </div> 
      <div className="text-center share-tech">
      <h4 className="text-xl ">Sara Rauf</h4>
      <h3 className="text-xl text-amber-200">Frontend Developer</h3>
      <div className="m-4 flex gap-3 text-2xl align-middle items-center justify-center text-amber-300">
        <a href="mailto:sara.abrauf@gmail.com"><img src="/assets/envelope.svg" width="30px" height="30px"/></a>
        <a href="https://github.com/srauf456"><img src="/assets/github.svg" width="30px" height="30px"/></a>
        <a href="https://www.linkedin.com/in/sara-rauf-9120b580/"><img src="/assets/linkedin.svg" width="30px" height="30px"/></a>
        <a href="https://www.upwork.com/freelancers/~01c25a514d4c079a3c"><img src="/assets/upwork-svgrepo-com.svg" width="30px" height="30px"/></a>
    </div>
    </div>
      </div>
       </div>  
       
          <div className="font-sans border-2 border-slate-600 rounded-md lg:ml-3 overflow-auto p-6 bg-slate-700 text-white w-[550px] lg:w-[600px] xl:w-[800px] max-lg:w-full h-[80vh] max-lg:h-auto flex flex-col">
   <p className="share-tech text-2xl text-left underline underline-offset-8 decoration-amber-300 p-2">ABOUT ME</p>
   <div className="text-mditems-center text-left open-sans-font">
   <p>
      I’m a Frontend Developer with a Bachelor's degree in Computer Science. I have over 3 years of hands-on experience in building dynamic and responsive
       desktop and mobile user-friendly web applications. I want to contribute my skills in web development using React, JS, Tailwind, TypeScript, Next.js and other modern UI frameworks. 
       <br/><br/>
     
       Recently, I built a production-ready dashboard with authentication, role-based access and data visualization, Chart.js, REST APIs. 
I have also worked with clients on CMS platforms like Shopify and WordPress that included launching e-commerce websites,and optimizing online presence, theme customization with Liquid, and plugin integrations.
       Recently, I completed a Full-Stack Development Bootcamp where I built multiple hands-on projects like
        A To-Do App for task management, A Weather App integrating APIs and A Blog Platform with dynamic content. <br/>
        With some of my backend knowledge of .NET, NodeJS, Express, SQL and a background in CMS systems, I bring a well-rounded understanding of web technologies. 
        <br/>
        creating scalable front-end solutions.  
       </p>

<br/>
<p>With time, my passion and focus have steered towards Front-end Development and the beautiful, seemless user experiences it can create. I’m actively seeking freelance projects and front-end development roles, where I can apply my skills to build impactful, high performance products
   while leveraging my knowledge of e-commerce platforms and modern web technologies. Let's connect!
</p>
      
    </div> 
          </div> 
      </div>
      </main>  
      <div className="flex justify-end align-bottom  text-white">
      <footer>© {currentYear} All Rights Reserved.</footer>
    </div>  
  

      </div>
  );
}