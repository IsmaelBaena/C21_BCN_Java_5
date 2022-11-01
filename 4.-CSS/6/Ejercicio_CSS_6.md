# Ejercicios CSS 6
Entra en el siguiente enlace (https://css-speedrun.netlify.app/) y realiza los ejercicios que hay dentro de la web.
## Level 1
### *\<div\>*
### &emsp; *\<p\>**here**\</p\>*
### &emsp; *\<p class="foo"\>\</p\>*
### &emsp; *\<p\>**here**\</p\>*
### *\</div\>*
**p:not(.foo)**
## Level 2
### *\<ul\>*
### &emsp; *\<li\>\</li\>*
### &emsp; *\<li\>\</li\>*
### &emsp; *\<li\>**here**\</li\>*
### &emsp; *\<li\>\</li\>*
### &emsp; *\<li\>**here**\</li\>*
### &emsp; *\<li\>\</li\>*
### &emsp; *\<li\>**here**\</li\>*
### *\</ul\>*
**li:nth-of-type(2n+3)**
## Level 3
### *\<div\>* 
### &emsp; *\<span\>**here**\</span\>*
### &emsp; *\<p\> **here***
### &emsp; &emsp; *\<a\>\</a\>*
### &emsp; &emsp; *\<span\>\</span\>*
### &emsp; *\</p\>*
### *\</div\>* 
**div \> \***
## Level 4
### *\<div\>* 
### &emsp; *\<span data-item="foo"\>**here**\</span\>*
### &emsp; *\<span\>\</span\>*
### &emsp; *\<div\>* 
### &emsp; &emsp; *\<span\>\</span\>*
### &emsp; &emsp; *\<span data-item="bar"\>**here**\</span\>*
### &emsp; &emsp; *\<span\>\</span\>*
### &emsp; *\</div\>*
### *\</div\>* 
**[data-item]**
## Level 5
### *\<div\>* 
### &emsp; *\<span\>\</span\>*
### &emsp; *\<code\>\</code\>*
### &emsp; *\<span\>\</span\>*
### &emsp; *\<p\>\</p\>*
### &emsp; *\<span\>**here**\</span\>*
### &emsp; *\<span\>**here**\</span\>*
### &emsp; *\<p\>\</p\>*
### &emsp; *\<code\>\</code\>*
### &emsp; *\<span\>**here**\</span\>*
### &emsp; *\<p\>\</p\>*
### *\</div\>* 
**p ~ span**
## Level 6
### *\<form\>* 
### &emsp; *\<input/\> **here***
### &emsp; *\<input disabled/\>*
### &emsp; *\<input/\> **here***
### &emsp; *\<input/\> **here***
### &emsp; *\<button disabled\>\</button\>*
### &emsp; *\<button\>**here**\</button\>*
### *\</form\>* 
**:enabled**
## Level 7
### *\<ol\>*
### &emsp; *\<li class="me" id="one"\>**here**\</li\>*
### &emsp; *\<li class="you" id="two"\>**here**\</li\>*
### &emsp; *\<li class="me" id="three"\>\</li\>*
### &emsp; *\<li class="you" id="four"\>\</li\>*
### &emsp; *\<li class="me" id="five"\>**here**\</li\>*
### &emsp; *\<li class="you" id="six"\>**here**\</li\>*
### &emsp; *\<li class="me" id="seven"\>\</li\>*
### &emsp; *\<li class="you" id="eight"\>\</li\>*
### &emsp; *\<li class="me" id="nine"\>**here**\</li\>*
### &emsp; *\<li class="you" id="ten"\>\</li\>*
### *\</ol\>*
**#one, #two, #five, #six, #nine**
## Level 8
### *\<div\>* 
### &emsp; *\<span\>\</span\>*
### &emsp; *\<p\>*
### &emsp; &emsp; *\<a\>\</a\>*
### &emsp; &emsp; *\<span\>**here**\</span\>*
### &emsp; *\</p\>*
### &emsp; *\<p\>*
### &emsp; &emsp; *\<span\>\</span\>*
### &emsp; &emsp; *\<a\>\</a\>*
### &emsp; &emsp; *\<span\>**here**\</span\>*
### &emsp; &emsp; *\<span\>\</span\>*
### &emsp; *\</p\>*
### &emsp; *\<a\>\</a\>*
### &emsp; *\<span\>**here**\</span\>*
### &emsp; **
### *\</div\>* 
**a + span**
## Level 9
### *\<div id="foo"\>*
### &emsp; *\<div class="foo"\>\</div\>*
### &emsp; *\<div\>\</div\>*
### &emsp; *\<div\>*
### &emsp; &emsp; *\<div class="foo"\>\</div\>*
### &emsp; &emsp; *\<div\>\</div\>*
### &emsp; *\</div\>*
### &emsp; *\<div class="foo"\>\</div\>*
### *\</div\>*
**#foo \> .foo**
## Level 10
### *\<div\>*
### &emsp; *\<div\>*
### &emsp; &emsp; *\<span\>\</span\>*
### &emsp; &emsp; *\<code\>**here**\</code\>*
### &emsp; *\</div\>*
### &emsp; *\<div\>*
### &emsp; &emsp; *\<code\>\</code\>*
### &emsp; &emsp; *\<span\>\</span\>*
### &emsp; &emsp; *\<code\>**here**\</code\>*
### &emsp; *\</div\>*
### &emsp; *\<div\>*
### &emsp; &emsp; *\<span\>\</span\>*
### &emsp; &emsp; *\<code class="foo"\>\</code\>*
### &emsp; *\</div\>*
### &emsp; *\<span\>\</span\>*
### &emsp; *\<code\>\</code\>*
### *\</div\>*
