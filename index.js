var girlsNames = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria", "Scarlett", "Penelope", "Layla", "Chloe", "Victoria", "Madison", "Eleanor", "Grace", "Nora", "Riley", "Zoey", "Hannah", "Hazel", "Lily", "Ellie", "Violet", "Lillian", "Zoe", "Stella", "Aurora", "Natalie", "Emilia", "Everly", "Leah", "Aubrey", "Willow", "Addison", "Lucy", "Audrey", "Bella", "Nova", "Brooklyn", "Paisley", "Savannah", "Claire", "Skylar", "Isla", "Genesis", "Naomi", "Elena", "Caroline", "Eliana", "Anna", "Maya", "Valentina", "Ruby", "Kennedy", "Ivy", "Ariana", "Aaliyah", "Cora", "Madelyn", "Alice", "Kinsley", "Hailey", "Gabriella", "Allison", "Gianna", "Serenity", "Samantha", "Sarah", "Autumn", "Quinn", "Eva", "Piper", "Sophie", "Sadie", "Delilah", "Josephine", "Nevaeh", "Adeline", "Arya", "Emery", "Lydia", "Clara", "Vivian", "Madeline", "Peyton", "Julia", "Kai" ]

//  Above is an example of an array.  We use loops with arrays all the time.  You can access an item in an array like this:

var firstItem = girlsNames[0] // This stores the first array item as a new variable.  The number in the brackets is called an index number.

console.log(girlsNames[2])  // This will print the third item in the array

var i = 3
console.log(girlsNames[i]) // This will print the fourth item in the array.  Here we're using a variable as an index number.

// The .length property can show you the length of an array
console.log("The length of this array is: " + girlsNames.length) 



console.log("-------------------------------")



// Question #1: Type console.log(i) inside this For Loop.  This will show you that the loop is running a lot of times (you should see each loop number printed in your console).  Try to use i and the array info above to log each girls's name to the console.

for (let i = 0; i < girlsNames.length; i++) {
    
}

// Question #2:  Do the same thing inside this For In Loop.  Log both the loop number and each girl's name.

for (i in girlsNames) {
    
}

// #3: Log both the loop number and each girl's name in this While Loop.  Careful not to start an infinite loop!

var j = 0
while (j < girlsNames.length) {
    
    j++
}

// #4: Log both the loop number and each girl's name in this For Of Loop.

for (aName of girlsNames) {

}

console.log("-------------------------------")

// Strings can sometimes be treated like mini-arrays.  For instance, the length of the first item in the array can be printed like this:

console.log(girlsNames[0].length) // This prints 6 because "Olivia" is 6 characters long

// This uses a conditional to check if a name is less than 6 characters long
if (girlsNames[2].length < 6) {
    console.log("The name " + girlsNames[2] + " is less than 6 characters long")
} else {
    console.log("The name " + girlsNames[2] + " is NOT less than 6 characters long")
}


// #5: Using the For Loop below, only log girls names that are exactly 6 characters long.  If a name is less than 6 characters long, log "That name is too short".  If a name is greater than 6 characters long, log "That name is too long."  One exception: If the name is "Penelope", log "That name is long be still very nice."

for (let i = 0; i < girlsNames.length; i++) {
    
}


// #6: Add a prompt with a yes or no question to the loop in question #5.  The prompt should run for the last item in the array.  Print something unique if the user types "yes" to the prompt.

// EXAMPLE OF PROMPT:
// var answerToPrompt = prompt("This is a prompt question.")

