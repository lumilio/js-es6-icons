const theArrey = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];




let iconcard = '';
let color = '';

function cardPrinter() {
    
    const selector = document.getElementById('incon-selector');
    theArrey.forEach((item) => {

        if(selector.value == 'all'|| selector.value == item.type){


            
            if(item.type == 'animal'){
                color = 'blue';
            }
            else if(item.type == 'user'){
                color = 'orange';   
            }
            else if(item.type == 'vegetable'){
                color = 'purple';   
            }




            iconcard +=
            `
            <div class="box">
                <i class="${item.family} ${item.prefix}${item.name}" style="color:${color}"></i>
                <h6>${item.name.toUpperCase()}</h6>
            </div> 
            `;
            document.getElementById('icons-container').innerHTML = iconcard;





        }   
    }) 
}

cardPrinter();








/* for (let i = 0; i < theArrey.length; i++) {

    if(theArrey[i].type == 'animal'){
        color = 'blue';
    }
    else if(theArrey[i].type == 'user'){
        color = 'orange';   
    }
    else if(theArrey[i].type == 'vegetable'){
        color = 'purple';   
    }

    iconcard +=
    `
    <div class="box">
        <i class="${theArrey[i].family} ${theArrey[i].prefix}${theArrey[i].name}" style="color:${color}"></i>
        <h6>${theArrey[i].name.toUpperCase()}</h6>
    </div> 
    `;
    document.getElementById('icons-container').innerHTML = iconcard;
} */