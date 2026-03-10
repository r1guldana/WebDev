class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Sound"

    def info(self):
        return f"{self.name} is {self.age} years old."

    def __str__(self):
        return f"{self.species}: {self.name}, Age: {self.age}"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball!"


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def speak(self):
        return "Meow!"

    def scratch(self):
        return f"{self.name} is scratching the sofa!"