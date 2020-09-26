
                class School {
  constructor (name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name () {
    return this._name
  }
  get level () {
    return this._level
  }
  get numberOfStudents () {
    return this._numberOfStudents
  }
  set numberOfSTudents (number) {
    if (typeof numberOfStudents === "number") {
      this._numberOfStudents = number;
    }
    else {
      console.log ("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  quickFacts () {
    console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`)
  }

  static pickSubstituteTeacher (substituteTeachers) {
    substituteTeachers = []; 
    let random = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers [random];
  }
};

class Primary extends School {
  constructor (name, numberOfStudents, pickUpPolicy) {
    super (name, "primary", numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }
  get pickUpPolicy () {
    return this._pickUpPolicy;
  }
};

class Middle extends School {
  constructor (name, numberOfStudents) {
    super (name, "middle", numberOfStudents);
  }
};

class High extends School {
  constructor (name, numberOfStudents, sportsTeams) {
    super (name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams () {
    return this._sportsTeams;
    console.log(this._sportsTeams);
  }
}

/*Create a PrimarySchool instance */
const lorraineHansbury = new Primary ("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.")

/*Call .quickFacts() on the lorraineHansbury instanc */
lorraineHansbury.quickFacts();

/*Call .pickSubstituteTeacher() on School, and pass the following array*/
School.pickSubstituteTeacher (['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

/*Create a HighSchool instance */
const alSmith = new High ("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

/*Get the value saved to the sportsTeams property in alSmith*/
console.log(alSmith.sportsTeams)
