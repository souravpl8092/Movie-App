var typed = new Typed("header>span", {
    strings:["Night Owl", "...The" , "Movie Site"],
    typeSpeed:100,
    backSpeed:200,
    loop: true
  })
  //part 1
  //async fun for landing page movies it fetch 20 popular movies and call to show
  popularMovies();
  async function popularMovies() {
    let chge = Math.round(Math.random()*10)
    let res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=10ac63d1d504ae240549f06c6cc417b4&language=en-US&page=${chge}`);

    let data = await res.json();
    showPopularMovies(data);
  }
  //it show 20 movies on landing page
  function showPopularMovies(data) {
    let movies20 = data.results;
    //console.log(movies20);
    movies20.forEach(function (item) {
    

      let div = document.createElement("div");
      div.setAttribute("id", "div");
      div.addEventListener("click", function(){
        getdetails(item)
      })
      let img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
      
      let title = document.createElement("h3");
      title.textContent = item.title;
      let year = document.createElement("h5");
      year.innerHTML ='<i class="fas fa-star"></i>  ' + item.vote_average + ' <i class="fab fa-earlybirds"></i>'
     
      div.append(img, title, year);
      let cont = document.querySelector(".container").append(div);
    });
  }

  //part2
  let bomb;
  //when we type something in input then it invokes debounce function & after it settimeout start and it delay displayMovie fun
  //after delay over it invokes displayMovies fun
  function debounce(func, delay) {
    clearTimeout(bomb);
    bomb = setTimeout(function () {
      func();
    }, delay);
  }

  // in this fun calls getmovie fun
  async function displayMovie() {
    let movie_data = await getMovie();

    if (movie_data === undefined) {
      return false;
    }
    
    showSearchMovies(movie_data.results);
  }

  //it fetch the data fron api and return it
  async function getMovie() {
    try {
      let input = document.getElementById("name").value;
      let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=10ac63d1d504ae240549f06c6cc417b4&query=${input}`
      );
      let data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      console.log("worked finally");
    }
  }
  //it show serched movies
  function showSearchMovies(result){
    document.getElementById("searchResult").innerHTML=""
    document.getElementById("searchResult").style.display="block"
    //console.log(result)
    result.forEach(function(item){
      let div = document.createElement("div")
      div.setAttribute("id","searchdiv")
      
      div.addEventListener("click", function(){
        getdetails(item)
      })
      let imgdiv = document.createElement("div")
      imgdiv.setAttribute("class","imgdiv")
      let img = document.createElement("img")
      img.src =  `https://image.tmdb.org/t/p/original/${item.poster_path}`;
      let div1 = document.createElement("div")
      div1.setAttribute("id","searchdiv1")
      let title1 = document.createElement("h3");
      title1.textContent = item.title;
      let year1 = document.createElement("h5");
      year1.textContent = item.release_date;
      year1.style.margin = "10px"
      
      imgdiv.append(img)
      div1.append(title1,year1)
      div.append(imgdiv,div1)
      document.getElementById("searchResult").append(div)
    })
  }
  //onclick fun
  //let arr = [];
  function getdetails(item){
    //console.log(item)
    //arr.push(item)
    //console.log(arr)
    localStorage.setItem("MovieDetails", JSON.stringify(item))
    window.location.href = "Moviedetails.html"
  }