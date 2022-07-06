export const orderFunction = (array, order) => {
    if(order.ordenamiento === 'ZtoA'){
      array.sort((a,b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if(nameA > nameB){
          return -1
        }
        if(nameA < nameB) {
          return 1
        }
        return 0
      })
      return array
    }
    
    if(order.ordenamiento === 'AtoZ'){
      array.sort((a,b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        
        if(nameA < nameB){
          return -1
        }
        if(nameA > nameB) {
          return 1
        }
        return 0
      })
      return array
    }
  
    if(order.ordenamiento === 'higher'){
      array.sort((a,b) => {
        if(a.attack > b.attack){
          return -1
        }
        if(a.attack < b.attack) {
          return 1
        }
        return 0
      })

      return array
    }
  
    if(order.ordenamiento === 'lower'){
      array.sort((a,b) => {
        if(a.attack < b.attack){
          return -1
        }
        if(a.attack > b.attack) {
          return 1
        }
        return 0
      })
      return array
    }
    return array
  }
  
  
export const customFilter = (array, filter) => { 
    if(filter.pokemons === 'custom'){
      return array.filter(p => isNaN(p.id))
    }
    if(filter.pokemons === 'originals'){ 
      return array.filter(p => !isNaN(p.id))
    } 
    if(filter.pokemons === 'all'){
      return array
    } 
  }

  
 export const typeFilter = (array, filter) => {
    if(filter.type === 'All'){
      return array
    }
    if(filter.type) {
      return array.filter(p => p.types.includes(filter.type))
    } 
    return array
  }


  export const pageFunction = (array, page) => {
    return array.slice((page-1)*12, page*12)
  }

  export const pageNumbers = (pokemons) => {
      let pages = []
      let i = 0
      while(pokemons > 0){
        pokemons = pokemons - 12
        pages.push(++i)
      }
       return pages
  
  }

  export const isUrl = (url) => {
/*     return /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/.test(url)
 */  
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url)
}