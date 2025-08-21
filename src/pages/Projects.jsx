import {Link} from 'react-router-dom';
export default function Projects() {
  return (
    
<div className="bg-slate-800 min-h-screen flex flex-col">
  
 <main className="flex-grow">

    
     <div className="animate-[pulse_1s] w-full flex flex-col lg:flex-row justify-center items-center gap-6 p-6">
     <div className="p-6 border-2 border-amber-200 rounded-md bg-slate-700 text-white w-[500px] lg:w-[350px] xl:w-[400px] max-lg:w-full h-[80vh] max-lg:h-auto flex flex-col items-center justify-center">
      <div className="items-center w-auto justify-center gap-6">  
      <img className="w-40 h-40 rounded-md justify-center mx-auto" src="./src/assets/images/Screenshot 2024-09-16 133125.png"/>
       
          
          <div className="share-tech flex gap-8 mt-6 items-center justify-center pb-6 xl:text-xl">
            <Link className="hover:text-slate-900" to="/">ABOUT</Link>
            <Link className="hover:text-slate-900" to="/resume">RESUME</Link>
            <Link className="active-link" to="/projects">PROJECTS</Link>
      </div>
     <div className="text-center share-tech">
      <h4 className="text-xl ">Sara Rauf</h4>
      <h3 className="text-xl text-amber-200">Web Developer</h3>
      <div className="m-4 flex gap-3 text-2xl align-middle items-center justify-center text-amber-300">
        <a href="mailto:sara.abrauf@gmail.com"><img src="./src/assets/envelope.svg" width="30px" height="30px"/></a>
        <a href="https://github.com/srauf456"><img src="./src/assets/github.svg" width="30px" height="30px"/></a>
        <a href="https://www.linkedin.com/in/sara-rauf-9120b580/"><img src="./src/assets/linkedin.svg" width="30px" height="30px"/></a>
        <a href="https://www.upwork.com/freelancers/~01c25a514d4c079a3c"><img src="./src/assets/upwork-svgrepo-com.svg" width="30px" height="30px"/></a>
    </div>
    </div>
      </div>
       </div>  
       
          <div class="border-2 border-slate-600 rounded-md lg:ml-3 overflow-auto p-6 bg-slate-700 text-white w-[550px] lg:w-[600px] xl:w-[800px] max-lg:w-full h-[80vh] max-lg:h-auto flex flex-col">
   <h2 class="text-2xl text-left underline underline-offset-8 decoration-amber-300 share tech p-2">PROJECTS</h2>
   <div class="sm:flex gap-3 p-3 md:flex-1/2">
      <div class="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="./src/assets/images/DashboardLanding.png"/>
      <p class="text-zinc-950">Dashboard | React, Charts.js | A responsive dashboard built with React and Tailwind CSS. Includes Context API, Firebase Auth.</p>
    </div>
        <div class="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="./src/assets/images/RecipeLanding.png"/>
          <p class="text-zinc-950">Tasty Treats | React | A recipe app built with React that allows users to search for their favorite recipes.</p>
        </div> 
        </div>  
   <div class="sm:flex gap-3 p-3 md:flex-1/2">
      <div class="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="./src/assets/images/KeeperAppToDo.png"/>
      <p class="text-zinc-950">Keeper App | React | A simple to-do app built with React that works like Google Keeper.</p>
    </div>
        <div class="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="./src/assets/images/WeatherAPI2.png"/>
          <p class="text-zinc-950">Weather API | JS | A simple web app that fetches weather data from an API.</p>
        </div> 
        </div>
   <div class="sm:flex gap-3 p-3 md:flex-1/2">
      <div class="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="./src/assets/images/ToDo.png"/>
      <p class="text-zinc-950">ToDo| React | A simple to-do React front-end app that allows users to add, edit, and delete tasks.</p>
    </div>
        <div class="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="./src/assets/images/BlogAxios.png"/>
          <p class="text-zinc-950">Blog | JS | A simple blog app that fetches posts from an API with Axios amd CRUD implementations.</p>
        </div>
          </div>
    <div class="sm:flex gap-3 p-3 md:flex-1/2">
      <div class="m-2 rounded-md border-2 bg-amber-50 ">
        <img src="./src/assets/images/GeoCodeAPI.png"/>
      <p class="text-zinc-950">GeoCode API | JS | A simple web app that fetches geographical data from an API.</p>
    </div>
        <div class="m-2 rounded-md border-2 bg-amber-50 ">
          <img src="./src/assets/images/JokeGenerator.png"/>
          <p class="text-zinc-950">Joke Generator | JS | A simple joke generator app that fetches jokes from an API.</p>
        </div>
          </div>
        
          <div class="sm:flex gap-3 p-3 md:flex-1/2">
            <div class="m-2 rounded-md border-2 bg-amber-50 ">
              <img src="./src/assets/images/MemoryGame.png"/>
            <p class="text-zinc-950">Memory Game | JS | Built with JavaScript and animations.</p>
          </div>
              <div class="m-2 rounded-md border-2 bg-amber-50 ">
                <img src="./src/assets/images/JS_Calc.png"/>
              <p class="text-zinc-950">Web Calculator | JS | A simple calculator built with JavaScript.</p>

              </div>
                </div> 
                  <div class="sm:flex gap-3 p-3 md:flex-1/2">
                  <div class="m-2 rounded-md border-2 bg-amber-50 ">
                    <img src="./src/assets/images/TinDog1.png"/>
                  <p class="text-zinc-950">TinDog | Bootstrap | A responsive landing page for a dog walking service.</p>
                </div>
                    <div class="m-2 rounded-md border-2 bg-amber-50 ">
                      <img src="./src/assets/images/Screenshot 2025-03-18 162413_1.png"/>
                      <p class="text-zinc-950">Web Design Agency landing page (compatible on all devices). Made with CSS</p>
                    </div>
                      </div> 
                 <h4 class="text-lg font-semibold"> CMS Experience</h4>

                <div class="sm:flex gap-3 p-3 md:flex-1/2">
                  <div class="m-2 rounded-md border-2 bg-amber-50 ">
                    <img src="./src/assets/images/ERE Website.jpg"/>
                  <p class="text-zinc-950">ERE | Wordpress | Helped develop Educate.Radiate.Elevate website. Included Zapier automation.</p>
                </div>
                    <div class="m-2 rounded-md border-2 bg-amber-50 ">
                      <img src="./src/assets/images/Screenshot 2024-09-13 143509.png"/>
                      <p class="text-zinc-950">Katherine Walk | Shopify | A live, responsive, and user-friendly e-commerce store with regular front-end maintainance and fixes.
</p>
                    </div>
                      </div> 

       
       <h5>In progress</h5>
        <p>Web Development</p>
        <div className="skills">
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
   
            
          </div> 
      </div> 
     </main>
      <div class="flex justify-end align-bottom  text-white">
        <footer>© <span id="myDate"></span>. All Rights Reserved.</footer>
      </div>  
        <script>
          document.getElementById("myDate").textContent = new Date().getFullYear();
       </script>
       


    </div>
  );
}