import {Link} from 'react-router-dom';

export default function Projects() {
    const currentYear = new Date().getFullYear();
  return (
    
<div className="bg-slate-800 min-h-screen flex flex-col">
  
 <main className="flex-grow">

    
     <div className="animate-[pulse_1s] w-full flex flex-col lg:flex-row justify-center items-center gap-6 p-6">
     <div className="p-6 border-2 border-amber-200 rounded-md bg-slate-700 text-white w-[500px] lg:w-[350px] xl:w-[400px] max-lg:w-full h-[80vh] max-lg:h-auto flex flex-col items-center justify-center">
      <div className="items-center w-auto justify-center gap-6">  
      {/* <img className="w-40 h-40 rounded-md justify-center mx-auto" src="../assets/images/Screenshot 2024-09-16 133125.png"/> */}
       
          
          <div className="share-tech flex gap-8 mt-6 items-center justify-center pb-6 xl:text-xl">
            <Link className="hover:text-slate-900" to="/">ABOUT</Link>
            <Link className="hover:text-slate-900" to="/resume">RESUME</Link>
            <Link className="active-link" to="/projects">PROJECTS</Link>
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
   <h2 className="text-2xl text-left underline underline-offset-8 decoration-amber-300 share tech p-2">PROJECTS</h2>
   <div className='sm:flex-1 gap-3 md:flex-1 p-3'>
     <div className="m-2 rounded-md border-2 bg-amber-50 ">
     <img src="../assets/images/DashboardLanding.png"/>
      <p className="text-zinc-950">R.A.D - React Admin Dashboard | React, Charts.js, Tailwind | A responsive dashboard that integrates Firebase Auth for Google sign-in, uses Context API for theme and language toggle and implements RBAC to dynamically render UI elements. I also integrated Chart.js to create interactive data visualizations and built a Users table with search, filters, and CRUD operations. <a className='text-amber-300 font-semibold' href="https://rad-8kizq2axp-sara-rs-projects.vercel.app/">View Live Demo</a> </p>
   </div>
   </div>
   <div className="sm:flex gap-3 p-3 md:flex-1/2">
      <div className="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="../assets/images/TastyKitchenDesktop.png"/>
      <p className="text-zinc-950">Tasty Kitchen Landing Page | React, React Router, Tailwind CSS | A responsive restaurant landing page. <a className='text-amber-300 font-semibold' href="https://tasty-kitchen-recipe-app.vercel.app/">View Live Demo</a></p>
    </div>
        <div className="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="../assets/images/Screenshot 2025-09-27 133844.png"/>
          <p class="text-zinc-950">Weather Now App | React, TailwindCSS | A weather app built with React that allows to search for weather information by location. Users can choose from additional weather metrics and can browse a weekly weather forecast.</p>
        </div> 
        </div>  
   <div className="sm:flex gap-3 p-3 md:flex-1/2">
      <div className="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="../assets/images/tastykitchenpage1.png"/>
      <p className="text-zinc-950">Tasty Kitchen Restaurant | React, React Router, Tailwind CSS | A responsive restaurant app that allows recipe search. Features Framer Motion for each recipe card. <a className='text-amber-300 font-semibold' href="https://tasty-kitchen-recipe-app.vercel.app/">View Live Demo</a></p>
    </div>
        <div className="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="../assets/images/RecipeLanding.png"/>
          <p class="text-zinc-950">Tasty Treats App | React, TailwindCSS | A recipe app built with React that allows users to search for their favorite recipes.</p>
        </div> 
        </div>  
   <div className="sm:flex gap-3 p-3 md:flex-1/2">
      <div className="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="../assets/images/KeeperAppToDo.png"/>
      <p className="text-zinc-950">Keeper App | React | A simple to-do app built with React that works like Google Keeper.</p>
    </div>
        <div className="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="../assets/images/WeatherAPI2.png"/>
          <p className="text-zinc-950">Weather API | JS | A simple web app that fetches weather data from an API.</p>
        </div> 
        </div>
   <div className="sm:flex gap-3 p-3 md:flex-1/2">
      <div className="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="../assets/images/ToDo.png"/>
      <p className="text-zinc-950">ToDo| React | A simple to-do React front-end app that allows users to add, edit, and delete tasks.</p>
    </div>
        <div className="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="../assets/images/BlogAxios.png"/>
          <p className="text-zinc-950">Blog | JS | A simple blog app that fetches posts from an API with Axios amd CRUD implementations.</p>
        </div>
          </div>
    <div className="sm:flex gap-3 p-3 md:flex-1/2">
      <div className="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="../assets/images/GeoCodeAPI.png"/>
      <p class="text-zinc-950">GeoCode API | JS | A simple web app that fetches geographical data from an API.</p>
    </div>
        <div className="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="../assets/images/JokeGenerator.png"/>
          <p className="text-zinc-950">Joke Generator | JS | A simple joke generator app that fetches jokes from an API.</p>
        </div>
          </div>
        
          <div className="sm:flex gap-3 p-3 md:flex-1/2">
            <div className="m-2 rounded-md border-2 bg-amber-50 ">
              <img src="../assets/images/MemoryGame.png"/>
            <p className="text-zinc-950">Memory Game | JS | Built with JavaScript and animations.</p>
          </div>
              <div className="m-2 rounded-md border-2 bg-amber-50 ">
                <img src="../assets/images/JS_Calc.png"/>
              <p className="text-zinc-950">Web Calculator | JS | A simple calculator built with JavaScript.</p>

              </div>
                </div> 
                  <div className="sm:flex gap-3 p-3 md:flex-1/2">
                  <div className="m-2 rounded-md border-2 bg-amber-50 ">
                    <img src="../assets/images/TinDog1.png"/>
                  <p className="text-zinc-950">TinDog | Bootstrap | A responsive landing page for a dog walking service.</p>
                </div>
                    <div className="m-2 rounded-md border-2 bg-amber-50 ">
                      <img src="../assets/images/Screenshot 2025-03-18 162413_1.png"/>
                      <p className="text-zinc-950">Web Design Agency landing page (compatible on all devices). Made with CSS</p>
                    </div>
                      </div> 
                 <h4 class="text-lg font-semibold"> CMS Experience</h4>

                <div className="sm:flex gap-3 p-3 md:flex-1/2">
                  <div className="m-2 rounded-md border-2 bg-amber-50 ">
                    <img src="../assets/images/ERE Website.jpg"/>
                  <p className="text-zinc-950">ERE | Wordpress | Helped develop Educate.Radiate.Elevate website. Included Zapier automation.</p>
                </div>
                    <div className="m-2 rounded-md border-2 bg-amber-50 ">
                      <img src="./assets/images/Screenshot 2024-09-13 143509.png"/>
                      <p class="text-zinc-950">Katherine Walk | Shopify | A live, responsive, and user-friendly e-commerce store with regular front-end maintainance and fixes.
</p>
                    </div>
                      </div> 

       
       {/* <h5>In progress</h5>
        <p>Web Development</p> */}
        {/* <div className="skills">
            <img src="./assets/icons8-html5.svg" width="100px" height="100px"/>
            <img src="./assets/icons8-css3.svg" width="100px" height="100px"/>
            <img src="./assets/icons8-javascript.svg" width="100px" height="100px"/>
            <img src="./assets/icons8-bootstrap.svg" width="100px" height="100px"/>
            <img src="./assets/icons8-tailwind-css.svg" width="100px" height="100px"/>
            <img src="./assets/icons8-react-native.svg" width="100px" height="100px"/>
            <img src="./assets/icons8-node-js.svg" width="100px" height="100px"/>
           </div>
            <p>Database Management</p>
            <div className="skills">
              <img src="./assets/icons8-postgres.svg" width="100px" height="100px"/>
              <img src="./assets/icons8-my-sql.svg" width="100px" height="100px"/>
              <img src="./assets/icons8-sql-server.svg" width="100px" height="100px"/>
             </div> 
    */}
            
          </div> 
      </div> 
     </main>
      <div class="flex justify-end align-bottom  text-white">
        <footer>© {currentYear} All Rights Reserved.</footer>
      </div>  
       
       


    </div>
  );
}