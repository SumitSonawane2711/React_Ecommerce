export function fetchCount(amount = 1 ){
    return new Promise(async (resolve) => { 
    const response = await fetch('http://localhost:8000')
    const result = await response.json()
    const data = await response.json()
    resolve({data})
    }
  )
}