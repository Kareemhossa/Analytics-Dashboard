let sidebarMenu = document.querySelector("aside");
let meunBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let themeToggler = document.querySelector(".theme-toggler")

// Show Sidebae in media 787 px
meunBtn.addEventListener('click' , () => {
    sidebarMenu.style.display ='block' ;
}
)

// Close Sidebae in media 787 px
closeBtn.addEventListener( 'click' , () => {
    sidebarMenu.style.display ='none' ;
} )

// dark & white theme
themeToggler.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme-variables') ;

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active') ;
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active') ;

}
)


// Recent Order
Orders.forEach(order =>{
    let tr =document.createElement('tr');
    let trContent = `
        <td> ${order.prouductName}</td>
        <td> ${order.prouductNumber}</td>
        <td> ${order.paymentStatus}</td>
        <td class="warning"> ${order.shapping}</td>
        <td class="primary"> Details</td>          
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})