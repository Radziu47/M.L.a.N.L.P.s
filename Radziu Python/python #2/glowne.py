from tkinter import *
from tkinter import messagebox
from okno1 import openW1
from login import *


okno = Tk()
okno.geometry("350x500")
okno.title("login system")
okno.resizable(0, 0)
Frame(okno, width=400, height=500, bg="#03041f").place(x=0, y=0)
Frame(okno, width=250, height=400, bg="white").place(x=50, y=50)
# pole label1
l1 = Label(okno, text="User", bg="white")
font1 = ("Arial", 13)
l1.config(font=font1)
l1.place(x=80, y=200)
# pole Entry 1
entry1 = Entry(okno, width=20, border=0)
entry1.config(font=font1)
entry1.place(x=80, y=230)
# pole label 2
l2 = Label(okno, text="Password", bg="white")
font1 = ("Arial", 13)
l2.config(font=font1)
l2.place(x=80, y=260)
# pole Entry 2
# można zastosować krawędź:
# , relief = RIDGE oraz krawędź = borderwidth = 1
entry2 = Entry(okno, width=20, border=0)
entry2.config(font=font1)
entry2.place(x=80, y=290)
# podkreślenie
Frame(okno, width=200, height=2, bg="#141414").place(x=80, y=250)
Frame(okno, width=200, height=2, bg="#141414").place(x=80, y=310)
# zastanowić się jak zrobić żeby ta funkcja znalazla w innym pliku!

sd = True
def sprawdzam1():
    qw = entry1.get() + entry2.get() + "\n"
    baza = open("baza.txt", "r")
    fa = baza.readlines()
    yu = 0
    for x in fa:
        yu = yu +1
        if x == qw:
            sprawdzam()
            yu = 0
        if len(fa) == yu:
            yu = 0
            messagebox.showinfo("Błąd",message="Login lub Hasło są niepoprawne")




def sprawdzam():
        messagebox.showinfo("zalogowany")
        openW1()


def Nukii():
    okno.withdraw()
    login1()


przycisk = Button(okno, width=20, bg="darkred", text="ok", fg="white", border=0, command=sprawdzam1
).place(x=100, y=340)

przycisk1 = Button(okno, width=20, bg="darkblue", text="Zarejestruj", fg="white", border=0, command=Nukii
).place(x=100, y=380)

okno.mainloop()
