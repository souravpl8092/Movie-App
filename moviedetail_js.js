
    var typed = new Typed("header>span", {
        strings:["Night Owl", "...The" , "Movie Site"],
        typeSpeed:100,
        backSpeed:200,
        loop: true
      })
      //start
      let item = JSON.parse(localStorage.getItem("MovieDetails")) || [];
      console.log(item);
    
      let div = document.createElement("div");
      div.setAttribute("class", "div");
      let div1 = document.createElement("div");
      div1.setAttribute("id", "div1");
      let img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
      let div2 = document.createElement("div");
      let title = document.createElement("h2");
      title.innerHTML = '<i class="far fa-play-circle"></i> ' + item.title;
      let date = document.createElement("h4");
      date.innerHTML ='<i class="far fa-calendar-alt"></i> '  +item.release_date;
      let rate = document.createElement("h4");
      rate.innerHTML ='<i class="fas fa-star"></i> ' + item.vote_average+ '/10'
      let plot = document.createElement("p");
      plot.innerHTML ='<i class="fas fa-indent"></i>  ' + item.overview;
      let home = document.createElement("div")
      home.setAttribute("class", "icon")
      home.innerHTML = "Click me to go home - " + '<i class="fab fa-earlybirds"></i>'
      home.addEventListener("click", function(){
        window.location.href = "moviesapp.html"
      })
    
    
      div1.append(img);
      div2.append(title, date, rate, plot, home);
      div.append(div1, div2);
      document.querySelector(".cont").append(div);