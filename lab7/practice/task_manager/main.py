from models import  TaskManager
from storage import load_tasks, save_tasks
def show_menu():
    print("\nTask Manager")
    print("1. show Tasks")
    print("2. add Tasks")
    print("3. complete Task")
    print("4. delete Task")
    print("5. exit")

def show_tasks(manager):
    tasks = manager.list_tasks()
    if not tasks:
        print("No tasks found.")
    else:
        for task in tasks:
            print("Your tasks:")
            if manager.complete_task(tasks):
                print("[1]",task, "✅")
            else:
                print("[1]",task, "❌")
def add_task(manager):
    title = input("Enter task title: ")
    manager.add_task(title)
    save_tasks(manager.list_tasks())
    print("Task added.")
def complete_task(manager):
    task_id = int(input("Enter task ID to complete: "))
    if manager.complete_task(task_id):
        print("Task marked as completed.")
    else:
        print("Task not found.")
def delete_task(manager):
    task_id = int(input("Enter task ID to delete: "))
    if manager.delete_task(task_id):
        print("Task deleted.")
    else:
        print("Task not found.")

def main():
    storage = storage("tasks.json")
    manager = TaskManager(storage)
    while True:
        

        choice = input("Choose an option: ")
        if choice == "1":
            show_tasks(manager)

        elif choice == "2":
            add_task(manager)
        elif choice == "3":
            complete_task(manager)
        elif choice == "4":
            delete_task(manager)
    
        else:
            break
