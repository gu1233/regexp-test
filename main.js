let str = `
010-1234-4567
theqwer@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
동해물과_백두산이 마르고 닳도록
http://localhost:1234
abbcccdddd
`
// 정규식 생성

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))



// 메소드(test, replace)

// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// str = str.replace(regexp, 'AAA')
// console.log(str)



// 플래그(옵션)

// const regexp = /the/g
// const regexp = /the/gi

// console.log(str.match(regexp))
// console.log(str.match(/the/gi))
// console.log(str.match(/\./gi))
// console.log(str.match(/\.$/gim))



// 패턴(표현)

// console.log(str.match(/d$/gm))
// console.log(str.match(/^t/gim))
// console.log(str.match(/h..p/g))

// console.log(str.match(/fox|dog/g))
// console.log(str.match(/https?/g))
// console.log(str.match(/d{2}/g))

// console.log(str.match(/d{2,}/g))
// console.log(str.match(/d{2,3}/g))
// console.log(str.match(/\b\w{2,3}\b/g))

// console.log(str.match(/[fox]/g))
// console.log(str.match(/[0-9]{1,}/g))
// console.log(str.match(/[가-힣]{1,}/g))

// console.log(str.match(/\w/g))
// console.log(str.match(/\b/g))
// console.log(str.match(/\bf\w{1,}/g))
// console.log(str.match(/\d{1,}/g))
// console.log(str.match(/\s/g))
// const h = `   the hello world       !

// `
// console.log(h.replace(/\s/g, ''))

// console.log(str.match(/.{1,}(?=@)/g))
// console.log(str.match(/(?<=@).{1,}/g))