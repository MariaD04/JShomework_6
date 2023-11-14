const links = document.querySelectorAll('.has-tooltip');

links.forEach(link => {
 
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    let tooltipText = link.getAttribute('title');
    tooltip.insertAdjacentText('afterbegin', tooltipText);
    link.insertAdjacentElement('afterend', tooltip);

    function location(findTooltip) {
        let targetRect = link.getBoundingClientRect();
        let tooltipLeft = targetRect.left 
        let tooltipTop = targetRect.top + targetRect.height;

        findTooltip.style.left = tooltipLeft + 'px';
        findTooltip.style.top = tooltipTop + 'px';
    }

    link.addEventListener('click', (event) => {
        event.preventDefault();
        let activeTooltip = document.querySelector('.tooltip_active');
        let findTooltip = link.nextSibling;
        if (activeTooltip && activeTooltip.isEqualNode(findTooltip)) {
            activeTooltip.classList.remove('tooltip_active');
        } else if (activeTooltip) {
            activeTooltip.classList.remove('tooltip_active');
            findTooltip.classList.add('tooltip_active');
            location(findTooltip);
        } else {
            findTooltip.classList.add('tooltip_active');
            location(findTooltip);
        } 
    }) 
    
})



