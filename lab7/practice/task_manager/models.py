class Task:
  
    
    def __init__(self, task_id, title, description, completed=False):

        self.id = task_id
        self.title = title
        self.description = description
        self.completed = completed
    
    def mark_completed(self):
        self.completed = True
    
  
    
    def __str__(self):
        status = "✅" if self.completed else "❌" 
        return f"{status} [{self.id}] {self.title}: {self.description}"
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'completed': self.completed
        }
    def from_dict(data):
        return Task(
            task_id=data['id'],
            title=data['title'],
            description=data['description'],
            completed=data['completed']
        )
class TaskManager:
    def __init__(self, storage):
        self.storage = storage
        self.tasks = self.storage.load_tasks()
    def get_id_next(self):
        if not self.tasks:
            return 1
        return max(task.id for task in self.tasks) + 1
    def add_task(self, title):
        self.tasks.append(Task(self.get_id_next(), title, ""))
        self.storage.save_tasks(self.tasks)
    def list_tasks(self):
        return self.tasks
    def complete_task(self, task_id):
        for task in self.tasks:
            if task.id == task_id:
                task.mark_completed()
                self.storage.save_tasks(self.tasks)
                return True
        return False
    def delete_task(self, task_id):
        for i, task in enumerate(self.tasks):
            if task.id == task_id:
                del self.tasks[i]
                self.storage.save_tasks(self.tasks)
                return True
        return False