class Person {
  constructor(props) {
    this.name = props.name
    this.age = props.age
    this.location = props.location
    this.gender = props.gender
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props)
    this.specialty = props.specialty
    this.favLanguage = props.favLanguage
    this.catchPhrase = props.catchPhrase
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`)
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`)
  }
}

class Student extends Person {
  constructor(props) {
    super(props)
    this.previousBackground = props.previousBackground
    this.className = props.className
    this.favSubjects = props.favSubjects
  }

  listSubjects() {
    this.favSubjects.forEach(subject => console.log(subject))
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`)
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`)
  }
}

class ProjectManager extends Person {
  constructor(props) {
    super(props)
    this.gradClassName = props.gradClassName
    this.favInstructor = props.favInstructor
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, '@channel standup time!​​​​​'`)
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
})

const dani = new Instructor({
  name: 'Dani',
  location: 'Seattle',
  age: 30,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Si se puede!`
})

const cedric = new Student({
  name: 'Cedric',
  age: 22,
  location: 'Bay Area',
  gender: 'male',
  previousBackground: 'quality assurance',
  className: 'WebPT5',
  favSubjects: [
    'computer science',
    'history'
  ],
})

const bob = new Student({
  name: 'Bob',
  age: 25,
  location: 'Salt Lake City',
  gender: 'male',
  previousBackground: 'insurance',
  className: 'WebPT5',
  favSubjects: [
    'world history',
    'Spanish',
    'PE'
  ],
})

const monica = new ProjectManager({
  name: 'Monica',
  age: 27,
  location: 'Ann Arbor',
  gender: 'female',
  gradClassName: 'CS10',
  favInstructor: 'Marco',
})

// Person
cedric.speak()

// Instructor
fred.demo('React.js')
dani.grade(cedric, 'JavaScript')

// Student
bob.listSubjects()
cedric.PRAssignment('JavaScript-IV')
bob.sprintChallenge('Advanced CSS')

// Project Manager
monica.standUp('webpt5_monica')
monica.debugsCode(cedric, 'Node.js')
