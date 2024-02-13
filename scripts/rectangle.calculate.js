function calculateTriangleArea(){
    //console.log('insidde function');
    //get triangle base value
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText)
    console.log( base);
    //
    const triangleHeightInput=document.getElementById('triangle-height')
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText)
    console.log( height);
     
    //Calculate triangle area
    const area=0.5*base*height;
    console.log('the Area od Triangle', area)

    //display triangle area
    const triangleAreaSpan=document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}


function calculateRectangleArea(){

    const rectangleWidthInput=
}