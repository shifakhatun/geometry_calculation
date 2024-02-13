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

    const rectangleWidthInput=document.getElementById('rectangle-width');
    const rectangleWidthText=rectangleWidthInput.value;
    const width=parseFloat(rectangleWidthText);
    console.log(width);

    const rectangleLengthInput=document.getElementById('rectangle-length');
    const rectanglLengthText=rectangleLengthInput.value;
    const length=parseFloat(rectanglLengthText);
    console.log(length);

    //calculate Rectangle Area
    const rectangleArea=width*length;

    console.log('The area of Rectangle', rectangleArea)

    //display rectangle area
    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=rectangleArea;

}