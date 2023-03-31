---
title: overview
---

<!-- These docs are a more useable form of, and not a substiute for, the [bonfire specification]() -->

There are a few concepts that will keep coming up repeaedly throughout these docs. 

## Base32

Base 32 represents the numbering system where one character can represent any number between 0 and 31. We use the following character set as a standard, for readability. 

<table style="text-align: center;">
<caption align="top">The Distinct Base 32 System</caption>

<tbody>

<tr>
<th>Value</th>
<th>Symbol
</th>
<td rowspan="10">
</td>
<th>Value</th>
<th>Symbol
</th>
<td rowspan="10">
</td>
<th>Value</th>
<th>Symbol
</th>
<td rowspan="10">
</td>
<th>Value</th>
<th>Symbol
</th></tr>
<tr>
<td>0</td>
<td>0</td>
<td>9</td>
<td>9</td>
<td>18</td>
<td>j</td>
<td>27</td>
<td>u
</td></tr>
<tr>
<td>1</td>
<td>1</td>
<td>10</td>
<td>a</td>
<td>19</td>
<td>k</td>
<td>28</td>
<td>v
</td></tr>
<tr>
<td>2</td>
<td>2</td>
<td>11</td>
<td>b</td>
<td>20</td>
<td>m</td>
<td>29</td>
<td>w
</td></tr>
<tr>
<td>3</td>
<td>3</td>
<td>12</td>
<td>c</td>
<td>21</td>
<td>n</td>
<td>30</td>
<td>x
</td></tr>
<tr>
<td>4</td>
<td>4</td>
<td>13</td>
<td>d</td>
<td>22</td>
<td>p</td>
<td>31</td>
<td>y
</td></tr>
<tr>
<td>5</td>
<td>5</td>
<td>14</td>
<td>E</td>
<td>23</td>
<td>q</td>
</td></tr>
<tr>
<td>6</td>
<td>6</td>
<td>15</td>
<td>f</td>
<td>24</td>
<td>r</td>
</tr>
<tr>
<td>7</td>
<td>7</td>
<td>16</td>
<td>g</td>
<td>25</td>
<td>s
</td></tr>
<tr>
<td>8</td>
<td>8</td>
<td>17</td>
<td>h</td>
<td>26</td>
<td>t</td></tr>

</tbody>
</table>

<!-- 
Distinct Base 32 chart (dyslexic, skips o, l, i): 
lead: 
00          01          10          11

00000 (0)   01000 (8)   10000 (g)   11000 (r)
00001 (1)   01001 (9)   10001 (h)   11001 (s)
00010 (2)   01010 (a)   10010 (j)   11010 (t)
00011 (3)   01011 (b)   10011 (k)   11011 (u)
00100 (4)   01100 (c)   10100 (m)   11100 (v)
00101 (5)   01101 (d)   10101 (n)   11101 (w)
00110 (6)   01110 (e)   10110 (p)   11110 (x)
00111 (7)   01111 (f)   10111 (q)   11111 (y) -->

## GUIDs and thier formatting

We format GUID a bit weirdly when displaying them to the user, but in code we treat them as just 128 consecutive bits. 

We display them to the user by: 

1. Encode the bits in base32, there will be 3 extra bits to encode it in true base32, so we add two moch zeros just before the last 3 (displayed as 'x' in the following guid). This means they will always be much smaller, but it's the best solution. 
3. Place colons every 4 characters. 

So this guid (commas are for reasability only): 

```
01101,00001,01100,10110,01110,00000,01111,10000,10100,11001,00101,00110,11101,01111,00010,01010,11111,10000,10011,01101,01111,11100,11000,01011,01000,xx010
```
Gets displayed as 
`d1cp:e0fg:ms56:wf2a:ygkd:fveb:82`.