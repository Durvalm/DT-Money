export const dateFormatter = new Intl.DateTimeFormat('en-US'); // Use 'en-US' for English (United States)

export const priceFormatter = new Intl.NumberFormat('en-US', { // Use 'en-US' for English (United States)
  style: 'currency',
  currency: 'USD', // Set currency to USD
});