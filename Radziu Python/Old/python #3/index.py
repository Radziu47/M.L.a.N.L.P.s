from tkinter import *
from tkinter import messagebox

okno = Tk()
okno.geometry("350x500")
okno.title("login system")
okno.resizable(0, 0)
Frame(okno, width=400, height=500, bg="#03041f").place(x=0, y=0)
Frame(okno, width=250, height=400, bg="white").place(x=50, y=50)
l1 = Label(okno, text=x, bg="white")
font1 = ("Arial", 13)
l1.config(font=font1)
l1.place(x=110, y=200)
