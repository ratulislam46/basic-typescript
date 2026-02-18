
interface users {
    name: string,
    age: number,
    isActivated: boolean
    occupation: occupation

}

interface users {
    dob: number,

}

enum occupation {
    teacher,
    bussinme
}

const user: users = {
    dob: 23,
    name: 'ratul',
    occupation:occupation.teacher
}
