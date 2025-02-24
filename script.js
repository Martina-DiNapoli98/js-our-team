let cardsEl = document.querySelector(".cards .row")




const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];



function generateMarkup(ourMembers){
  let { img, name, role , email} = ourMembers
  console.log(ourMembers);
  const markup = `
   
        
            <div class="col-4 bg-black d-flex">
                <img src="${img}" alt="" name="img" width="150">
                <div class="description p-4">
                    <h2 class="text-white">
                        ${name}
                    </h2>
                    <div class="text-white">
                        ${role}
                    </div>
                    <div class="text-primary">
                        ${email}
                    </div>
                </div>
            </div>`
    console.log(markup);
    return markup;
  
}


  
    for(let i = 0; i < teamMembers.length; i++){
      const thisMember = teamMembers[i];
      console.log(thisMember);
      const markup = generateMarkup(thisMember)
      cardsEl.innerHTML += markup
    }
  
