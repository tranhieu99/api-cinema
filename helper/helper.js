const transTypeNameToTypeId = typeName => 
 typeName.split(' ')
 .map(
     item => item.charAt(0)
 .toLowerCase()
 )
 .join('')

 module.exports = {
     transTypeNameToTypeId
 }