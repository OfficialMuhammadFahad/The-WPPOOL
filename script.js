// // For Inspect Element hide
window.addEventListener("keydown", function (e) {
    if (
      (e.ctrlKey && e.keyCode == 85) || // Ctrl+U
      (e.ctrlKey && e.shiftKey && e.keyCode == 85) || // Ctrl+Shift+U
      (e.ctrlKey && e.keyCode == 83) || // Ctrl+S
      (e.ctrlKey && e.shiftKey && e.keyCode == 83) || // Ctrl+Shift+S
      (e.ctrlKey && e.shiftKey && e.keyCode == 67) || // Ctrl+Shift+C
      (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
      (e.keyCode == 123) || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
      (e.altKey && e.metaKey && e.keyCode == 73) || // Option+Cmd+I -- for Mac OS
      (e.altKey && e.metaKey && e.keyCode == 67)  // Option+Cmd+C -- for Mac OS
    ) {
      e.preventDefault();
    }
  });

// Chart

const xValues = ["", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [-10, 0, 50, 18, 45, 90, 20],
        borderColor: "#FC714D",
        fill: false,
      },
      {
        data: [10, 20, 40, 18, 50, 39, 29],
        borderColor: "#615DE3",
        fill: false,
      },
      {
        data: [-10, 11, 21, 41, 39, 90, 29, -1],
        borderColor: "#AFCD80",
        fill: false,
      },
      {
        data: [0, 7, 19, 31, 43, 80, 29, -1],
        borderColor: "#6F34A1",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});

// Grid Section

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Client Card

const clients = [
  { src: "Assets/Stripe.png", alt: "Stripe" },
  { src: "Assets/Klarna.png", alt: "Klarna" },
  { src: "Assets/Plaid.png", alt: "Plaid" },
  { src: "Assets/Checkout.com.png", alt: "Checkout" },
  { src: "Assets/Revolut.png", alt: "Revolut" },
  { src: "Assets/Chime.png", alt: "Chime" },
  { src: "Assets/N26.png", alt: "N26" },
  { src: "Assets/Brex.png", alt: "Brex" },
  { src: "Assets/Deel.png", alt: "Deel" },
  { src: "Assets/Gusto.png", alt: "Gusto" },
];

const clientBoxContainer = document.querySelector(".client-box");

clients.forEach((client, index) => {
  const boxHTML = `
        <div class="box box${index + 1}">
            <img src="${client.src}" alt="${client.alt}">
        </div>
    `;
  clientBoxContainer.insertAdjacentHTML("beforeend", boxHTML);
});

const data = [
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    marketCap: "$50.5",
    revenueGrowth: "49.0%",
    grossMargin: "15.8%",
    evRevenue: "6.3",
    ytdPerformance: "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    marketCap: "$4.7",
    revenueGrowth: "32.0%",
    grossMargin: "48.7%",
    evRevenue: "4.9",
    ytdPerformance: "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    marketCap: "$1.5",
    revenueGrowth: "34.0%",
    grossMargin: "53.0%",
    evRevenue: "7.0",
    ytdPerformance: "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    marketCap: "$2.0",
    revenueGrowth: "27.0%",
    grossMargin: "61.5%",
    evRevenue: "6.0",
    ytdPerformance: "10.5%",
  },
  {
    company: "Bakkt Holdings",
    ticker: "BKKT",
    vertical: "Wealth",
    price: "$1.32",
    marketCap: "$0.1",
    revenueGrowth: "38%",
    grossMargin: "--",
    evRevenue: "0.4",
    ytdPerformance: "13.8%",
  },
  {
    company: "Virtu Financial Inc",
    ticker: "VIRT",
    vertical: "Wealth",
    price: "$17.0",
    marketCap: "$3.1",
    revenueGrowth: "-22.0%",
    grossMargin: "38.2%",
    evRevenue: "2.6",
    ytdPerformance: "-17.8%",
  },
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    marketCap: "$50.5",
    revenueGrowth: "49.0%",
    grossMargin: "15.8%",
    evRevenue: "6.3",
    ytdPerformance: "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    marketCap: "$4.7",
    revenueGrowth: "32.0%",
    grossMargin: "48.7%",
    evRevenue: "4.9",
    ytdPerformance: "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    marketCap: "$1.5",
    revenueGrowth: "34.0%",
    grossMargin: "53.0%",
    evRevenue: "7.0",
    ytdPerformance: "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    marketCap: "$2.0",
    revenueGrowth: "27.0%",
    grossMargin: "61.5%",
    evRevenue: "6.0",
    ytdPerformance: "10.5%",
  },
  {
    company: "Bakkt Holdings",
    ticker: "BKKT",
    vertical: "Wealth",
    price: "$1.32",
    marketCap: "$0.1",
    revenueGrowth: "38%",
    grossMargin: "--",
    evRevenue: "0.4",
    ytdPerformance: "13.8%",
  },
  {
    company: "Virtu Financial Inc",
    ticker: "VIRT",
    vertical: "Wealth",
    price: "$17.0",
    marketCap: "$3.1",
    revenueGrowth: "-22.0%",
    grossMargin: "38.2%",
    evRevenue: "2.6",
    ytdPerformance: "-17.8%",
  },
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    marketCap: "$50.5",
    revenueGrowth: "49.0%",
    grossMargin: "15.8%",
    evRevenue: "6.3",
    ytdPerformance: "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    marketCap: "$4.7",
    revenueGrowth: "32.0%",
    grossMargin: "48.7%",
    evRevenue: "4.9",
    ytdPerformance: "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    marketCap: "$1.5",
    revenueGrowth: "34.0%",
    grossMargin: "53.0%",
    evRevenue: "7.0",
    ytdPerformance: "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    marketCap: "$2.0",
    revenueGrowth: "27.0%",
    grossMargin: "61.5%",
    evRevenue: "6.0",
    ytdPerformance: "10.5%",
  },
  {
    company: "Bakkt Holdings",
    ticker: "BKKT",
    vertical: "Wealth",
    price: "$1.32",
    marketCap: "$0.1",
    revenueGrowth: "38%",
    grossMargin: "--",
    evRevenue: "0.4",
    ytdPerformance: "13.8%",
  },
  {
    company: "Virtu Financial Inc",
    ticker: "VIRT",
    vertical: "Wealth",
    price: "$17.0",
    marketCap: "$3.1",
    revenueGrowth: "-22.0%",
    grossMargin: "38.2%",
    evRevenue: "2.6",
    ytdPerformance: "-17.8%",
  },
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    marketCap: "$50.5",
    revenueGrowth: "49.0%",
    grossMargin: "15.8%",
    evRevenue: "6.3",
    ytdPerformance: "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    marketCap: "$4.7",
    revenueGrowth: "32.0%",
    grossMargin: "48.7%",
    evRevenue: "4.9",
    ytdPerformance: "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    marketCap: "$1.5",
    revenueGrowth: "34.0%",
    grossMargin: "53.0%",
    evRevenue: "7.0",
    ytdPerformance: "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    marketCap: "$2.0",
    revenueGrowth: "27.0%",
    grossMargin: "61.5%",
    evRevenue: "6.0",
    ytdPerformance: "10.5%",
  },
  {
    company: "Bakkt Holdings",
    ticker: "BKKT",
    vertical: "Wealth",
    price: "$1.32",
    marketCap: "$0.1",
    revenueGrowth: "38%",
    grossMargin: "--",
    evRevenue: "0.4",
    ytdPerformance: "13.8%",
  },
  {
    company: "Virtu Financial Inc",
    ticker: "VIRT",
    vertical: "Wealth",
    price: "$17.0",
    marketCap: "$3.1",
    revenueGrowth: "-22.0%",
    grossMargin: "38.2%",
    evRevenue: "2.6",
    ytdPerformance: "-17.8%",
  },
];

function populateTable() {
  const table = document.getElementById("myTable");

  data.forEach((item) => {
    const row = document.createElement("tr");

    Object.keys(item).forEach((key) => {
      const cell = document.createElement("td");
      cell.textContent = item[key];
      if (
        key === "marketCap" ||
        key === "revenueGrowth" ||
        key === "grossMargin" ||
        key === "evRevenue" ||
        key === "ytdPerformance"
      ) {
        cell.classList.add("gridData");
      }
      row.appendChild(cell);
    });

    table.appendChild(row);
  });
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

populateTable();

// Carousel Section

let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let slider = document.querySelector(".slider");

next.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});

previous.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
});

// Testimonials Cards

const testimonials = [
  {
    src: "Assets/Nayem Pic.png",
    alt: "Nayem Khan",
    author: "Nayem Khan",
    text: "Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Maxime mollitia.",
  },
  {
    src: "Assets/Nayem Pic.png",
    alt: "Nayem",
    author: "Nayem Khan",
    text: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    src: "Assets/Nayem Pic.png",
    alt: "Nayem Khan",
    author: "Nayem Khan",
    text: "Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Maxime mollitia.",
  },
  {
    src: "Assets/Nayem Pic.png",
    alt: "Nayem Khan",
    author: "Nayem Khan",
    text: "Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Maxime mollitia.",
  },
  {
    src: "Assets/Nayem Pic.png",
    alt: "Nayem",
    author: "Nayem Khan",
    text: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    src: "Assets/Nayem Pic.png",
    alt: "Nayem Khan",
    author: "Nayem Khan",
    text: "Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Maxime mollitia.",
  },
];

const testimonialsContainer = document.querySelector(".testimonials-cards");

testimonials.forEach((testimonial, index) => {
  const cardHTML = `
        <div class="crd card${index + 1}">
            <img src="${testimonial.src}" alt="${testimonial.alt}">
            <p class="first-para">By: ${testimonial.author}</p>
            <p class="second-para">${testimonial.text}</p>
            <button>Read More</button>
        </div>
    `;
  testimonialsContainer.insertAdjacentHTML("beforeend", cardHTML);
});

// Portfolio Cards

const portfolioItems = [
  { src: "Assets/Alibaba.png", alt: "Alibaba" },
  { src: "Assets/Vendr.png", alt: "Vendr" },
  { src: "Assets/Vestwell.png", alt: "Vest Well" },
  { src: "Assets/snapdocs.png", alt: "Snap Docs" },
  { src: "Assets/Vendr.png", alt: "Vendr" },
  { src: "Assets/snapdocs.png", alt: "Snap Docs" },
  { src: "Assets/toast.png", alt: "Toast" },
  { src: "Assets/connexpay.png", alt: "Connex Pay" },
  { src: "Assets/connexpay.png", alt: "Connex Pay" },
  { src: "Assets/mineraltree.png", alt: "Mineral Tree" },
  { src: "Assets/flywire.png", alt: "Fly Wire" },
  { src: "Assets/Quovo.png", alt: "Quovo" },
  { src: "Assets/spendesk.png", alt: "Spendesk" },
  { src: "Assets/Notabene.png", alt: "Notabene" },
  { src: "Assets/Recurly.png", alt: "Recurly" },
  { src: "Assets/Fireblocks.png", alt: "Fire Blocks" },
  { src: "Assets/Kensho.png", alt: "Kensho" },
  { src: "Assets/Futureadvisor.png", alt: "Future Advisor" },
  { src: "Assets/Argyle.png", alt: "Argyle" },
  { src: "Assets/snapsheet.png", alt: "Snap Sheet" },
];

const portfolioContainer = document.getElementById("portfolio-cards");

portfolioItems.forEach((item, index) => {
  const cardHTML = `
        <div class="pf-crd pf-card${index + 1}">
            <img src="${item.src}" alt="${item.alt}">
        </div>
    `;
  portfolioContainer.insertAdjacentHTML("beforeend", cardHTML);
});
