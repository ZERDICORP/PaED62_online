window.addEventListener("load", () => {
	let sendButton = document.getElementsByClassName("sendButton")[0];
	let valueTextarea = document.getElementsByClassName("valueTextarea")[0];
	let resultTextarea = document.getElementsByClassName("resultTextarea")[0];
	let preloader = document.getElementsByClassName("preloader")[0];

	valueTextarea.focus();

	sendButton.addEventListener("click", async () => {
		preloader.classList.add("preloader__visible");

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

		preloader.classList.remove("preloader__visible");

		valueTextarea.focus();
	});
});