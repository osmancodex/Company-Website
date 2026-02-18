// Data for services
// const servicesData = [
//   {
//     id: 0,
//     title: "Paid Social That Drives The Conversion Pipeline",
//     description: "Acquiring new customers is expensive. Our email and lifecycle marketing transforms first time visitors into loyal, repeat buyers through automated flows and targeted campaigns.",
//     rightHeader: "BOOST CUSTOMER <br> LIFETIME VALUES, DRIVE <br> REPEAT PURCHASE",
//     centralTag: "Advertising",
//     features: ["Data Focused", "Cost Effective", "Targetable", "Customizable", "Measurable", "Fast Result", "Exposure"]
//   },
//   {
//     id: 1,
//     title: "Email & Lifecycle Marketing for Dedicated Conversions",
//     description: "Don't let leads go cold. We build automated email flows that nurture customers from their first click to their hundredth purchase, maximizing LTV.",
//     rightHeader: "NURTURE LEADS <br> INTO LOYAL FANS & <br> REPEAT BUYERS",
//     centralTag: "Email Flows",
//     features: ["Automation", "Personalized", "High ROI", "Retention", "Segmentation", "Loyalty", "Engagement"]
//   },
//   {
//     id: 2,
//     title: "Conversion Rate Optimization (CRO)",
//     description: "Traffic is useless if it doesn't convert. We analyze user behavior and optimize your landing pages to turn more visitors into paying customers.",
//     rightHeader: "MAXIMIZE EVERY <br> CLICK WITH DATA-DRIVEN <br> OPTIMIZATION",
//     centralTag: "Optimization",
//     features: ["A/B Testing", "Heatmaps", "UX Design", "Funnel Fix", "Analytics", "Speed", "Growth"]
//   },
//   {
//     id: 3,
//     title: "Conversion-First Content",
//     description: "Content that sells. From ad copy to blog posts, we create narratives that resonate with your audience and drive them toward the checkout button.",
//     rightHeader: "TELL STORIES <br> THAT SELL AND <br> BUILD TRUST",
//     centralTag: "Content",
//     features: ["Copywriting", "SEO", "Creative", "Viral", "Authority", "Organic", "Brand"]
//   }
// ];

// let activeIndex = 0;

// Render left list
// function renderLeftList() {
//   const listContainer = document.getElementById('services-list');
//   listContainer.innerHTML = '';

//   servicesData.forEach((service, index) => {
//     const isActive = index === activeIndex;
//     const cardClass = isActive ? "card active" : "card";
    
//     const html = `
//       <div onclick="setActive(${index})" class="${cardClass}">
//         <h3>${service.title}</h3>
//         ${isActive ? `
//           <p>${service.description}</p>
//           <button>Explore Services</button>
//         ` : ''}
//       </div>
//     `;
//     listContainer.innerHTML += html;
//   });
// }

// Render right panel
// function renderRightPanel() {
//   const data = servicesData[activeIndex];
  
//   const header = document.getElementById('right-header');
//   const tag = document.getElementById('central-tag');
  
//   header.innerHTML = data.rightHeader;
//   tag.innerText = data.centralTag;

//   const topFeatures = data.features.slice(0, 4);
//   const bottomFeatures = data.features.slice(4, 7);

//   const topGrid = document.getElementById('feature-grid');
//   topGrid.innerHTML = topFeatures.map(feat => `
//     <div class="feature-item">
//       <div class="icon-circle"></div>
//       <span>${feat}</span>
//     </div>
//   `).join('');

//   const bottomGrid = document.getElementById('feature-grid-bottom');
//   bottomGrid.innerHTML = bottomFeatures.map(feat => `
//     <div class="feature-item">
//       <div class="icon-circle"></div>
//       <span>${feat}</span>
//     </div>
//   `).join('');
// }

// Event handler
// function setActive(index) {
//   if (activeIndex === index) return;
//   activeIndex = index;
//   renderLeftList();
//   renderRightPanel();
// }

// Initialize
// renderLeftList();
// renderRightPanel();



// NEW CODE HAI
// NEW CODE HAI

const servicesData = [
  {
    id: 0,
    title: "Paid Social That Drives The Conversion Pipeline",
    description: "Acquiring new customers is expensive. Our email and lifecycle marketing transforms first time visitors into loyal, repeat buyers through automated flows and targeted campaigns.",
    rightHeader: "BOOST CUSTOMER <br> LIFETIME VALUES, DRIVE <br> REPEAT PURCHASE",
    centralTag: "Advertising",
    features: ["Data Focused", "Cost Effective", "Targetable", "Customizable", "Measurable", "Fast Result", "Exposure"]
  },
  {
    id: 1,
    title: "Email & Lifecycle Marketing for Dedicated Conversions",
    description: "Don't let leads go cold. We build automated email flows that nurture customers from their first click to their hundredth purchase, maximizing LTV.",
    rightHeader: "NURTURE LEADS <br> INTO LOYAL FANS & <br> REPEAT BUYERS",
    centralTag: "Email Flows",
    features: ["Automation", "Personalized", "High ROI", "Retention", "Segmentation", "Loyalty", "Engagement"]
  },
  {
    id: 2,
    title: "Conversion Rate Optimization (CRO)",
    description: "Traffic is useless if it doesn't convert. We analyze user behavior and optimize your landing pages to turn more visitors into paying customers.",
    rightHeader: "MAXIMIZE EVERY <br> CLICK WITH DATA-DRIVEN <br> OPTIMIZATION",
    centralTag: "Optimization",
    features: ["A/B Testing", "Heatmaps", "UX Design", "Funnel Fix", "Analytics", "Speed", "Growth"]
  },
  {
    id: 3,
    title: "Conversion-First Content",
    description: "Content that sells. From ad copy to blog posts, we create narratives that resonate with your audience and drive them toward the checkout button.",
    rightHeader: "TELL STORIES <br> THAT SELL AND <br> BUILD TRUST",
    centralTag: "Content",
    features: ["Copywriting", "SEO", "Creative", "Viral", "Authority", "Organic", "Brand"]
  }
];

let activeIndex = 0;

// Feature icons mapping (SVG paths)
const featureIcons = {
  "Data Focused": "images/featured-services-tab-1 (2).svg",
  "Cost Effective": "images/featured-services-tab-1 (3).svg",
  "Targetable": "images/featured-services-tab-1 (4).svg",
  "Customizable": "images/featured-services-tab-1 (5).svg",
  "Measurable": "images/featured-services-tab-1 (6).svg",
  "Fast Result": "images/featured-services-tab-1 (7).svg",
  "Exposure": "images/featured-services-tab-1 (1).svg",

  "Automation": "images/featured-services-tab-1 (1).svg",
  "Personalized": "images/featured-services-tab-1 (2).svg",
  "High ROI": "images/featured-services-tab-1 (3).svg",
  "Retention": "images/featured-services-tab-1 (4).svg",
  "Segmentation": "images/featured-services-tab-1 (5).svg",
  "Loyalty": "images/featured-services-tab-1 (6).svg",
  "Engagement": "images/featured-services-tab-1 (7).svg",

  "A/B Testing": "images/featured-services-tab-1 (1).svg",
  "Heatmaps": "images/featured-services-tab-1 (4).svg",
  "UX Design": "images/featured-services-tab-1 (6).svg",
  "Funnel Fix": "images/featured-services-tab-1 (2).svg",
  "Analytics": "images/featured-services-tab-1 (5).svg",
  "Speed": "images/featured-services-tab-1 (3).svg",
  "Growth": "images/featured-services-tab-1 (7).svg",

  "Copywriting": "images/featured-services-tab-1 (1).svg",
  "SEO": "images/featured-services-tab-1 (2).svg",
  "Creative": "images/featured-services-tab-1 (3).svg",
  "Viral": "images/featured-services-tab-1 (4).svg",
  "Authority": "images/featured-services-tab-1 (5).svg",
  "Organic": "images/featured-services-tab-1 (6).svg",
  "Brand": "images/featured-services-tab-1 (7).svg"
};

// Render left list
function renderLeftList() {
  const listContainer = document.getElementById('services-list');
  listContainer.innerHTML = '';

  servicesData.forEach((service, index) => {
    const isActive = index === activeIndex;
    const cardClass = isActive ? "card active" : "card";
    
    const html = `
      <div onclick="setActive(${index})" class="${cardClass}">
        <h3>${service.title}</h3>
        ${isActive ? `
          <p>${service.description}</p>
          <button>Explore Services</button>
        ` : ''}
      </div>
    `;
    listContainer.innerHTML += html;
  });
}

// Render right panel
function renderRightPanel() {
  const data = servicesData[activeIndex];
  
  const header = document.getElementById('right-header');
  const tag = document.getElementById('central-tag');
  
  header.innerHTML = data.rightHeader;
  tag.innerText = data.centralTag;

  const topFeatures = data.features.slice(0, 4);
  const bottomFeatures = data.features.slice(4, 7);

  const topGrid = document.getElementById('feature-grid');
  topGrid.innerHTML = topFeatures.map(feat => `
    <div class="feature-item">
      <div class="icon-circle">
        <img src="${featureIcons[feat]}" alt="${feat} icon">
      </div>
      <span>${feat}</span>
    </div>
  `).join('');

  const bottomGrid = document.getElementById('feature-grid-bottom');
  bottomGrid.innerHTML = bottomFeatures.map(feat => `
    <div class="feature-item">
      <div class="icon-circle">
        <img src="${featureIcons[feat]}" alt="${feat} icon">
      </div>
      <span>${feat}</span>
    </div>
  `).join('');
}

// Event handler
function setActive(index) {
  if (activeIndex === index) return;
  activeIndex = index;
  renderLeftList();
  renderRightPanel();
}

// Initialize
renderLeftList();
renderRightPanel();


// NEW CODE HAI
// NEW CODE HAI




document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1.15,
        spaceBetween: 30,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 1.3,
        spaceBetween: 40,
        centeredSlides: true,
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".testimonialSwiper", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: true,
    speed: 600,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
  });
});



document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    // Close other open items
    document.querySelectorAll('.faq-content').forEach(otherContent => {
      if (otherContent !== content) {
        otherContent.style.maxHeight = null;
        otherContent.parentElement.querySelector('.faq-icon').textContent = '+';
      }
    });

    // Toggle current item
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = '−';
    }
  });
});



const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  
  if (mobileMenu.classList.contains("open")) {
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});
