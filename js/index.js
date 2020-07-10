// Iteration 1: Names and Input
let hacker1 = 'Joe' //driver
console.log(hacker1)
let hacker2 = 'Donald' //navigator
console.log(hacker2)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has '+ hacker1.length +' characters.')
}
else if (hacker1.length < hacker2.length){
    console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.')
}
else {
    console.log('Wow, you both have equally long names, ' + hacker1.length ' characters!')
}
// Iteration 3: Loops
for(let i=0;i<hacker1.length;i++){
console.log(hacker1[i].toUpperCase + ' ')}
for(let i=hacker2.length;i>0;i++){
    console.log(hacker1[i])
}
let options;
options = (hacker1.localeCompare(hacker2))
if(options = -1){
console.log("The driver's name goes first")
}
else if(options = 1){
console.log("Yo, the navigator goes first definitely.")
}
else{
console.log("What?! You both have the same name?")
}

//Bonus 1:
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mi libero. Ut pellentesque enim non sollicitudin consectetur. Nam nec odio sollicitudin, blandit lacus sit amet, vestibulum ligula. Nulla augue felis, sagittis a lorem sit amet, venenatis lobortis ex. Nullam a turpis interdum, egestas metus id, consequat sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec orci libero, sagittis at vehicula vitae, sollicitudin vel lacus. Curabitur finibus nunc ac magna ultrices volutpat. Pellentesque in pellentesque nulla. Phasellus fringilla, sapien et pulvinar posuere, nisl neque fringilla sapien, efficitur convallis nunc elit eget lectus. Vestibulum dapibus aliquam venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis nibh ut neque condimentum aliquam. Donec mattis dapibus viverra. Aenean ac faucibus leo, ac vestibulum lacus. Donec molestie vel ex nec commodo. Nam ultricies vehicula vulputate. Pellentesque tempor eros sem, sed rutrum dui commodo ut. Duis condimentum semper quam, ut pellentesque dolor luctus vitae. Morbi vehicula nisi et lacus sollicitudin, at consectetur ante porta. Ut lobortis purus eu pellentesque efficitur. Mauris fringilla venenatis tortor, in egestas velit iaculis at. Cras venenatis vel lorem eu hendrerit. Donec at arcu eget libero elementum faucibus vel in nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed finibus nisi. Suspendisse cursus porttitor imperdiet. Aliquam tincidunt, quam vehicula sollicitudin finibus, arcu nibh varius lacus, vitae molestie mi est eu justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt in elit eget placerat. Fusce elit magna, fermentum et consequat ac, placerat sit amet tellus. Aliquam ornare leo tellus, vel volutpat velit convallis ut. Curabitur scelerisque mollis dolor, laoreet gravida metus faucibus eu. Nulla sem lacus, interdum id ligula vitae, feugiat euismod enim. Curabitur ac aliquet nisl, sed porttitor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nec bibendum mi. Morbi ullamcorper fermentum consequat. Integer condimentum quis nunc ut sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ex ante, aliquet quis varius at, feugiat quis erat. Praesent interdum rutrum est, nec sodales metus mollis ut. Sed in nisi nunc. Ut lobortis consectetur dignissim.'
let counter1 = 0;
let counter2 = 0;
if(let i=0;i<lorem.length; i++){
    if(lorem.includes(' ')){
        counter1 = counter1+1
    }
    else if( lorem.includes('et')){
        counter2 = counter2+1

    }
}
console.log('the number of words is '+counter1)
console.log('et is '+counter2+' times in this text')

//Bonus 2:

let phraseToCheck = prompt('phrase to be check for palindrome: ')
let splitPhrase = phraseToCheck.split('');
let reversed = splitPhrase.reverse();
let result = reversed.join(); 
if(phraseToCheck == result ){
    console.log('yes, it is a palindrome')
}
else{
    console.log('no, it is not a palindrome')
}
