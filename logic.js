var number=1;
stick=()=>{
    
    let input=document.getElementById('input'). value;
    let title=document.querySelector('.title').value;
    localStorage.setItem(`noteobj${number}`,JSON.stringify(input));
    let noteelm=JSON.parse(localStorage.getItem(`noteobj${number}`));
    if(input=="") 
    {
        notes=document.getElementById(`#${number}`)
        notes.innerHTML="";  
    }
    else{
        let box=document.getElementById(`##${number}`)
        box.style.display='block';
        notes=document.getElementById(`#${number}`)
        title1=document.getElementById(`head${number}`);
        notes.innerHTML=noteelm;
        if(title=='')
        {
            title1.innerHTML='Note';
        }
        else{
            title1.innerHTML=title;
        }
        input="";
        number++;
    }
}

search=()=>{
    let sear=document.querySelector('.search').value;
    let a=['','','','','','','','','','','','','','',''];
    let b=['','','','','','','','','','','','','','',''];
    let c=['','','','','','','','','','','','','','',''];
    for(let i=1;i<=15;i++)
    {
        a[i]=document.getElementById(`#${i}`).innerHTML;
        b[i]=document.getElementById(`##${i}`);
        c[i]=document.getElementById(`head${i}`).innerHTML;
    }

    if(sear=='')
    {
        for(let k=1;k<=15;k++)
        {
            if(a[k]=='')
            {
                b[k].style.display='none';
            }
            else{
                b[k].style.display='block';
            }
        }
    }
    else{
    for( let j=1;j<=15;j++)
    {
        if(a[j].includes(sear) || c[j].includes(sear))
        {
            b[j].style.display='block';
        }
        else
        {
            b[j].style.display='none';
        }
    }
}
let search=document.querySelector('.search');
search.addEventListener('blur', ()=>{
     for( let k=1;k<=15;k++)
     {
         if(a[k]=='')
         {
            b[k].style.display='none'; 
         }
         else{
         b[k].style.display='block';  
         }
     }
 });
}

del1=()=>{
    let target=document.getElementById('##1');
    target.style.display='none';
}
del2=()=>{
    let target=document.getElementById('##2');
    target.style.display='none';
}
del3=()=>{
    let target=document.getElementById('##3');
    target.style.display='none';
}
del4=()=>{
    let target=document.getElementById('##4');
    target.style.display='none';
}
del5=()=>{
    let target=document.getElementById('##5');
    target.style.display='none';
}
del6=()=>{
    let target=document.getElementById('##6');
    target.style.display='none';
}
del7=()=>{
    let target=document.getElementById('##7');
    target.style.display='none';
}
del8=()=>{
    let target=document.getElementById('##8');
    target.style.display='none';
}
del9=()=>{
    let target=document.getElementById('##9');
    target.style.display='none';
}
del10=()=>{
    let target=document.getElementById('##10');
    target.style.display='none';
}
del11=()=>{
    let target=document.getElementById('##11');
    target.style.display='none';
}
del12=()=>{
    let target=document.getElementById('##12');
    target.style.display='none';
}
del13=()=>{
    let target=document.getElementById('##13');
    target.style.display='none';
}
del14=()=>{
    let target=document.getElementById('##14');
    target.style.display='none';
}
del15=()=>{
    let target=document.getElementById('##15');
    target.style.display='none';
}