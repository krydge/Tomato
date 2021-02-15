import java.time.LocalDateTime
import java.time.LocalDateTime.*
import kotlin.math.round
import java.util.Scanner

fun main() {
    //start pomodaro with 15 minutes work time
    //increse rounds count
    //check round count if less than 4
        //start break time of 5 minutes
    //else
        //reset rounds count to zero
        //start break timer with 30 minutes
    //start pomodaro with 15 minutes work time

    //menu
    val scanner= Scanner(System.`in`)
    println("How long should your work periods be? We recommend between 15 and 25 minutes.")
    val workingTimeInSeconds= convertMinutesToSeconds(scanner.nextDouble());
    println("How long should your short break be? We recommend less than 10 minutes.")
    val shortRestTimeInSeconds=convertMinutesToSeconds(scanner.nextDouble());
    println("How long will your long break be? We recommend between 20 to 30 minutes.")
    val longRestTimeInSeconds=convertMinutesToSeconds(scanner.nextDouble());

    var rounds=0;
    while(true) {
        workTimer(workingTimeInSeconds);
        rounds++;
        if (isFourthRound(rounds)) {
            rounds = 0;
            breakTimer(longRestTimeInSeconds);
        }
        else{
            breakTimer(shortRestTimeInSeconds)
        }
    }

}

fun workTimer( timeInSeconds: Double) {
    var passedTime=0.0;
    println("Work Time of "+convertSecondsTOMinutes(timeInSeconds)+" minutes")
    while (passedTime != timeInSeconds)
    {
        println("Work time Remaining: "+(remainingTime(timeInSeconds, passedTime)))
        Thread.sleep(1000);
        passedTime++;
    }
}
fun breakTimer( timeInSeconds: Double) {
    var passedTime=0.0;
    println("Break Time of "+convertSecondsTOMinutes(timeInSeconds)+" minutes")
    while (passedTime != timeInSeconds)
    {
        println("Break time Remaining: "+(remainingTime(timeInSeconds, passedTime)))
        Thread.sleep(1000);
        passedTime++;
    }
}
fun remainingTime(timeInSeconds: Double, passedTime:Double):Double{
    return (timeInSeconds-passedTime)
}
fun isFourthRound(rounds: Int): Boolean {
    if(rounds<4){
        return false;
    }
    return true;
}
fun convertMinutesToSeconds(minutes:Double):Double{
    return minutes*60;
}
fun convertSecondsTOMinutes(seconds:Double):Double{
    return seconds/60;
}