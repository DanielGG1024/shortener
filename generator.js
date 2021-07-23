

function generator() {
    // 定義資料
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const number = '1234567890'
    // 產出密碼
    let collection = []
    collection = collection.concat(lowerCaseLetters.split(''), upperCaseLetters.split(''), number.split(''))
    let password = ''
    for (i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * collection.length)
        password += collection[randomIndex]
    }
    console.log(password)
}

generator()
