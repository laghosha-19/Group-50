from turtle import *

speed (150)
width (7)
color ("brown")

penup()
goto (-200,-200)
pendown()

forward (400)
left (90)

forward (250)
left (90)

forward (400)
left (90)

forward (250)
left (90)     #finish of main wall


forward (135)
left (90)
forward (130)

right (90)
forward (90)

right (90)
forward (130)           #door done 

penup()
goto (-200,-200)
pendown()

right (90)
forward(150)

right (90)
forward (500)

right (90)
forward (150)

right (90)
forward (250)

penup()
goto (-350,300)
pendown()
begin_fill ()
color ("brown")



right(180)
right(35)
forward(125)

right(105)
forward (128)



end_fill()



penup ()
goto (-325,235)
pendown()

left (50)
forward (100)

right(90)
forward (140)

right(90)
forward (100)

right(90)
forward (140)    #END OF LEFT BUILDING 



penup ()
goto (-120,50)
pendown()

forward(200)
right (90)
forward(240)

right(90)
forward(194)

penup()
goto (-120,250)
pendown()

begin_fill()
color("brown")
left(180)

right(38)
forward(190)

right(103)
forward (195)
end_fill()

penup()
goto (-70,200)
pendown()

left (51)
forward(140)
right(90)
forward(100)
right (90)
forward(140)
right (90)
forward(100)


penup()
goto(200,-200)
pendown()

right(90)
forward (150)

left (90)
forward (500)
left (90)
forward(150)
left (90)
forward(250)         #start of right wall

penup()
goto(200,300)
pendown()

begin_fill()
color("brown")

right(180)
right(35)
forward(125)

right(108)
forward (128)
end_fill()    #end of roof (right wall)


penup()
goto(325,235)
pendown()


right(127)
forward(100)
left (90)
forward(140)
left(90)
forward(100)
left(90)
forward(140)

exitonclick ()