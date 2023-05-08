const buttons=document.querySelectorAll('.filter-button');
const images=document.querySelectorAll ('.images img');

buttons.forEach(button=> {
    button.addEventListener('click',() => {
        const filter = button.dataset.filter;
     
        images. forEach(image=> {
            if (image.getAttribute('data-city')===filter || image.getAttribute('data-country')===filter) {
                image.style.display = 'block';
            } else {
                image.style.display='none'
            }  
        });
    });
});

images. forEach(image=> {
    image. addEventListener('click',() => {
        const popupText=image.dataset.popup;
        const popup =document.createElement('div');
        popup.classList.add('popup');
        popup.textContent=popupText;
        document.body.appendChild(popup);
    });
});

image.forEach(image=> {  
 image. addEventListener('mouseover',event => {
    const tooltipText=image.dataset.tooltip;
    const tooltip =document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent= tooltipText;
    tooltip.style.top=event.pageY -tooltip.offsetHeight + 'px';
    tooltip.style.left=event.pageX + 'px';
    document.body.appendChild(tooltip);
 });
    image. addEventListener('mouseout',() => {
        const tooltip =document.querySelector('.tooltip');
        if (tooltip) {
            document.body.remonveChild(tooltip);
        }  
    });
});
