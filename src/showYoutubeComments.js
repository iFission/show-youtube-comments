showCommentsOnTheRight();

function showCommentsOnTheRight() {
	if (!comments() || !watchNext()) {
		window.setTimeout(showCommentsOnTheRight, 500);
		return;
	}
	swapCommentsAndWatchNext();
}

function swapCommentsAndWatchNext() {
	if (!panelsContainNodes()) {
		return;
	}
	let commentsNode = leftBelowPanel().removeChild(comments());
	let watchNextNode = rightPanel().removeChild(watchNext());
	leftBelowPanel().appendChild(watchNextNode);
	rightPanel().appendChild(commentsNode);
}

function comments() {
	return document.getElementById('comments');
}

function watchNext() {
	return document.getElementById('related');
}

function panelsContainNodes() {
	return leftBelowPanel().contains(comments()) && rightPanel().contains(watchNext());
}

function rightPanel() {
	return document.getElementById('secondary-inner');
}

function leftBelowPanel() {
	return document.getElementById('below');
}
