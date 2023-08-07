

// funcionalidad de sort para ordenar columnas
const dataFunctions = {

  sortData(data, sortType, sortOrder) {
    
    data.sort((a, b) => {
      if (a[sortType] < b[sortType]) { 
        if (sortOrder === true) {
          return -1
        }
      } else { 
        if (sortOrder === false) {
          return -1
        }
      }
    })

    return data
    
  },

  // funcionalidad de filtrado por tipo para los botones
  filterData(data,condition)  {
    data = data.filter(value=>value.type.includes(condition))
    return data
  }
  
}

export default dataFunctions