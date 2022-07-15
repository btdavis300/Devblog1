Say hello to my little (VERY helpful) friend: console.log()

## If you are anything like me
you got into the tech field from switching careers. You wanted some different. You wanted a new challenge. You wanted to work in a field that is as inclusive as it's advertised. The start of my journey into software engineering was **very** exciting, but very daunting. You are welcomed with your first "Hello World!" and feel as if this new field will be streamlined, the learning will be a steady climb, and each new concept will be easier to grasp than the last.

_...That was far from the truth._ I was bombarded with new. terminology, my progress was as uneasy as a sine wave, and every time I learned a new concept I felt like I was starting from scratch. Fortunately, it **DOES** get better.

The colloquial antidote "Practice Makes Perfect" is by far one of the best practice methods to learn a new language or concept in software development, but sometimes you can spin your wheels trying to solve a problem. I definitely encountered this a numerous of times when I first started the Software Engineering program at [Flatiron School](https://flatironschool.com/) (shout to Flatiron, if anyone is interested in a proven bootcamp, I would definitely recommend checking out their programs they offer.) I would learn a new topic, try to play around with the code, and attempt one of their labs. I would routinely be "stumped" and couldn't understand why I wasn't able to get my code to work. Fortunately, there was someone, or rather, _something_ that was about to take me under its wing and show me the way of debugging. 

!["This is the way" from The Mandalorian on Disney+.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gu06wwe4aiwpdt7jk99m.gif)


---

###Console.log()
is your friend! I use console.log **CONSTANTLY** when I am writing new code. It can help you uncover a wide array of errors, small and large. My golden rule when writing code is to console.log() almost every step of the process. Might over the top, but I don't want errors to suddenly start popping up down the line when my code becomes much more complicated.  Sometimes the error would be so small, but right in front of my face, I wouldn't be able to find it. That's where console.log() can really save your a lot of time and frustration 😅. Let me show you the method to my madness...


Let's say we want to use JavaScript to set up some event listeners to two buttons that when pressed, will either add or subtract a number by one in a <p> element. So here is my HTML code that I have set up for this example...


![html code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/stwh3ib4eh54c8j0auoe.png)

The image above is my HTML that wrote in [VSCode](https://code.visualstudio.com/). The two things to pay attention to are the id names and the location of my `<script>`. The id names for the `p` and two `button` elements are important because I will reference them in my JavaScript. The `script` tag is in my head element. If you are going to put your script in your head, it is highly recommended to use the **defer** attribute, so your JavaScript loads after the HTML page has been loaded. That way, JS can see what it's going to use its functional magic on.

Moving along, once we set up our HTML file, and we have our script in and ids, I was to first our FIRST console.log() to make sure everything is working. Write this block of code in your .js file:

```
console.log("I am connected!")
```
Next, open up your HTML file in your browser (don't forget to save your files!), open up your Dev Tools (right click > Inspect if you are a Mac user like myself), and see what the console has told you. Hopefully you will see this message below:


![console.log(I am connected!)](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yldge7dge8ki0ohle24n.png)

**Congratulations!** You have your first successful console.log()! What this console is saying to you, is that you have successfully connecting your .js file to your .index file. Imagine writing ALL your JavaScript code and just to simply get a message that reads **"ERR_FILE_NOT_FOUND"**. You would pull out all of your hair.

---
Moving along, let's now target our ids and create variable names, using `document.querySelecter` (`.getElementById` will also work in this case!) After our variable declarations, you should...YOU GUESSED IT! You should console.log() to make sure you targeted the right elements.

```
let add1 = document.querySelector('#add1')
let subtract1 = document.querySelector('#subtract1')
let counter = document.querySelector('#counter')

console.log(add1)
console.log(subtract1)
console.log(counter)
```
Once your saved your change, refresh your browser, and your console should say this: 

![console.log() targeted IDs](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bh3nqqn1a9mtc24corhz.png)

Your console has pinpointed your elements, you can hover over each to make sure it's the right element. I find this a necessary step, because if you misspell on of your target, or use wrong syntax, your console will tell you which line is disrupting the code.


Great, we have our variables, now we need to set up some event listeners to tell JavaScript to _listen_ for a click to then invoke our functions:

```
add1.addEventListener('click', counterPlus)
subtract1.addEventListener('click', counterMinus)
```
Try to think ahead of my steps and you'll discover....yes I'm going to console.log() to check that my event listeners work. The functions I have written above simply have console.log():

```
function counterPlus() {
    console.log("I was clicked!")
}

function counterMinus() {
    console.log("I was clicked!")
}
```

Awesome! My event listeners work! Let's pick up the pace...

---
I've set up my code for the counter functions, but I stumbled into a problem. I'm getting an error message:

![error message1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ouxj8u6iogys9yafmvw6.png)

What? I was confident my code works. Let's click on the index line reference on the right side of the console that reads: 

> index.js.8


![error message2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fbks9frchj2bqn8e5ce9.png)

Take an extra close look at the function declaration, what do you notice?

No `()` in the declaration! How does JavaScript know it's a function without it? Thank you console.log(). After some slight edits to my functions we have:

```
function counterPlus {
    counter.textContent = Number(counter.textContent) + 1
}

function counterMinus {
    counter.textContent = Number(counter.textContent) - 1
}
```

And _Voila!_, our code works!

---

## Takeaways
While console.log() is a simple tool that helps you log your code, it can be a **_powerful_** tool that can save you a lot of time and energy wasted on a small mistake like a syntax error. This blog was a minute example of how you can use console.log(). It can expose what's under the hood that you might not initially realize. Console.log() every step of the way!

If you have made it this far, thank you for reading my 1st tech blog post.
If you are interested in looking at the full code, click this [link](https://github.com/btdavis300/Devblog1).

'Til next time!
