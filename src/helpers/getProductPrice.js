import formatPrice from './formatPrice'

const getProductPrice = product => {
  const hasMultiplePrices = () => {
    const maximumPrice = product.priceRange.maxVariantPrice.amount
    const minimumPrice = product.priceRange.minVariantPrice.amount
    return maximumPrice !== minimumPrice
  }
  const price = formatPrice(product.priceRange.minVariantPrice)
  return hasMultiplePrices() ? 'From ' + price : price
}

export default getProductPrice
