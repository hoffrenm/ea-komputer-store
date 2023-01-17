export const renderValueAsCurrency = (element, value) => {
  element.innerText = `${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)}`
}
