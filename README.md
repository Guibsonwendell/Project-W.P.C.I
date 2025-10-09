# 🏗️ W.P.C.I - Gesso e Pinturas

**W.P.C.I** é um site comercial desenvolvido por mim para apresentar os
serviços da empresa **W.P.C.I - Gesso e Pinturas**, especializada em
acabamentos, pintura e aplicação de gesso.\
O objetivo do projeto é oferecer uma experiência moderna e responsiva,
permitindo que clientes conheçam os serviços, visualizem trabalhos
anteriores e solicitem orçamentos online.

------------------------------------------------------------------------

## 🌐 Demonstração

> 💡 <https://wpci.vercel.app>

------------------------------------------------------------------------

## 🧱 Estrutura do Projeto

    /
    ├── index.html      # Estrutura principal do site
    ├── style.css       # Estilos e responsividade
    ├── index.js        # Interatividade (scroll suave, menu e slider)
    └── /images         # Diretório de imagens e ícones (logo, galeria, etc.)

------------------------------------------------------------------------

## 🖥️ Tecnologias Utilizadas

  -----------------------------------------------------------------------
  Categoria                          Tecnologias
  ---------------------------------- ------------------------------------
  **Frontend**                       HTML5, CSS3, JavaScript (ES6+)

  **Design**                         Google Fonts (Poppins, Open Sans),
                                     SVG Icons

  **Funcionalidades**                Scroll suave, menu responsivo,
                                     carrossel de depoimentos, formulário
                                     de orçamento, botão flutuante do
                                     WhatsApp

  **Responsividade**                 Layout fluido adaptável a
                                     dispositivos móveis, tablets e
                                     desktops
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## ⚙️ Funcionalidades Principais

✅ **Menu de navegação responsivo** --- alterna automaticamente entre
desktop e mobile.\
✅ **Scroll suave entre seções** --- experiência fluida ao clicar nos
links.\
✅ **Carrossel de depoimentos** --- troca automática com navegação
manual.\
✅ **Formulário de contato funcional (simulado)** --- validação de
campos e alerta de envio.\
✅ **Botão flutuante do WhatsApp** --- contato rápido direto pelo app.\
✅ **Galeria de projetos** --- exibição de imagens ilustrativas dos
serviços.

------------------------------------------------------------------------

## 📱 Responsividade

O layout foi desenvolvido com **Mobile First** e inclui media queries
personalizadas para:

-   Smartphones (até 576px)
-   Tablets (até 768px)
-   Desktops médios (até 992px)
-   Telas grandes (acima de 1200px)

------------------------------------------------------------------------

## 🧩 Destaques de Código

### Smooth Scrolling (`index.js`)

``` js
window.scrollTo({
  top: targetPosition,
  behavior: 'smooth'
});
```

### Validação de Formulário

``` js
if (nome === '' || email === '' || telefone === '' || servico === '') {
    alert('Por favor, preencha todos os campos obrigatórios.');
}
```

### Menu Mobile

``` js
menuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});
```

------------------------------------------------------------------------

## 🚀 Como Executar o Projeto Localmente

1.  **Baixe ou clone o repositório:**

    ``` bash
    git clone https://github.com/seuusuario/wpci-gesso-pinturas.git
    ```

2.  **Acesse o diretório:**

    ``` bash
    cd wpci-gesso-pinturas
    ```

3.  **Abra o arquivo principal no navegador:**

    ``` bash
    index.html
    ```

> ⚠️ Não há dependências externas (como Node.js). O projeto é 100%
> estático.

------------------------------------------------------------------------

## 🧠 Possíveis Melhorias Futuras

-   Integração do formulário com **EmailJS** ou **API própria** para
    envio real de mensagens.\
-   Otimização de imagens para **melhor performance**.\
-   Adição de **animações sutis (AOS.js ou Framer Motion)**.\
-   Implementação de **Dark Mode**.

------------------------------------------------------------------------

## 👨‍💻 Autor

**Desenvolvido por:** \[Guibson Wendell Negreiros Pimentel\]\
📧 **Contato:** guibsonnegreiros@gmail.com\
📱 **WhatsApp:** (81) 98295-7501\
 *"Excelência em criação de projetos e compromisso com o cliente."*
