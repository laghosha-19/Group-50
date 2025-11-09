//4)შექმენი ობიექტი სახელად student რომელსაც ექნება fullName , scores(scores-უნდა იყოს სია რადგან შეინახოთ რამდენიმე მნიშვნელობა) , ასევე ექნება ორი ფუნქცია 1)averageScore()- რომელიც გამოითცლის საშუალო ქულას , 2)checkStudent() - რომელიც გამოითლის მოსწავლის დონეს ქულების მიხედვით , თუ საშუალო ქულა იქნება 90-ზე მეტი გამოსახეთ კონსოლში შემდეგი ტექსტი ("საუკეთესო სტუდენტი")  , თუ საშუალო ქულა იქნება 90 ზე დაბალი და 60 ზე მაღალი გამოსახეთ "კარგი მოსწავლე" , ხოლო თუ საშუალო ქულა იქნება 60 ზე დაბალი გამოსახეთ "ნორმალური მოსწალე"

const student = {
    name1 : "Jumber",
    surname : "Tyabladze",
    scores : [10,9,8,10,5,7,8],
    avarageScores(){
        let sum = 0
        let avg = sum/this.scores.length
        for (let i of this.scores){
            sum += i
        }
        return avg
    },
    checkStudent(){
        let avg = this.avarageScores()
        if(avg > 90){
            return "საუკეთესო სტუდენტი"
        }else if (avg > 60 && abg < 90){
            return "კარგი მოსწავლე"
        }
        else{
            return "ნორმალური მოსწალე"
        }
    }
}

console.log(student);
student.avarageScore()

