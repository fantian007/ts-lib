type A = [() => void, (id: string) => string] extends infer P ? P : never;

function show(id, name) {

}

const a = show[0];