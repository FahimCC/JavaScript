//! Object & this

const myBioData = {
  myName: {
    fName: 'Fahim',
    lName: 'Faysal',
    sName: 'Nasif',
  },
  myAge: 23,
  myOccupation: 'student',
  mySubject: 'CSE',
  getMyInfo() {
    console.log(
      `Name: ${myBioData.myName.fName} ${this.myName.lName} ${this.myName.sName}\nAge: ${this.myAge}`
    );
  },
};

myBioData.getMyInfo();
