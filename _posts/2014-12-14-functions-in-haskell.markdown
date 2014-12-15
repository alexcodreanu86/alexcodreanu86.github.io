---
layout: post
title:  Functions in Haskell
date:   2014-12-14 12:15
categories: learning Haskell
---

So recently I started learning [Haskell](https://www.haskell.org/) and one of the most interesting things
about this language was to find out that a function in Haskell only takes one argument. If you are like me you are probably asking yourself:
What are the function looking structures that look like the next piece of code:

{% highlight haskell %}
addNumbers :: Int -> Int -> Int -> Int
addNumbers x y z = x + y + z

addNumbers 1 2 3
=> 6
{% endhighlight %}

It definitely looks like a function that takes 3 arguments, right? Well... that is syntactic sugar provided by Haskell to make it
look like this function is taking three arguments. The signature of this function gives us a diagram of what the skeleton
of the function looks like. But in order to understand what is goind on we have to dive into `lambdas`.
This is the syntax for defining a lambda:

{% highlight haskell %}
addThreeToNumber :: Int -> Int
addThreeToNumber = \x -> x + 3

addThreeToNumber 5
=> 8

{-
Notice the signature of the lambda is the same signature that
we would have for a function that does the same thing:

addThreeToNumber :: Int -> Int
addThreeToNumber x = 3 + x

when writting code this version is the preferred way
-}
{% endhighlight %}

Now in my previous post about [Procs & Lambdas](/teaching/myself/how/to/learn/2014/06/06/procs-and-lambdas/) in `Ruby` I mentioned
that clojures (like `lambda`'s) memorize the scope they were created in. The same is valid for clojures in `Haskell`. Let's look at the
next example:

{% highlight haskell %}
lambdaFactory :: Int -> Int -> Int
lambdaFactory factoryArg = \x -> factoryArg + x

-- creating a lambda that adds numbers to three
addToThree = lambdaFactory 3 -- here variable factoryArg takes the value of 3

-- creating a lambda that adds numbers to five
addToFive = lambdaFactory 5  -- here variable factoryArg takes the value of 5

-- let's see what happens when we run them
addToFive 4   -- x = 4 and factoryArg = 5
=> 9

addToThree 4  -- x = 4 and factoryArg = 3
=> 7
{% endhighlight %}

In the example above we can see that `addToThree` has memorized the value of the variable `factoryArg` as being `3` even though the
next lambda creation set's the value of `factoryArg` to 5. So `addToThree` has memorized the scope it was created in.
Also notice that since we gave `lambdaFactory` only one argument it returns the lambda inside of it with the value of `x` assigned to the variable `factoryArg`.
A different way to write the `lambdaFactory` function could be:

{% highlight haskell %}
lambdaFactory :: Int -> Int -> Int
lambdaFactory factoryArg x = factoryArg + x

-- OR
lambdaFactory = (+)           -- let's not forget that + is a function as well

addToThree = lambdaFactory 3

addToThree 4
=> 7

lambdaFactory 3 4
=> 7
{% endhighlight %}
(**Note:** If you put both `lambdaFactory` definitions in the same file a compile exceptions will be raised)

In the examples above we get to see the different ways to achieve the same result.

When we called the `lambdaFactory` with two arguments it returned their sum.
Let's analyze what happened there. So we called `lambdaFactory` and it found the first argument, then it returned the `lambda` inside of it. The returned `lambda` found
the second argument and it processed the sum of the two arguments after `lambdaFactory`.

When we created `addToThree` we gave `lambdaFactory` only one argument and it just returned the `lambda` that it contains. `addToThree` here is a **partially applied function**.
What does this mean you ask? Well let's think about the `lambda` inside the `lambdaFactory` as an inner function that takes an argument and has the value of the argument of
the outer function (`lambdaFactory`) in its scope. When the inner `lambda` is returned it has the value o `factoryArg` assigned already, now it just needs one more argument to be
able to calculate the sum of the two numbers. It just needs one more argument to be complete.

I think that now we are ready to tackle the example in the beginning of the blog. Let's see what would the non syntactic sugar version look like:
{% highlight haskell %}
addNumbers :: Int -> Int -> Int -> Int
addNumbers = \x -> \y -> \z -> x + y + z

addNumbers 1 2 3
=> 6
{% endhighlight %}

So that looks a bit wierd let's try and group them for better readability:
{% highlight haskell %}
addNumbers :: Int -> (Int -> (Int -> Int))
addNumbers =  \x  ->  (\y ->  (\z -> x + y + z))
{% endhighlight %}

So now if we look at the signature of the function and the function definition we can see the resemblance. If we consider the signature `Int -> Int` as a
`function/lambda` that takes one argument of type `Int` add has a return of type `Int` as well, then let's try and interpret the signature of `addNumbers`:

{% highlight haskell %}
addNumbers :: Int -> (Int -> (Int -> Int))
--                #1      #2      #3
{% endhighlight %}

So let's interpret each arrow or lambda:

- `lambda #1` takes an argument of type `Int` and returns `lambda #2`
- `lambda #2` takes an argument of type `Int` and returns `lambda #3`
- `lambda #3` takes an argument of type `Int` and returns a value of type `Int`

This is also why the signature for the return of any function doesn't really stand out from the signature for the args.

Let's take a look at the function definition:

- `lambda #1` takes an argument named `x` and returns `lambda #2`
- `lambda #2` takes an argument named `y` and returns `lambda #3`
- `lambda #3` takes an argument named `z` and returns the sum of `x y z` which is of type `Int`

{% highlight haskell %}
addNumbers =  \x  ->  (\y ->  (\z -> x + y + z))
--                #1      #2      #3
{% endhighlight %}

This is what is actually happening when you declare a function that takes multiple arguments.
Now when you will hear that all the functions in Haskell actually take just one argument you will know what it actually means. Functions with multiple arguments in their
definitions are just syntactic sugar that Haskell translates into nested code blocks that each take one argument with the deepest one actually calculating the return value.
As we saw in our case the body of the deepest block was `x + y + z` just like the body of the function defined in the beginning.

I hope that this is going to be helpful to anyone that is trying to understand how functions work in Haskell. While it's an amazing language, it does tend to be
intimidating in the beginning of the journey because of the different aproach one needs to take in order to understand some concepts. I also hope that writting function
type signatures will be less intimidating from now on.

###Resources:

- [Learn You a Haskell for Great Good!](http://learnyouahaskell.com/)
- [Real World Haskell](http://book.realworldhaskell.org/)
