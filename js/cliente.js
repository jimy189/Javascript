let productCount = 0;

class Product {
    constructor(name, year, sex) {
        this.name = name;
        this.year = year;
        this.sex = sex;
        this.id = ++productCount;
    }
}


function removeProduct(id) {
    const containerDiv = window.document.getElementById('productList');
    const productNode = window.document.getElementById(`product-${id}`);
    containerDiv.removeChild(productNode);
}



function appendProduct(name, year, sex) {

    const product = new Product(name, year, sex);
    const containerDiv = window.document.getElementById('productList');
    const child = window.document.createElement('div');

    child.innerHTML = `
    <div class="container">  
      <table class="table">
      <thead class="thead-dark">
          <tr>
              <th scope="col">Nome do Cliente</th>
              <th scope="col">Idade</th>
              <th scope="col">Sexo</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>${product.name}</td>
              <td>${product.year}</td>
              <td>${product.sex}</td>
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
        const productyear = window.document.getElementById('product-sex-input').value;
        const productsex = window.document.getElementById('product-year-input').value;
        appendProduct(productName, productyear, productsex);
        event.preventDefault();
    });