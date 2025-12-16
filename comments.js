for (let i of document.querySelectorAll(".like")) {
	let btn = i;
	btn.addEventListener("click", (e) => {
		let pressed = btn.getAttribute('aria-pressed') === 'true';
		btn.setAttribute('aria-pressed', String(!pressed));
		console.log(pressed)
		btn.textContent = pressed ? 'liked' : 'liked';
	});
}

function addComment(author, txt) {
	document.querySelectorAll(".comment-box")[0].insertAdjacentHTML("beforeend", `
		<div class="comment">
				<div class="comment-author">${author}</div>
				<div class="comment-text">${txt}</div>
				<div class="btn-group comment-btns">
						<button class="btn btn-outline-primary comment-btn like">like</button>
						<button class="btn btn-outline-primary comment-btn reply">reply</button>
						<button class="btn btn-outline-primary comment-btn report">report</button>
				</div>
				<div class="reply invis">
					<input type="text" class="form-control" placeholder="Your name"></input>
					<textarea class="form-control" rows="2" placeholder="Type your reply here..."></textarea>
					<button class="btn btn-primary btn-block">Submit Reply</button>
				</div>
			</div>
	`)
}

function addReply(commentBox, author, txt) {
	commentBox.lastElementChild.classList.toggle("invis");
	let cts = commentBox.getElementsByClassName("comment-text");
	console.log(cts)
	cts.item(cts.length - 1).insertAdjacentHTML("afterend", `
		<div class="comment-author">${author}</div>
		<div class="comment-text">${txt}</div>
	`);
}

document.querySelectorAll(".submit-comment")[0].addEventListener("click", (e) => {
	let form = e.target.parentElement;
	let author = form.querySelectorAll("input")[0].value;
	let txt = form.querySelectorAll("textarea")[0].value;
	console.log(author, txt)
	addComment(author, txt)
})

for (let i of document.querySelectorAll(".reply")) {
	i.addEventListener("click", (e) => {
		i.parentElement.parentElement.querySelector(".reply-form").classList.toggle("invis");
	});
}

for (let i of document.querySelectorAll(".submit-reply")) {
	i.addEventListener("click", (e) => {
		let form = e.target.parentElement;
		let author = form.querySelectorAll("input")[0].value;
		let txt = form.querySelectorAll("textarea")[0].value;
		addReply(form.parentElement, author, txt)
	})
}
