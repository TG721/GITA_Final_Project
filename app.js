class ImageData {
    constructor(displayLink, clickLink="", alt=""){
        this.displayLink = displayLink
        this.clickLink = clickLink
        this.alt = alt

}
}

function leftToRightAppearAnimation(elements){
    for (let i=1, delay=200; i<elements.length; i++, delay+=200){
        elements[i].style.transitionDelay = delay+"ms";
     }
}

var collectionVP = document.getElementById('VPCollection');
const vaseyPotions = [
   new ImageData("https://i.seadn.io/gae/6vXC3LUPUyfsmpDWr17sTweafb_AHdtTXwRgwRhlsYUk1PktVztWlxy9G0TR0DoGn1JrkLDmcCd3Vag5PZ4lS6MHmGZjr7XFHPmh?auto=format&w=1920"),
   new ImageData("https://i.seadn.io/gae/nPgnMu7OIQR9h1_-CihLagLge-Dvb2g2B65EK-PZH_xsbHmxaTDWpD-hb2gJIoowO7otoVVR8GDR_bAVanQVTSlabeW5ULDGtrINYw?auto=format&w=1920"),
   new ImageData("https://i.seadn.io/gae/jOvSm3qlOGeHUIfJC-i8BzX2SZQiAYOVMjEofGrLVxI7_4qJqFZ5PMXOGoJfGOTI2RPp12PI0UNF_bU1kyKNs4bu1SYeKQ1ko--r?auto=format&w=1920"),
   new ImageData("https://i.seadn.io/gae/F0CFGzZk-r_x2ONg5T-16uEuqCc7_uk7WpsdelDh3XNVokLWvIpzwDLWSvYT2qZ7ij6j7h5gVRRPuW3OIrpeH5Yf4pBRktBg9AIWCxw?auto=format&w=1920"),
   new ImageData("https://i.seadn.io/gae/HUhNZWXPqIjMLo_GLa8rChO-sECS3RA_qpCtM7kgC3C9E9T-REuVpHEQL9GKOrHQmwJpByuJ7myQQcQiL-fHwzcqWC9cJyHNc3Xy0A?auto=format&w=1920")
]
for(let i=0; i<vaseyPotions.length; i++){
    let myElm = document.createElement("img");
    myElm.src=vaseyPotions[i].displayLink;
    myElm.className = "VaseyPotion hidden";
    myElm.alt = "image of Vasey Potion NFT #" + (i+1);
    collectionVP.appendChild(myElm);
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


// applying delay annimation to VaseyPotion objects
 const VPelements = document.getElementsByClassName('VaseyPotion');
 leftToRightAppearAnimation(VPelements)

 const chairs3D = [
    new ImageData("https://i.seadn.io/gae/zbO9ZtTHjbDknRNm1mZCYp4yFl3oMjFZ0tSczg9O3iPxc3OKYCPTFGSUWwolKwOLYOlU3GU1UEE2oG32MeJNSta7j0Z-SNOGnQ7ej5U?auto=format&w=1920","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865845013102985217"),
    new ImageData("https://i.seadn.io/gae/0CmDtV2PbagxbFuug1MhFpnhf6XiW6HMDFNGzOgbE8fdE11qrGVbTffyX4KHlVFfcxNQCgLmLY2eX06JdL78eRr1Q3BbAibYiGJbdTc?auto=format&w=1920","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865873600405307393"),
    new ImageData("https://i.seadn.io/gae/VURAWWLIYdGuDnerKaBbsZjIA1wwZE_WP75SbTqCgq30V8da9XfpJlKJowYxnrp3NHXkkELs_HCqm6-QGDSMqK1W02-6Mvd_N8aXkg?auto=format&w=1920","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865875799428562945"),
    new ImageData("https://i.seadn.io/gae/vPrboubLfJTbWbxX64kUZqOac4cngurUtaMSuXfTVuodJblWdo0Swu79ZuDZ7znV8Iya4klYIkY_nDyw16ObtcletWo1pKlmJIh2?auto=format&w=1920","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865877998451818497"),
    new ImageData("https://i.seadn.io/gae/tgXxOWPDnWsuDx7qI9FSk7c_yLLpRfXHUSR84DOid1g5ig7dZ_bZE6CknU1nemggUxIddBryWwb6XxOdw2jKA_i1ISKPf1ZTk8Zb0Q?auto=format&w=1920","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865881296986701825"),
    new ImageData("https://i.seadn.io/gae/J4k7oPAJpdk9NMVdT7M3_CJc4HjzOh4EvEc-rmIQoLdhpoXtPIeSIVCQq0ny9xATmpash7ojWW7lpvUrKyWWW_EiERfjEYcsfTLs?auto=format&w=1920","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865879097963446273"),
    new ImageData("https://i.seadn.io/gae/cPC7kvc9RYTU7XQDhCb5teR2P-4GqWRickAz1hJlE2_W80Fk8cySP5uESk3XA961Kqtax6_VbWtNV4WkUFJjHRE-k8pjCvuvFD5t7A?auto=format&w=1000","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865882396498329601"),
    new ImageData("https://i.seadn.io/gae/KjgEYRlSl2TmTgABVJe61H9jHcxlBo8ikUciYFu5uIECKyl4WVtZ4-JpGl4bg6OKgTSHA0upw93e38JxdrQ4XS0acI8uvaHX2XHT9lM?auto=format&w=1000","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865880197475074049"),
    new ImageData("https://i.seadn.io/gae/2y_Xa7rURp8cN42sP_5Qb05R7DHubt335tqGBvOkUNz3CPlPBA76m_PHwEfisPIY-U94sCPAnIcc_vRNocVL5eyV6LIkAqNJMIamgQ?auto=format&w=1000","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865883496009957377"),
    new ImageData("https://i.seadn.io/gae/chcGgPpWGkbrew6dfXilPGXnTa5v-QwQoYFl1kq0kaWY3DdTcwKCIezKvXFThtiZW8ads-wSqdBxVIZgArtattiwlPP0QyNHboNygQ?auto=format&w=1000","https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46943671559035260127746625138160288194739774191527114369701865876898940190721"),
 ]
 var collectionChair3D = document.getElementById('Chair3DCollection');
 for(let i=0; i<chairs3D.length; i++){
    let aElement = document.createElement("a");
    let myElm = document.createElement("img");
    myElm.src=chairs3D[i].displayLink;
    myElm.className = "chair3D hidden";
    myElm.alt = "image of 3D chair NFT";
    aElement.appendChild(myElm)
    aElement.href = chairs3D[i].clickLink;
    aElement.target = "_blank"
    collectionChair3D.appendChild(aElement);
}

// applying delay annimation to 3D chair objects
const CH3Delements = document.getElementsByClassName('chair3D');
leftToRightAppearAnimation(CH3Delements)
//animation that makes images appear by row
const hidEls = document.querySelectorAll('.hidden');
hidEls.forEach((el)=>observer.observe(el));

 const CarouselButtons =document.querySelectorAll("[data-carousel-button]");
 CarouselButtons.forEach(button => {
    button.addEventListener("click", () => {
    const offset = button.dataset.CarouselButton  === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if(newIndex < 0) {newIndex=slides.children.length -1}
    if(newIndex >= slides.children.length) {newIndex = 0}

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
 })

 //handling pickle jar 
 var editiedJar = document.getElementById("pickleJarEditied");
 var originalJar = document.getElementById("pickleJarOriginal");
 var jarButton = document.getElementById("jarButton");
 var jarImageStatus = "editied"
 jarButton.addEventListener('click', function(e){
        if(jarImageStatus==="editied"){
            originalJar.style.display = "block"
            editiedJar.style.display = "none"
            jarButton.textContent = "See modified"
            jarImageStatus = "original"
        } 
        else {
            originalJar.style.display = "none"
            editiedJar.style.display = "block"
            jarButton.textContent = "See original"
            jarImageStatus = "editied"
        }
})
