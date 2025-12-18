const calculateBtn=document.getElementById('calculate-btn');
const total=document.getElementById('total');
const lived=document.getElementById('lived');
const remaining=document.getElementById('remaining');

calculateBtn.addEventListener('click',()=>{
    const month=document.getElementById('month').value;
    const year=document.getElementById('year').value;
    const day=document.getElementById('day').value;
    const lifeExpectancy=document.getElementById('lifeExpantancy').value;
    if (!month || !day || !year) {
        alert("Please fill in your full birth date!");
        return;
    }
    if (month<=0 || month>12 || day<=0 || day>31 || year<=0 || lifeExpectancy<=0) {
        alert("Please enter a valid birth date and life expectancy!");
        return;}
        const now=new Date();
        const birthDate=new Date(year,month-1,day);
    
    if (birthDate>now) {
        alert("Birth date cannot be in the future!");
        return;
    }
    else {
        const weeksLived=Math.floor((now-birthDate)/(1000*60*60*24*7));
        const totalWeeks=lifeExpectancy*52;
        const weeksLeft=totalWeeks-weeksLived;
        
        total.value=totalWeeks;
        lived.value=weeksLived;
        remaining.value=weeksLeft; 

        drawLifeVisualization(weeksLived, totalWeeks);
    }   
})
const drawLifeVisualization=(lived, total)=>{
    const canvas=document.getElementById('LifeCanvas');
    const ctx=canvas.getContext("2d")
  
    const boxSize=7; 
    const gap=5;  
    const cols=52; 
    const rows=Math.ceil(total/cols);
    canvas.width=cols*(boxSize+gap)+10;
    canvas.height=rows*(boxSize+gap)+10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i=0; i<total; i++) {
        const x=(i%cols)*(boxSize+gap)+10;
        const y=Math.floor(i/cols)*(boxSize+gap)+10;
        
        if (i<lived) {
            ctx.fillStyle="#8ae18dff"; 
        } else {
            ctx.fillStyle="#eeebebff"; 
        }
        ctx.fillRect(x, y, boxSize, boxSize);
    }
}
