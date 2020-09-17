let productCount = 0;

class Product {
    constructor(name, price, qtd) {
        this.name = name;
        this.price = price;
        this.qtd = qtd;
        this.id = ++productCount;
    }
}


function removeProduct(id) {
    const containerDiv = window.document.getElementById('productList');
    const productNode = window.document.getElementById(`product-${id}`);
    containerDiv.removeChild(productNode);
}



function appendProduct(name, price, qtd) {

    const product = new Product(name, price, qtd);
    const containerDiv = window.document.getElementById('productList');
    const child = window.document.createElement('div');

    child.innerHTML = `
    <div class="container">  
      <table class="table">
      <thead class="thead-dark">
          <tr>
              <th scope="col">Tipo do Quarto</th>
              <th scope="col">Preço do Quarto</th>
              <th scope="col">Quantidade de Dias</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>${product.name}</td>
              <td>R$${product.price}</td>
              <td>${product.qtd}</td>
          </tr>
      </tbody>
  </table>

      <button class="btn btn-danger" onClick="removeProduct(${product.id});">Remover</button>
    </div><br>
    `;

    child.id = `product-${product.id}`;

    containerDiv.appendChild(child);

}

window.document.getElementById("addProductForm")
    .addEventListener("submit", (event) => {
        const productName = window.document.getElementById('product-name-input').value;
        const productPrice = window.document.getElementById('product-price-input').value;
        const productqtd = window.document.getElementById('product-qtd-input').value;
        appendProduct(productName, productPrice, productqtd);
        event.preventDefault();
    });