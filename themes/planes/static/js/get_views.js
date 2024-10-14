async function get_views(){
  let url = "https://micro-views.vercel.app/api/views"
  let website_url = "https://thefriendlyskies.net"
  const response = await fetch(url,{
    method: "GET"
  })
  const views = await response.json()

  let view_counts = document.getElementsByClassName("view-count");

  let urls = {}
  for (let obj of views){
    urls[obj.url] = obj.views
  }

  for (let element of view_counts) {
    let slug = element.dataset.slug
    let elem_url = website_url.concat(slug.substring(0, slug.length - 1))
    let item = urls[elem_url]
    if (item !== undefined){
      element.innerHTML = item
    }
    else{
      element.innerHTML = "0"
    }
    element.parentElement.style.display = "block"
  };
}

get_views()