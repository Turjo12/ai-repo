const loadAi = async(aibt, dataLimite) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;

    const res = await fetch(url);
    const data = await res.json();
    DisplayAi(data.data.tools)
    console.log(data.data.tools)
}
// const loadAis = async(aibt) => {
//     const url = `https://openapi.programming-hero.com/api/ai/tools`;
//     const urls = `https://openapi.programming-hero.com/api/ai/tool/01`
//     const res = await fetch(url);
//     const data = await res.json();
//     DisplayAi(data.data.tools)
//     console.log(data.data.tools)
// }


const  DisplayAi = (ais ) => {
    const displayul = document.getElementById('cardcontainer')



 







    ais.forEach(ais => {
        const aidiv = document.createElement('div');
        aidiv.classList.add('col')
        aidiv.innerHTML = `
        <div class="card">
        <img src="${ais.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class='pra'>${ais.features}</p> 
        <hr>
        <h5 class="card-title">${ais.name}</h5>
 <div class='d-flex'>
 <p class='pra'><i class="fa-regular fa-calendar-days"></i></i> ${ais.published_in
 }</p> 

 <button type="button" class="btn bds" data-bs-toggle="modal" data-bs-target="#exampleModal">
 <i class="fa-solid fa-arrow-right"></i>
</button>
 </div>

        </div>
      </div>
        `
    displayul.appendChild(aidiv)
    });


} 




function name(){
  const names = document.getElementById('name')
  names.innerText = `${ais.name}`
}

        
loadAi();



