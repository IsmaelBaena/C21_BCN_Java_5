# Ejercicios CSS 3
Resolver los ejercicios planteados dentro de la siguiente página: *https://flukeout.github.io/*
## *Select the plates*
plate
## *Select the bento boxes*
bento
## *Select the fancy plate*
#fancy
## *Select the apple on the plate*
plate apple
## *Select the pickle on the fancy plate*
#fancy pickle
## *Select the small apples*
.small
## *Select the small oranges*
orange.small
## *Select the small oranges in the bentos*
bento orange.small
## *Select all the plates and bentos*
plate, bento
## *Select all the things!*
\*
## *Select all the things!*
plate \*
## *Select every apple that's next to a plate*
plate + apple
## *Select the pickles beside the bento*
bento ~ pickle
## *Select the apple directly on a plate*
plate > apple
## *Select the top orange*
plate orange:first-child
## *Select the apple and the pickle on the plates*
plate :only-child
## *Select the small apple and the pickle*
apple, pickle:last-child
## *Select the 3rd plate*
:nth-child(3)
## *Select the 1st bento*
bento:nth-last-child(3)
## *Select first apple*
apple:first-of-type
## *Select all even plates*
plate:nth-of-type(even)
## *Select every 2nd plate, starting from the 3rd*
plate:nth-of-type(2n+3)
## *Select the apple on the middle plate*
plate apple:only-of-type
## *Select the last apple and orange*
apple:last-of-type, orange:last-of-type
## *Select the empty bentos*
bento:empty
## *Select the big apples*
apple:not(.small)
## *Select the items for someone*
\[for\]
## *Select the plates for someone*
plate\[for\]
## *Select Vitaly's meal*
\[for=Vitaly\]
## *Select the items for names that start with 'Sa'*
\[for^=Sa\]
## *Select the items for names that end with 'ato'*
\[for$=ato\]
## *Select the meals for names that contain 'obb'*
\[for*=obb\]