import { IAttachedShoppingList } from "../pages/recipe_page/recipe_page_components/ingredients/Ingredients";

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
	setAttachedShoppingList,
}: {
	shoppingList: string[];
	dishName: string;
	setAttachedShoppingList: React.Dispatch<React.SetStateAction<IAttachedShoppingList>>;
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
	if (directories) {
		if (isList === -1) {
			directories.push(newTask);
			localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(directories));
			setAttachedShoppingList({ attached: true, error: false });
		} else {
			setAttachedShoppingList({ attached: false, error: true });
			return;
		}
	} else {
		const newToDoList = [newTask];
		localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(newToDoList));
		setAttachedShoppingList({ attached: true, error: false });
	}
};
