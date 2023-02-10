const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");
const markup = images.map((technology) => `<li class="item"><img src='${technology.url}' width='350' height='350' alt='${technology.alt}'/></li>`).join("");
addStyles();
function addStyles()
{
  gallery.insertAdjacentHTML("beforeend", markup);
  gallery.style.marginTop = "150px";
  gallery.style.display = "flex";
  gallery.style.alignItems = "center";
  gallery.style.justifyContent = "center";
  gallery.style.flexDirection = "row";
  gallery.style.gap = "50px";
}