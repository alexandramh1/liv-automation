export default function generateDate(){
    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()

    //let todaysDate = `${month} ${day}, ${year}`
    let todaysDate = `${day}`

    return todaysDate
}