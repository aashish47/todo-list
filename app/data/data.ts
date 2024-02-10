export interface Todos {
    id: number;
    todo: string;
}
export const data: Todos[] = [];
for (let index = 0; index < 5; index++) {
    data.push({ "id": index, "todo": `todo-${index}` });
}
