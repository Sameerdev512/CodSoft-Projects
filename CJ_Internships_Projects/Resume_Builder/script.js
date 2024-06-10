function addskill(){
    let skill = document.getElementById("Skills");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.classList.add("skill");
    newNode.setAttribute("placeholder","Enter skill name")

    let skillbtn = document.getElementById("addSkillBtn");
    skill.insertBefore(newNode,skillbtn)
}

function addEduDetails(){
    let EduDetails = document.getElementById("Education");

    let newNode1= document.createElement("input");
    newNode1.classList.add("form-control");
    newNode1.classList.add("my-2");
    newNode1.classList.add("edu_details");
    newNode1.setAttribute("placeholder","Institute-name")

    let newNode2= document.createElement("input");
    newNode2.classList.add("form-control");
    newNode2.classList.add("my-2");
    newNode2.classList.add("edu_details");
    newNode2.setAttribute("placeholder","University-name ,Degree-name ,Percentage ,Year")

    let EduDetailsbtn = document.getElementById("addEduDetailsBtn");
    EduDetails.insertBefore(newNode1,EduDetailsbtn)
    EduDetails.insertBefore(newNode2,EduDetailsbtn)
}

function addExpDetails(){
    let ExpDetails = document.getElementById("Experience");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.classList.add("cmp_exp");
    newNode.setAttribute("placeholder","Company Name")

    let newNode2= document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("my-2");
    newNode2.classList.add("cmp_exp");
    newNode2.setAttribute("placeholder","Experience Details")
    newNode.setAttribute("id","Exp_Field")

    let ExpDetailsbtn = document.getElementById("addExpDetailsBtn");
    ExpDetails.insertBefore(newNode,ExpDetailsbtn)
    ExpDetails.insertBefore(newNode2,ExpDetailsbtn)
}

function addLang(){
    let lang = document.getElementById("Languages");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.classList.add("Lang_Field");
    newNode.setAttribute("placeholder","Enter language name")

    let langbtn = document.getElementById("addLangBtn");
    lang.insertBefore(newNode,langbtn)
}

function addcrtfDetails(){
    let crtfDetails = document.getElementById("Certification");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.classList.add("crtf_Details");
    newNode.setAttribute("placeholder","Certification Name")

    let newNode2= document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("my-2");
    newNode2.classList.add("crtf_Details");
    newNode2.setAttribute("placeholder","Enter Certifiaction Details")

    let crtfDetailsbtn = document.getElementById("addcrtfDetailsBtn");
    crtfDetails.insertBefore(newNode,crtfDetailsbtn)
    crtfDetails.insertBefore(newNode2,crtfDetailsbtn)
}

function addHobby(){
    let Hobby = document.getElementById("Hobbies");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.classList.add("hobby");
    newNode.setAttribute("placeholder","Enter Your Hobby")

    let Hobbybtn = document.getElementById("addHobbyBtn");
    Hobby.insertBefore(newNode,Hobbybtn)
}

function addref(){
    let refrence = document.getElementById("refrence");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.classList.add("ref");
    newNode.classList.add("ref_details");
    newNode.setAttribute("placeholder","Enter Refrence")

    let refbtn = document.getElementById("addrefBtn");
    refrence.insertBefore(newNode,refbtn)
}


// Resume Generator Functions

function generateResume()
{
    //Upload Image
    let file = document.getElementById('img_Field').files[0];
    console.log(file);

    let reader = new FileReader(file);
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend =()=>
    {
        let imgsrc = document.getElementById('myimg');
        imgsrc.src = reader.result;
    }
    //setting Name 
    let name = document.getElementById('Name_Field').value;
    let rName = document.getElementById('c_Name');
    rName.innerHTML =  name;

    //setting profile
    let profile = document.getElementById('Profession_Field').value;
    let rprofile = document.getElementById('c_profile');
    rprofile.innerHTML =  profile;    

    //setting Address
    let address = document.getElementById('Address_Field').value;
    let raddress = document.getElementById('c_address');
    raddress.innerHTML = `<i class="fa-solid fa-location-dot fa-lg details" style="color:white"></i>&ensp;&ensp; ${address}`;;

    //setting Contact Number
    let contact = document.getElementById('Contact_Field').value;
    let rcontact = document.getElementById('c_contact');
    rcontact.innerHTML =  `<i class="fa-solid fa-phone fa-lg details" style="color:white"></i>&ensp;&nbsp;+91  ${contact}`;

    //setting Email
    let mail = document.getElementById('Email_Field').value;
    let rmail = document.getElementById('c_mail');
    rmail.innerHTML =  `<i class="fa-solid fa-envelope fa-lg" ></i>&ensp;&ensp;  ${mail}`;

    //setting github link
    let github = document.getElementById('Github_Field').value;
    let rgithub = document.getElementById('c_github');
    rgithub.innerHTML =  `<i class="fa-brands fa-github fa-lg" ></i>&ensp;&ensp; ${github}`;

    // setting linkedin
    let linkedin = document.getElementById('Linkedin_Field').value;
    let rlinkedin = document.getElementById('c_linkedin');
    rlinkedin.innerHTML =  `<i class="fa-brands fa-linkedin fa-lg" ></i>&ensp;&ensp;&nbsp;  ${linkedin}`;

    // let facebook = document.getElementById('Facebook_Field').value;
    // let rfacebook = document.getElementById('c_facebook');
    // rfacebook.innerHTML =  `<i class="fa-brands fa-facebook-f" ></i>&ensp;  ${facebook}`;

    //setting skills
    let skill = document.getElementsByClassName('skill');
    let str4 = " ";
    for(let e of skill)
    {
        str4 = str4 + `<li>${e.value}</li>`
    }
    let rskill = document.getElementById('c_skill');
    rskill.innerHTML = str4;

    //setting hobbies
    let hobby = document.getElementsByClassName('hobby');
    let str5 = " ";
    for(let e of hobby)
    {
        str5 = str5 + `<li>${e.value}</li>`
    }
    let rhobby = document.getElementById('c_hobbies');
    rhobby.innerHTML = str5;

    //setting languages
    let lang = document.getElementsByClassName('Lang_Field');
    let str7 = " ";
    for(let e of lang)
    {
        str7 = str7 + `<li>${e.value}</li>`
    }
    let rlang = document.getElementById('c_lang');
    rlang.innerHTML = str7;

    //setting Objective
    let obj = document.getElementById('Objective').value;
    let r_obj = document.getElementById('c_objective');
    r_obj.innerText = obj;

    //setting Company Experience
    let count = 0;
    let cexp = document.getElementsByClassName('cmp_exp');
    let str1 = " ";
    for(let e of cexp)
    {
        if(count % 2 == 0)
        {
            str1 = str1 + `<br><li><b>${e.value}</b></li>`.toUpperCase(); 
            count++;
        }
        else
        {
            str1 = str1 + `<li>${e.value}</li>`; 
            count++;
        }
    }
    let rname = document.getElementById("c_experience_details");
    rname.innerHTML = str1;

    //setting Education Field
    let count3 = 0;
    let edu = document.getElementsByClassName('edu_details');
    let str6 = " ";
    for(let e of edu)
    {
        if(count3 % 2 == 0)
        {
            str6 = str6 + `<br><li><b>${e.value}</b></li>`.toUpperCase(); 
            count3++;
        }
        else
        {
            str6 = str6 + `<li>${e.value}</li>`; 
            count3++;
        }
    }
    let r_edu = document.getElementById("c_edu");
    r_edu.innerHTML = str6;

    //setting Certification field
    let count1 = 0;
    let crtf = document.getElementsByClassName('crtf_Details');
    let str2 = " ";
    for(let e of crtf)
    {
        if(count1 % 2 == 0)
        {
            str2 = str2 + `<br><li><b>${e.value}</b></li>`.toUpperCase(); 
            count1++;
        }
        else
        {
            str2 = str2 + `<li>${e.value}</li>`; 
            count1++;
        }
    }
    let r_crtf = document.getElementById("c_crtf");
    r_crtf.innerHTML = str2;

    //setting Refrence field
    let str3 = " ";
    let cref = document.getElementsByClassName('ref_details');
    for(let e of cref)
    {
            str3 = str3 + `<br><li>${e.value}</li>`; 
    }
    let r_ref = document.getElementById("c_ref");
    r_ref.innerHTML = str3;

    document.getElementById('cv-form').style.display = 'block';
    document.getElementById('cv-template').style.display = 'none';

}