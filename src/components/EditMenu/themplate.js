
function renderTitle() {
	return `
		<h2>Редактирование меню</h2>
	`
}

function inputRow(item, index) {
	return `
		<input data-id="${index}" placeholder="Введите текст" />
	`
}

export function getTemplate(store) {
	const menuItem = [
		{},
		{},
		{}
	] // from store;
	const title = renderTitle();
	const renderItems = menuItem.map(inputRow).join('');

	const result = [title, renderItems]

	return result.join('');
}
