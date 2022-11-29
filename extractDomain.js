/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"
 */

const extractDomain = (url) => {
    const list = ['https://www.', 'http://www.', 'https://', 'http://', 'www.']
    let elemLength

    for (let i = 0; i < list.length; i++) {
        if (url.includes(list[i])) {
            elemLength = list[i].length
            break
        }
    }

    const sub = url.substring(elemLength)
    const indexOfDot = sub.indexOf('.')
    return sub.substring(0, indexOfDot)
}

console.log(extractDomain('www.domainnamaaae.com/id/users/'))
console.log(extractDomain('https://www.y7bij94a2-uoqvjiq3z2pi0mlwl3.co.za'))
console.log(extractDomain('http://domainnamaaae.com/id/users/'))