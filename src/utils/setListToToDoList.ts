export interface IDirectory {
	id: string;
	title: string;
	thisDirectoryTasks: ITask[];
}

export interface ITask {
	taskId: string;
	taskName: string;
	description?: string;
	priority: string;
	completed: boolean;
}

const TO_DO_LIST_KEY = "ToDoList";

export const setListToToDoList = ({
	shoppingList,
	dishName,
}: {
	shoppingList: string[];
	dishName: string;
}) => {
	const getItem = () => {
		const storage = localStorage.getItem(TO_DO_LIST_KEY);
		if (storage) return JSON.parse(storage);
	};
	const tasks: ITask[] = shoppingList.map((item, index) => {
		return { taskId: index.toString(), completed: false, priority: "priority 3", taskName: item };
	});
	const directories: IDirectory[] | undefined = getItem();
	const newTask: IDirectory = { id: dishName, title: dishName, thisDirectoryTasks: tasks };
	const findNewTaskIndex = () => {
		if (directories) {
			const index = directories.findIndex((item) => item.id === newTask.id);
			return index;
		}
	};
	const isList = findNewTaskIndex();
	console.log(isList);
	if (directories) {
		if (isList === -1) {
			directories.push(newTask);
			localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(directories));
		} else return;
	} else {
		const newToDoList = [newTask];
		localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(newToDoList));
	}
};
