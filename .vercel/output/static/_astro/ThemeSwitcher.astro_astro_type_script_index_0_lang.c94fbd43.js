const n=["light","dark"],m=document.querySelector("#theme-switcher"),r=()=>typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",c=()=>{const e=r(),t=n.indexOf(e??"");return n[(t+1)%n.length]},o=()=>{const e=r();document.querySelector(`#icon-theme-${e}`)?.classList.add("hidden");const t=c();document.querySelector(`#icon-theme-${t}`)?.classList.remove("hidden")};m?.addEventListener("click",()=>{const e=c();e=="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e),o()});o();