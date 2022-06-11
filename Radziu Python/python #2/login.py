from tkinter import *
from tkinter import messagebox

def login1():
    okno1 = Tk()
    okno1.geometry("350x500")
    okno1.title("login system")
    okno1.resizable(0, 0)
    Frame(okno1, width=400, height=500, bg="#03041f").place(x=0, y=0)
    Frame(okno1, width=250, height=400, bg="white").place(x=50, y=50)
    # pole label1
    l1 = Label(okno1, text="Login", bg="white")
    font1 = ("Arial", 13)
    l1.config(font=font1)
    l1.place(x=80, y=100)
    # pole Entry 1
    entry9 = Entry(okno1, width=20, border=0)
    entry9.config(font=font1)
    entry9.place(x=80, y=130)
    # pole label 2
    l2 = Label(okno1, text="Password", bg="white")
    font1 = ("Arial", 13)
    l2.config(font=font1)
    l2.place(x=80, y=160)
    # pole Entry 2
    # można zastosować krawędź:
    # , relief = RIDGE oraz krawędź = borderwidth = 1
    entry8 = Entry(okno1, width=20, border=0)
    entry8.config(font=font1)
    entry8.place(x=80, y=190)
    #sgsgssshhshs
    l2 = Label(okno1, text="Re-Password", bg="white")
    font1 = ("Arial", 13)
    l2.config(font=font1)
    l2.place(x=80, y=220)
    # pole Entry 2
    # można zastosować krawędź:
    # , relief = RIDGE oraz krawędź = borderwidth = 1
    entry7 = Entry(okno1, width=20, border=0)
    entry7.config(font=font1)
    entry7.place(x=80, y=250)
    # podkreślenie
    Frame(okno1, width=200, height=2, bg="#141414").place(x=80, y=150)
    Frame(okno1, width=200, height=2, bg="#141414").place(x=80, y=210)
    Frame(okno1, width=200, height=2, bg="#141414").place(x=80, y=270)
    # zastanowić się jak zrobić żeby ta funkcja znalazla w innym pliku!


    def reje():
        if entry8.get() == entry7.get():
            beb = entry9.get()+entry8.get()
            f = open("baza.txt", "a+")
            f.write(beb + "\n")
            f.close()
            okno1.destroy()
            from glowne import okno
            okno.deiconify()
        else:
            messagebox.showinfo(entry9.get()+" is dump",message="Password and Re-Password is not =")


    przycisk = Button(
        okno1, width=20, bg="red", text="Zarejestruj się", fg="white", border=0, command=reje
    ).place(x=100, y=340)
    okno1.mainloop()
