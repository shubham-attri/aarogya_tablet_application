import pyttsx3  # pip install pyttsx3
import speech_recognition as sr  # pip install speechRecognition
import datetime
import wikipedia  # pip install wikipedia
import webbrowser
import os
import smtplib

MASTER = "Arogya"

engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)


# Speak function will speak/Pronounce the string which is passed to it
def speak(text):
    engine.say(text)
    engine.runAndWait()

def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login('kumaraman.rose@gmail.ocm', 'password')
    server.sendmail("harry@gmail.com", to, content)
    server.close()


# This function will take command from the microphone
def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        # print("Listening.")
        audio = r.listen(source)

    try:
        # print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        # print(f"user said: {query}\n")

    except Exception as e:
        # print("Say that again please...")
        query = None

    return query


# main program starting
def main():
    speak("Initializing Jarvis...")
    query = takeCommand()

    # Logic for executing tasks as per the query
    if 'wikipedia' in query.lower():
        speak('searching wikipedia...')
        query = query.replace("wikipedia", "")
        results = wikipedia.summary(query, sentences=2)
        print(results)
        speak(results)

    elif 'the time' in query.lower():
        strTime = datetime.datetime.now().strftime("%H:%M:%S")
        speak(f"{MASTER} the time is {strTime}")

    elif 'open routine tracker' in query.lower():
        print("Opening Routine Tracker")

#     write the same above for book services around you

    elif 'open book services' in query.lower():
        print("Opening Book Services")

    elif 'show helpers around me' in query.lower():
        print("Opening Book Services")


main()


