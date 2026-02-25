import { useEffect } from "react";

export const useFade = () => {
  useEffect(() => {

    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    },{
      threshold:0.2
    });

    items.forEach(el=>observer.observe(el));

  },[]);
};