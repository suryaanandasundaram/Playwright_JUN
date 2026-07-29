



// Step 1: Create a class 
class Student{
// Step 2: Add Properties
// Add the following properties:
// studentName (string)
// course (string) 
    studentName: string
    course:string
    
    constructor(stuName:string,courseName:string){
// Step 3: Create a Constructor
// Create a parameterized constructor that accepts:
//  studentName
//  course
// Initialize the properties using the this keyword.
        this.studentName = stuName
        this.course =courseName
    }
    displayDetails(){
// Step 4: Create a Method
// Create a method named displayDetails() that prints:
// Student Name: Hari
// Course: Playwright with TypeScript
        console.log(`Student Name : ${this.studentName}`)
        console.log(`Course : ${this.course}`)
    }

}
// Step 5: Create Objects
// Create two student objects using the new keyword.
// Example values:
//  Student 1: Hari, Playwright with TypeScript
//  Student 2: Ram, Selenium with Java
const student1 = new Student("Hari", "Playwright with TypeScript")
const student2 = new Student("Ram","Selenium with Java")

// Step 6: Invoke the Method
// Call the displayDetails() method for both objects.
student1.displayDetails();
student2.displayDetails();

