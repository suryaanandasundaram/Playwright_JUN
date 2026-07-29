// Requirements: - Create a class named BasePage
// - Create methods like findElement(), clickElement(), enterText() and
// performCommonTasks(). 


export class BasePage{
    element:string;
    constructor(ele:string){
        this.element=ele;
    }
    findElement(){
        console.log(`Found Element-BasePage ${this.element}`)
    }
    clickElement(){
       console.log(`Clicked Element-BasePage ${this.element}`)
    }
    enterText(){
        console.log(`Entered Text-BasePage ${this.element}`)
    }
    performCommonTasks(){
        console.log(`Performed Common Tasks-BasePage ${this.element}`)
    }
}