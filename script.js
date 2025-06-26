
  const cart = [];
  const prices = {
    "Café Coado": 15.99
  };

  function addToCart(productName) {
    cart.push(productName);
    alert(`${productName} adicionado ao carrinho.`);
    updateCartIcon();
  }

  function updateCartIcon() {
    // Pode-se colocar o número no ícone depois
  }

  function toggleCart() {
    const modal = document.getElementById("cartModal");
    if (modal.style.display === "flex") {
      modal.style.display = "none";
    } else {
      renderCart();
      modal.style.display = "flex";
    }
  }

  function renderCart() {
    const list = document.getElementById("cartItems");
    const totalSpan = document.getElementById("cartTotal");
    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item} - R$ ${prices[item].toFixed(2)}`;
      list.appendChild(li);
      total += prices[item];
    });

    totalSpan.textContent = `R$ ${total.toFixed(2)}`;
  }

  function checkout() {
    toggleCart();
    document.getElementById("paymentModal").style.display = "flex";
  }

  function togglePayment() {
    document.getElementById("paymentModal").style.display = "none";
    document.getElementById("confirmMsg").textContent = "";
  }

  function pay(method) {
    const msg = method === "pix"
      ? "Chave Pix: cafe@exemplo.com (simulado)"
      : "Número do cartão: 1234 5678 9012 3456 (simulado)";
    document.getElementById("confirmMsg").textContent = msg;
  }

  // Ícone carrinho
  document.querySelector('.icons img[alt="cart"]').addEventListener("click", toggleCart);

  // Botões dos produtos
  document.querySelectorAll('.menu .box .btn').forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const name = btn.parentElement.querySelector("h3").textContent.trim();
      addToCart(name);
    });
  });

