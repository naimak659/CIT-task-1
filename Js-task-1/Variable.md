
Variable is a way to store some data in name. Also it's called "named storage". 
To create variable in javascript we can use `var` keyword (var is reserved keyword, so we can't use it like a name or something else). 
## How variable work in javascript 

**1**
We can use `var` and after that mention or write some name. Ex: 
```js
var ok;
```
After that we can assign any data to `ok` variable. Ex:
```js

var ok;

ok = "hurray! We just assigned some string to a variable."
```
**2**
There another way to assign variable: 
```js

var intro = "hello, I'm Naim Islam."
```
> To call a variable we can use alert() or console.log()

**3**
Instead of using many `var` to assign many variables, 
We can assign multiple variable by using one `var` , to avoid conflict between different variable we have to use `,` in between every variable. Ex:
```js

var intro = "Hello, I'm naim Islam" ,
	Message = "I'm creating this note for myself. If you benefited by this note, it's my pleasure."
```
> [!NOTE]
> **Declaring a same named variable twice**:
> 
> একই নাম দিয়ে যদি দুইবার variable তৈরি করি তবে পরবর্তী variable অগ্রাধিকার বেশি পাবে। নিচে এর উদাহরণ দেয়া হলো:

```JS

var intro = "hello"
// If we again use the same name in variable it will define the last one
var intro= "ok!" //Output: ok! 
```

## How does variable work in background?

Variable সাধারণত জমা করা হয় data area তে। প্রত্যেকটা variable এর unique নাম ব্যবহার করতে হয় এর জন্য। নাহলে পরে সমস্যা হবে চিহ্নিত করতে। যা পরবর্তী তে আপনার code এ bug হয়ে যাবে।
আমরা চিন্তা করতে পারি, একটা বক্স আছে যার নাম `intro` এই intro তে আমরা কিছু লিখে দিলাম সেই লিখা টা বক্সে জমা থাকবে। যেমন:
```js 

var intro = "আমি নাঈম ইসলাম।"
```

পরবর্তী তে যদি আমি intro তে কোনো পরিবর্তন আনি। তাহলে তা intro এর বক্স এর পূর্ববর্তী data delete করে নতুন data প্রবেশ করিয়ে দেয়। যেমন
```js 

intro = "আমি পরিবর্তন করেছি।"
```

এখন intro ডাটা যদি `console.log(intro)` লিখি তাহলে output হবে `আমি পরিবর্তন করেছি।`


## Variable naming

আবার আমরা নামকরণ নিয়ে কিছু শিখে নিব। Javascript এ variable এর নাম ব্যবহারের সময় সাবধানতা অবলম্বন করতে হয়। পরবর্তীতে একই নাম ব্যবহারের জন্য আপনার কোডে bug দেখা যেতে পারে। নিয়মগুলো হলো:
1. নামগুলো letter, digit অথবা কোনো symbol (যেমন: $ অথবা __ )
2. প্রথম অক্ষর কোন প্রকারের digit হইতে পারবে না। যেমন: `var 12the;`
3. এমনকি আপনারা $ অথবা _ ব্যাবহার করতে পারেন নামকরণ এর জন্য `var $ = 1 `
4. জাভাস্ক্রিপ্টে case matter করে। যেমন: আপনি যদি `var car;` অথবা `var CAR;` দেন তবে এইটা সম্পূর্ণ ভিন্ন variable হিসাবে গণ্য হবে।
5. জাভাস্ক্রিপ্ট এ reserved নাম আছে। যেমন `const, let, function, return` ইত্যাদি এইসব কিছু variable এর নাম হিসাবে ব্যাবহার করা যাবে না ।
