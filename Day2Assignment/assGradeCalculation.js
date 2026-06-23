function studentScore(score){
    switch (true) {
        case score >= 90:
            console.log("Grade A");
            break;
        case score >= 80:
            console.log("Grade B");
            break;
        case score >= 70:
            console.log("Grade C");
            break;
        case score >= 50:
            console.log("Grade D");
            break;
        case score < 50:
            console.log("Grade F");
            break;        
        default:
            console.log("Invalid Score");
    }
}
  

studentScore(90);
studentScore(80);
studentScore(35);
studentScore("test");