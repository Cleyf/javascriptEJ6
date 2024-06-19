// Lista de produtos
const products = [
    { name: "TV", price: 900.00 },
    { name: "Notebook", price: 1200.00 },
    { name: "Tablet", price: 450.00 },
    { name: "Smartphone", price: 800.00 },
    { name: "Headphones", price: 150.00 }
];

// Valor mínimo para filtrar produtos
const minPrice = 500.00;

// Função para filtrar produtos com preço acima do valor mínimo
const expensiveProducts = products.filter(product => product.price > minPrice);

// Função para formatar a mensagem de cada produto
const formatProductMessage = product => `Product: ${product.name}, Price: $${product.price.toFixed(2)}`;

// Mapear os produtos filtrados para suas mensagens formatadas
const productMessages = expensiveProducts.map(formatProductMessage);

// Função para exibir as mensagens dos produtos na página
const displayProducts = messages => {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = messages.map(message => `<p>${message}</p>`).join('');
};

// Exibir os produtos na página
displayProducts(productMessages);
