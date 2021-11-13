window.addEventListener("load", () => {
	let valueTextarea = document.getElementsByClassName("valueTextarea")[0];
	let resultTextarea = document.getElementsByClassName("resultTextarea")[0];
	let preloader = document.getElementsByClassName("preloader")[0];

	valueTextarea.focus();

	valueTextarea.addEventListener("input", async () => {
		res = await fetch("/hash",
		{
			method: "POST",
			body: JSON.stringify({
				value: valueTextarea.value,
			}),
			headers:
			{
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		}).then(res => res.json());

		resultTextarea.value = res.hash;

		valueTextarea.focus();
	});
});