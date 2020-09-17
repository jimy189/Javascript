let productCount = 0;

class Product {
    constructor(func, telefone) {
        this.func = func;
        this.telefone = telefone;
        this.id = ++productCount;
    }
}


function removeProduct(id) {
    const containerDiv = window.document.getElementById('productList');
    const productNode = window.document.getElementById(`product-${id}`);
    containerDiv.removeChild(productNode);
}



function appendProduct(func, telefone) {

    const product = new Product(func, telefone);
    const containerDiv = window.document.getElementById('productList');
    const child = window.document.createElement('div');

    child.innerHTML = `
    <div class="container">  
      <table class="table">
      <thead class="thead-dark">
          <tr>
              <th scope="col">Nome do Funcionario</th>
              <th scope="col">Telefone</th>           
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>${product.func}</td>
              <td>${product.telefone}</td>
           
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
        const productFunc = window.document.getElementById('product-func-input').value;
        const productPhone = window.document.getElementById('product-number-input').value;
        appendProduct(productFunc, productPhone);
        event.preventDefault();
    });