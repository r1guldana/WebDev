from models import Animal, Dog, Cat

def main():

    dog1 = Dog("Pesik", 3, "Chihuahua")
    cat1 = Cat("Murka", 2, "Siamese")
    animal1 = Animal("animal", 5, "Unknown")

    animals = [dog1, cat1, animal1]

    for animal in animals:
        print(animal)
        print(animal.info())
        print(animal.speak())
        print()

    print(dog1.fetch())
    print(cat1.scratch())


if __name__ == "__main__":
    main()