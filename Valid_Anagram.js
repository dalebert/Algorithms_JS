function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  let ctr1 = {};
  let ctr2 = {};
  if (str1.length !== str2.length) {
      return false
  }
  for (let i of str1) {
      ctr1[i] = (ctr1[i] || 0) + 1
  }
  console.log(JSON.stringify(ctr1))
  for (let i of str2) {
      ctr2[i] = (ctr2[i] || 0) + 1
  }
  console.log(JSON.stringify(ctr2))
  for (let key in ctr1) {
      if (!(key in ctr2)) {
          return false
      }
      if (ctr1[key] !== ctr2[key]) {
          return false
      }
  }
  return true
}

validAnagram("cart", "rcat")
