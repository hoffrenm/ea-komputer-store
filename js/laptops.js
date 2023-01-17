const baseUrl = "https://hickory-quilled-actress.glitch.me";
let laptops = [];
let price = 0;

(async function () {
  try {
    const response = await fetch(`${baseUrl}/computers`)
    laptops = await response.json()

    addLaptopsToSelection(laptops)
    updateLaptopInfo(laptops[0])
  } catch (error) {
    console.log(`Error fetching laptops: ${error.message}`);
  }
})();

const getSelectedLaptopPrice = () => price

const addLaptopsToSelection = (laptopArray) => {
  laptopArray.forEach(laptop => {
    const laptopElement = document.createElement('option')
    laptopElement.value = laptop.id
    laptopElement.appendChild(document.createTextNode(laptop.title))
    laptopSelectionElement.appendChild(laptopElement)
  })
}

const handleLaptopSelectionChange = e => {
  const selectedLaptop = laptops.find(laptop => laptop.id == e.target.value)
  updateLaptopInfo(selectedLaptop)
}

const updateLaptopInfo = (laptop) => {
  price = laptop.price
  setFeatures(laptop)
  setInfoSection(laptop)
}

const setFeatures = (laptop) => {
  laptopFeaturesElement.textContent = ''
  laptop.specs.forEach(spec => {
    const specElement = document.createElement('li')
    specElement.innerText = spec
    laptopFeaturesElement.appendChild(specElement)
  })
}

const setInfoSection = (laptop) => {
  laptopTitleElement.innerText = laptop.title
  laptopDescriptionElement.innerText = laptop.description
  laptopPriceElement.innerText = `${laptop.price} €`
  setImage(laptop)
}

const setImage = (laptop) => {
  laptopImageElemement.src = `${baseUrl}/${laptop.image}`
}

const laptopSelectionElement = document.getElementById('laptopSelection')
const laptopTitleElement = document.getElementById('laptopTitle')
const laptopDescriptionElement = document.getElementById('laptopDescription')
const laptopImageElemement = document.getElementById('laptopImage')
const laptopFeaturesElement = document.getElementById('laptopFeatures')
const laptopPriceElement = document.getElementById('laptopPrice')

laptopSelectionElement.addEventListener('change', handleLaptopSelectionChange)

const laptop = {
  getSelectedLaptopPrice,
}

export default laptop
