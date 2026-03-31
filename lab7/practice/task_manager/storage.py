def load_tasks(filename: str):
    
    import json
    from .models import Task
    
    try:
        with open(filename, 'r') as f:
            data = json.load(f)
        return [Task.from_dict(item) for item in data]
    except FileNotFoundError:
        return []
def save_tasks(filename: str, tasks):
    import json
    with open  (filename, 'w') as f:
        json.dump([task.to_dict() for task in tasks], f, indent=4) 
