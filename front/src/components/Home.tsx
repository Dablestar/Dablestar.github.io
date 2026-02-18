function Home(){
   return(
      <div className="w-full">
         <div className="welcomeText">
            <span className="welcomeText w-full text-4xl align-center font-regular">Welcome!</span>
         </div>
         <p className="description text-xl font-thin !mt-5">This is my portfolio a.k.a personal webpage. <br/> 
            Press the buttons on the left bar to navigate</p>
         <p className="techStackDescription text-xl font-thin">Made with: React Typescript, Tailwind CSS, Express.js</p>

         
         <hr className="!mt-5"/>
         <h2 className="text-2xl font-regular">Update Log</h2> 
         <div className="updateLog grid grid-cols-3 gap-4 place-items-center w-full">
            <div className="versions">
               <ul>
                  <li className="versionNumber text-2xl font-regular">v1.0.0</li>
                  <li className="versionNumber text-2xl font-regular">v1.0.1</li>
               </ul>
            </div>
            <div className="updateContents">
               <ul className="updateList text-2xl font-thin">
                  <li>Initial Release</li>
                  <li>Added Scroll Restoration</li>
                  <li>Changed Profile Pic & Updated Design</li>
               </ul>
            </div>
            <div className="updateDates">
               <ul className="updateDates text-2xl font-thin">
                  <li>2025-09-15</li>
                  <li>2025-09-16</li>
                  <li>2026-02-18</li>
               </ul>
            </div>
         </div>
      </div>
   ) 
}
export default Home