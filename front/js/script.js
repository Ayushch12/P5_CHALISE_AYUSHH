

// Retrieve articles from the API
async function getArticles() {
  var response = await fetch("http://localhost:3000/api/products")
  return await response.json();
  
}

// Distribute API data in the DOM
async function showAvatar() {
  var result = await getArticles ()  //The await operator is used to wait for a Promise .
  .then(function (resultatAPI){ //Promise API and is used to deal with asynchronous tasks such as an API call.
      const articles = resultatAPI;
      console.table(articles);
      for (let article in articles) {

        
         // Insert the "a" element
          let productLink = document.createElement("a");
          document.querySelector(".items").appendChild(productLink);
          productLink.href = `product.html?id=${resultatAPI[article]._id}`;

        // Insert the "article" element
          let productArticle = document.createElement("article");
          productLink.appendChild(productArticle);

          // Insert the picture
          let productImg = document.createElement("img");
          productArticle.appendChild(productImg);
          productImg.src = resultatAPI[article].imageUrl;
         //productImg.alt = resultatAPI[article].altTxt;

          // Insert the title "h3"
          let productName = document.createElement("h3");
          productArticle.appendChild(productName);
          productName.classList.add("productName");
          productName.innerHTML = resultatAPI[article].name;

         // Insert the description "p"
          let productDescription = document.createElement("p");
          productArticle.appendChild(productDescription);
          productDescription.classList.add("productDescription");
          productDescription.innerHTML = resultatAPI[article].description;
      }
  })
  .catch (function(error){
      return error;
  });
}

showAvatar(); //function name
