import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(){
    const { pathname } = useLocation();

  useEffect(() => {
    const container = document.getElementById("page")
    if(container){
        container.scrollTo(0,0)
    }
  }, [pathname]);

  return null;
}
export default ScrollToTop