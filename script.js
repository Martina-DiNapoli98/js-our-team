let cardsEl = document.querySelector(".cards .row")




const teamMembers = [
  {
    name: "MARCO BIANCHI",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "LAURA ROSSI",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "GIORGIO VERDI",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "MARTA IPSUM",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "ROBERTO LOREM",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "DANIELA AMET",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];



function generateMarkup(ourMembers){
  let { img, name, role , email} = ourMembers
  console.log(ourMembers);
  const markup = `
             <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="bg-black d-flex flex-row">
                    <img src="${img}" alt="" name="img" class="card-img-top">
                    <div class="description p-4">
                        <strong class="text-white">
                            ${name}
                        </strong>
                        <div class="text-white">
                            ${role}
                        </div>
                        <div class="text-primary">
                            ${email}
                        </div>
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
  

    const myForm = document.querySelector('form');

    myForm.addEventListener("submit", (e) => {
      e.preventDefault();
    
      const name = document.querySelector('input[name="name"]').value;
      const role = document.querySelector('input[name="role"]').value;
      const img = document.querySelector('input[name="img"]').value;
      const email = document.querySelector('input[name="email"]').value;
    
      const member = {
        name: name,
        role: role, 
        img: img,
        email: email
      };
    
      const markup = generateMarkup(member);
      cardsEl.innerHTML += markup;
    
      
      document.querySelector('input[name="name"]').value = "";
      document.querySelector('input[name="role"]').value = "";
      document.querySelector('input[name="img"]').value = "";
      document.querySelector('input[name="email"]').value = "";

    });
  