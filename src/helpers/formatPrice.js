const formatPrice = price => {
  const formattedPrice = Intl.NumberFormat(undefined, {
    currency: price.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(price.amount)
  return formattedPrice
}
export default formatPrice
