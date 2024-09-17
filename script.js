window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  const navbar = document.querySelector(".navbar");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.timeline()
    .to("#con-1-left", { duration: 1.5, x: 0, opacity: 1, ease: "power2.out", delay: 1 })
    .to("#con-1-right", { duration: 1.5, x: 0, opacity: 1, ease: "power2.out" }, "-=1.5");
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.timeline()
    .to("#al", { duration: 1.5, x: 0, opacity: 1, ease: "power2.out", delay: 1 })
    .to("#ar", { duration: 1.5, x: 0, opacity: 1, ease: "power2.out" }, "-=1.5");
});

function showSection(sectionId) {
  document.querySelectorAll('.image-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

$(document).ready(function () {
  $('.counter').each(function () {
    var $this = $(this);
    var countTo = $this.data('count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    }, {
      duration: 2000,
      easing: 'swing',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  gsap.to(".testimonial-row", {
    xPercent: -100,
    duration: 40,
    ease: "none",
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0)
    },
    onUpdate: function () {
      document.querySelector(".testimonial-row").style.transform = `translateX(${gsap.getProperty(".testimonial-row", "x")}px)`;
    }
  });
});

let cart = [];

function addToCart(name, image) {
  const cartItem = {
    name: name,
    image: image
  };

  cart.push(cartItem);

  updateCartSidebar();
}

function removeFromCart(index) {
  cart.splice(index, 1);

  updateCartSidebar();
}

function updateCartSidebar() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';

  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
                <span>${item.name}</span>
                <img src="${item.image}" alt="${item.name}">
                <button class="remove-btn" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;
    cartItemsContainer.appendChild(listItem);
  });
}

function toggleCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  const toggleBar = document.getElementById('cartToggleBar');

  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    toggleBar.style.right = "0";
  } else {
    sidebar.classList.add('active');
    toggleBar.style.right = "300px";
  }
}

function addToCart(itemName, itemImage) {
  const cartItem = document.createElement("li");
  cartItem.textContent = itemName;
  cartItem.innerHTML += `<img src="${itemImage}" alt="${itemName}" width="20" height="20">`;

  const cartItemsList = document.getElementById("cartItems");
  cartItemsList.appendChild(cartItem);
}









