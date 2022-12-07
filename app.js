class VaseyPotion {
    constructor(link){
        this.link = link
}
}

var CollectionVP = document.getElementById('VPCollection');
const vaseyPotions = [
   new VaseyPotion("https://i.seadn.io/gae/6vXC3LUPUyfsmpDWr17sTweafb_AHdtTXwRgwRhlsYUk1PktVztWlxy9G0TR0DoGn1JrkLDmcCd3Vag5PZ4lS6MHmGZjr7XFHPmh?auto=format&w=1920"),
   new VaseyPotion("https://i.seadn.io/gae/nPgnMu7OIQR9h1_-CihLagLge-Dvb2g2B65EK-PZH_xsbHmxaTDWpD-hb2gJIoowO7otoVVR8GDR_bAVanQVTSlabeW5ULDGtrINYw?auto=format&w=1920"),
   new VaseyPotion("https://i.seadn.io/gae/jOvSm3qlOGeHUIfJC-i8BzX2SZQiAYOVMjEofGrLVxI7_4qJqFZ5PMXOGoJfGOTI2RPp12PI0UNF_bU1kyKNs4bu1SYeKQ1ko--r?auto=format&w=1920"),
   new VaseyPotion("https://i.seadn.io/gae/F0CFGzZk-r_x2ONg5T-16uEuqCc7_uk7WpsdelDh3XNVokLWvIpzwDLWSvYT2qZ7ij6j7h5gVRRPuW3OIrpeH5Yf4pBRktBg9AIWCxw?auto=format&w=1920"),
   new VaseyPotion("https://i.seadn.io/gae/HUhNZWXPqIjMLo_GLa8rChO-sECS3RA_qpCtM7kgC3C9E9T-REuVpHEQL9GKOrHQmwJpByuJ7myQQcQiL-fHwzcqWC9cJyHNc3Xy0A?auto=format&w=1920")
]
for(let i=0; i<vaseyPotions.length; i++){
    let myElm = document.createElement("img");
    myElm.src=vaseyPotions[i].link;
    myElm.className = "VaseyPotion hidden";
    myElm.alt = "image of Vasey Potion NFT #" + (i+1);
    CollectionVP.appendChild(myElm);
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
})

const hidEls = document.querySelectorAll('.hidden');
hidEls.forEach((el)=>observer.observe(el));

// applying delay annimation to VaseyPotion objects
 const VPelements = document.getElementsByClassName('VaseyPotion');
 for (let i=1, delay=200; i<VPelements.length; i++, delay+=200){
    VPelements[i].style.transitionDelay = delay+"ms";
 }

